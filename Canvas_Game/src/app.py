from flask import Flask, request, jsonify
import sqlite3
import requests
from flask_cors import CORS
from datetime import datetime
from dateutil.relativedelta import relativedelta

app = Flask(__name__)
CORS(app,  resources={r"/*": {"origins": "http://localhost:5173"}})  # To allow cross-origin requests from your React frontend

# Will Create SQLite database and table if not exists
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            nickname TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            level INTEGER DEFAULT 1,
            experience INTEGER DEFAULT 0,
            gold INTEGER DEFAULT 100,
            canvas_key TEXT,
            score INTEGER DEFAULT 0,
            selectedMotto TEXT NOT NULL,
            picture_url TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    ''')

    cursor.execute ('''
        CREATE TABLE IF NOT EXISTS Items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER REFERENCES users(id),
        item_id INTEGER,
        item_name TEXT,
        item_description TEXT,
        item_type TEXT,
        item_price INTEGER,
        item_quantity INTEGER,
        item_category TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS assignments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER REFERENCES users(id),
            assignment_id INTEGER,
            assignment_name TEXT,
            assignment_description TEXT,
            due_at TEXT, 
            course_id INTEGER,
            submission_types TEXT,
            points_possible INTEGER,
            published TEXT,
            in_game_status TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER REFERENCES users(id),
            course_id INTEGER,
            course_name TEXT,
            course_code TEXT,
            workflow_state TEXT, 
            enrollment_term_id INTEGER
        )
    ''')

    conn.commit()
    conn.close()
    
#sign up logic here
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data['name']
    nickname = data ['nickname']
    last_name = data['lastName']
    email = data['email']
    password = data['password']
    canvas_key = data['canvasKey']
    selectedMotto = data['selectedMotto']

    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (name, last_name, nickname, email, password, canvas_key, selectedMotto) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                       (name, last_name, nickname, email, password, canvas_key, selectedMotto))
        conn.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "User already exists"}), 400
    finally:
        conn.close()

@app.route('/canvasKey', methods=['POST'])
def logCanvasKey():
        data = request.json
        print('Received payload:', data)
        # email = data['email']
        email = data.get('email')
        # canvasKey = data['canvasKey']
        canvasKey = data.get('canvasKey')
        print(f'Canvas Key: {canvasKey}, Email: {email}') 

        canvasUrl = "https://templeu.instructure.com/api/v1/users/self/profile"

        # Validate the Canvas API token by calling an API endpoint
        headers = {"Authorization": f"Bearer {canvasKey}"}
        try:
            response = requests.get(canvasUrl, headers=headers)
            if response.status_code == 200:
                # Token is valid
                user_profile = response.json()
                print("Token is valid!")
                print("User Profile:", user_profile)
                #picture=user_profile["avatar_url"]
                picture = user_profile.get('avatar_url')
                print("picture is" + picture)

                # Save the token in the database
                conn = sqlite3.connect('users.db')
                cursor = conn.cursor()
                cursor.execute("UPDATE users SET canvas_key = ?, picture_url = ? WHERE email = ?", (canvasKey, picture, email ))
                conn.commit()
                conn.close()
                return jsonify({"message": "Canvas key successfully validated and stored"}), 200
            else:
                # Token is invalid
                print("Token is invalid or expired.")
                return jsonify({"message": "Invalid Canvas key. Please check your key and try again."}), 400
        except Exception as e:
            print("Error validating Canvas key:", str(e))
            return jsonify({"message": "An error occurred while validating the Canvas key."}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Check if the account exists
    cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = cursor.fetchone()

    if not user:
        conn.close()
        return jsonify({"message": "Account does not exist"}), 404

    # Validate the password for the existing account
    cursor.execute('SELECT * FROM users WHERE email = ? AND password = ?', (email, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid password"}), 401
    
#account age
@app.route('/account-age', methods=['GET'])
def account_age():
    email = request.args.get('email')  # Get the email from query parameters

    if not email:
        return jsonify({"message": "Email is required"}), 400

    conn = get_db_connection()
    cursor = conn.execute('SELECT created_at FROM users WHERE email = ?', (email,))
    user = cursor.fetchone()
    conn.close()

    if not user:
        return jsonify({"message": "User not found"}), 404

    # Parse the creation date and calculate the account age
    created_at = datetime.strptime(user['created_at'], '%Y-%m-%d %H:%M:%S')
    current_date = datetime.now()
    difference = relativedelta(current_date, created_at)

    # difference provides years, months, days, etc.
    return jsonify({
        "years": difference.years,
        "months": difference.months,
        "days": difference.days
    })


# Getting user data from the database    
@app.route('/api/user', methods=['GET'])
def get_user_by_email():
    email = request.args.get('email')  # Get the email from query parameters

    if not email:
        return jsonify({"message": "Email is required"}), 400

    conn = get_db_connection()
    cursor = conn.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify(dict(user))  # Convert the row to a dictionary and return as JSON
    else:
        return jsonify({"message": "User not found"}), 404

#Getting assignment data from the database
@app.route('/assignmentFromDb', methods=['GET'])
def get_assignments_for_dashboard():
    email = request.args.get('email')  # Email is provided as a query parameter

    if not email:
        return jsonify({"message": "Email is required"}), 400

    # Connect to the database and fetch the user's assignments
    conn = get_db_connection()
    cursor = conn.cursor()

    # Get the user ID based on the email
    cursor.execute('SELECT id FROM users WHERE email = ?', (email,))
    user_row = cursor.fetchone()

    if not user_row:
        conn.close()
        return jsonify({"message": "User not found"}), 404

    user_id = user_row['id']

    # Fetch assignments for the user
    cursor.execute('''
        SELECT 
            assignments.assignment_name,
            assignments.assignment_description,
            assignments.due_at,
            assignments.in_game_status,
            assignments.id,
            courses.course_name
        FROM assignments
        JOIN courses ON assignments.course_id = courses.course_id
        WHERE assignments.user_id = ?
    ''', (user_id,))
    
    assignments = cursor.fetchall()
    conn.close()

    if not assignments:
        return jsonify({"message": "No assignments found for the user"}), 404

    # Convert rows to a list of dictionaries
    assignment_list = [
        {
            "assignment_name": row["assignment_name"],
            "assignment_description": row["assignment_description"],
            "due_at": row["due_at"],
            "in_game_status": row["in_game_status"],
            "course_name": row["course_name"],
            "id": row["id"]
        } for row in assignments
    ]

    return jsonify({"assignments": assignment_list}), 200



#fetches course and assignment info from canvasAPI and puts them in the user database
@app.route('/getCourseAndAssignmentsInfoFromCanvas', methods=['POST'])
def getAllAssignments(): 
    data = request.json	#gets data from fetch call in react comp (signup/assignmentpage rn)
    #print('recieved payload: ', data)	#testing
	
    canvasKey = data.get('canvasKey')   #gets canvasKey from react comp
	
    canvasURL = "https://templeu.instructure.com/api/v1/courses/?per_page=100"
    headers = {"Authorization": f"Bearer {canvasKey}"}


    response = requests.get(canvasURL, headers=headers) #fetch course list  //#MAYBE ADD TRY CATCH
    if response.status_code == 200:		#check if its good, TROUBLESHOOT BETTER lol
        getCourseList = response.json()  #gets course list: array of course objects
        
        #print(getCourseList, '\n') #testing 
        
        for course in getCourseList: 
            length = len(course)
            #print(course,'\n\n')   #testing
            if(length> 3):  #filters out courses with 'access_restricted_by_date' key 
                if(course['enrollment_term_id'] == 142):    #only grab classes for the current semester, check if u can grab current enrollment_term_id from profile page instead
                    print(course, '\n\n') #testing
                
                    ##parses through course data and puts it into vars
                    course_id = course['id']
                    course_name = course['name']
                    course_code = course['course_code']
                    workflow_state = course['workflow_state']
                    enrollment_term_id = course['enrollment_term_id']

                    #puts data into courses table in user database
                    conn = sqlite3.connect('users.db')  #NEED TO TROUBLESHOOT
                    cursor = conn.cursor()
                    cursor.execute("SELECT id FROM users WHERE canvas_key = ?", (canvasKey,))
                    user_row = cursor.fetchone()
                        
                    if user_row is None:
                        conn.close()
                        return jsonify({"message": "User not found in database"}), 404
                        
                    user_id = user_row[0] 
                    cursor.execute('INSERT INTO courses (course_id,user_id, course_name, course_code, workflow_state, enrollment_term_id) VALUES (?, ?, ?, ?, ?, ?)', 
                    (course_id,user_id, course_name, course_code, workflow_state, enrollment_term_id))
                    conn.commit()
                    conn.close()

                    getAssignmentsByCourse(course_id, canvasKey)    #gets assignment info and puts into users db
        return jsonify({"message": "Success! Course info stored in database"}), 200
    
    
    else:
        return jsonify({"message": "SOMETHING WENT WRONG IN getAssignments"}), 400

#update assignment status of the Jira Board               
@app.route('/api/updateTaskStatus', methods=['POST'])
def update_task_status():
    data = request.json
    task_id = data.get('taskId')
    new_status = data.get('status')

    if not task_id or not new_status:
        return jsonify({"message": "Task ID and new status are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('UPDATE assignments SET in_game_status = ? WHERE id = ?', (new_status, task_id))
    conn.commit()
    conn.close()

    print('Received task ID:', task_id)
    print('Received new status:', new_status)

    return jsonify({"message": "Task status updated successfully"}), 200


#gets assignments data from canvas API, parses through it, puts data we want into assignments 
def getAssignmentsByCourse(course_id, canvasKey): 

    newcanvasURL = f"https://templeu.instructure.com/api/v1/courses/{course_id}/assignments"
    newheaders = {"Authorization": f"Bearer {canvasKey}"}

    response = requests.get(newcanvasURL, headers=newheaders)   #MAYBE ADD TRY CATCH
    if response.status_code == 200:		#check if its good, TROUBLESHOOT BETTER lol
        getAssignmentList = response.json()  #get assignments list(array of assignment objects) from canvas
        #print(getAssignmentList[1], '\n') #testing

        conn = sqlite3.connect('users.db')  #NEED TO TROUBLESHOOT, maybe do it differently idk
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM users WHERE canvas_key = ?", (canvasKey,))
        user_row = cursor.fetchone()
                        
        if user_row is None:
            conn.close()
            return jsonify({"message": "User not found in database"}), 404
                        
        user_id = user_row[0]

        count = 0
        #for every assignment in getAssignmentList, insert data into assignments table in user database
        for assignment in getAssignmentList: 
            #if(count == 0): #testing
                #print(assignment, '\n')

            #parses through assignment data and puts it into vars
            assignment_id = assignment['id']
            assignment_name = assignment['name']
            assignment_description = assignment['description']
            due_at = assignment['due_at']
            assignments_course_id = assignment['course_id'] ##THIS WAS WEIRD
            
            submission_types = assignment['submission_types']   #submission_types is an ARRAY
            submission_types_list_toString = ''
            for sub_type_item in submission_types: 
                submission_types_list_toString += sub_type_item
                submission_types_list_toString += ","
            #if len(submission_types) > 1:  #havent tested with this 
            #    submission_types_1 = 'MULTIPLE'
            #else: 
            #    submission_types_1 = submission_types[0]

            points_possible = assignment['points_possible']
            published = assignment['published']
            in_game_status = "Undecided"    #DEFAULT

            #puts it into assignments table in user db
            cursor.execute('INSERT INTO assignments (assignment_id,user_id, assignment_name, assignment_description, due_at, course_id, submission_types, points_possible, published, in_game_status) VALUES (?,?,?,?,?,?,?,?,?,?)', 
            (assignment_id, user_id, assignment_name, assignment_description, due_at, assignments_course_id, submission_types_list_toString, points_possible, published, in_game_status))

            count+=1

        conn.commit()
        conn.close()
        return jsonify({"message": "Success! Assignments info stored in database"}), 200

    else:
        return jsonify({"message": "SOMETHING WENT WRONG IN getAssignmentsByCourse()"}), 400


@app.route('/api/updatePlayerGold', methods=['POST'])
def updatePlayerGold():
    data = request.json
    #gets email and amount from request
    email = data.get('email')
    amount = data.get('amount')  # Positive for earning, negative for spending
    #throws error if email or amount is not supplied in payload
    if not email or amount is None:
        return jsonify({"message": "Email and amount are required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT gold from users where email = ?', (email,))
    queryRes = cursor.fetchone()

    if queryRes is None:
        return jsonify({"message": "Email does not exist"}), 400

    usersGold = queryRes[0]
    currentGold = usersGold + amount  # Handles both addition and subtraction

    if currentGold < 0:
        return jsonify({"message": "Not enough gold for this transaction"}), 400

    cursor.execute('UPDATE users SET gold = ? WHERE email = ?', (currentGold, email))
    conn.commit()
    conn.close()
    return jsonify({"message": "Gold amount updated successfully"}), 200

    

@app.route('/api/getPlayerGold', methods=['GET'])
def getPlayerGold():
    #gets user's email from request URL
    email = request.args.get('email')
    
    if not email:
         return jsonify({"message": "Email is required"}), 400
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT gold from users where email = ?', (email,))
    #makes sure user's gold was returned
    queryRes = cursor.fetchone()
    if queryRes == None:
        return jsonify({"message": "Email does not exist"}), 400
    

    #gets users gold from query response
    usersGold = queryRes[0]

    return jsonify({"gold": usersGold}), 200


def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row  # Makes fetching rows easier with named columns
    return conn


if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)
