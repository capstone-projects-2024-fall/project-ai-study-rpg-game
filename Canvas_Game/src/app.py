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
            canvas_key TEXT,
            score INTEGER DEFAULT 0,
            selectedMotto TEXT NOT NULL,
            picture_url TEXT DEFAULT '',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS assignments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            assignment_id INTEGER,
            assignment_name TEXT,
            assignment_description TEXT,
            due_at TEXT, 
            course_id INTEGER,
            group_category_id INTEGER,
            points_possible INTEGER,
            published TEXT
        )
    ''')

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            course_id INTEGER,
            course_name TEXT,
            course_code TEXT,
            workflow_state TEXT, 
            enrollment_term_id TEXT
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





#fetches assignments from canvasAPI and puts them in the database
@app.route('/getAssignments', methods=['POST'])
def getAllAssignments(): 
    #function to grab assignments from frontend then put sort them into db
    data = request.json	#gets data from fetch call in react comp
    #print('recieved payload: ', data)	#testing
	
    canvasKey = data.get('canvasKey')
    #print(f'Canvas Key: {canvasKey}, FLAG 1')	#testing
	
    

    canvasURL = "https://templeu.instructure.com/api/v1/courses"
    headers = {"Authorization": f"Bearer {canvasKey}"}

                    # Save the token in the database
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    response = requests.get(canvasURL, headers=headers)
    if response.status_code == 200:		#check if its good
        getCourseList = response.json()  #get course list
        
        #print(course[0])
        #print('\n')
        
        for course in getCourseList: 
            length = len(course)
            if(length> 3):
                print(course)
                print('\n')
            
            #COURSE: id, name, course_code, workflow_state (status), enrollment_term_id
                course_id = course['id']
                course_name = course['name']
                course_code = course['course_code']
                workflow_state = course['workflow_state']
                enrollment_term_id = course['enrollment_term_id']

                cursor.execute('INSERT INTO courses (course_id, course_name, course_code, workflow_state, enrollment_term_id) VALUES (?, ?, ?, ?, ?)', 
                (course_id, course_name, course_code, workflow_state, enrollment_term_id))


                ####FROM OTHER FUNCTION LOLL  JUStT trying somm 
                newcanvasURL = f"https://templeu.instructure.com/api/v1/courses/{course_id}/assignments"  #might have to change bc courseid var
                newheaders = {"Authorization": f"Bearer {canvasKey}"}

                response = requests.get(newcanvasURL, headers=newheaders)
                if response.status_code == 200:		#check if its good
                    getAssignmentList = response.json()  #get assignment list
                    #print(getAssignmentList[0])
                    print('\n')
                    
                    for assignment in getAssignmentList: 

                        #ASSIGNMENTS: id, name, description, due_at, course_id, due_date_required, group_category_id, points_possible, published
                        assignment_id = assignment['id']
                        assignment_name = assignment['name']
                        assignment_description = assignment['description']
                        due_at = assignment['due_at']
                        course_id = assignment['course_id']
                        group_category_id = assignment['group_category_id']
                        points_possible = assignment['points_possible']
                        published = assignment['published']

                        cursor.execute('INSERT INTO assignments (assignment_id, assignment_name, assignment_description, due_at, course_id, group_category_id, points_possible, published) VALUES (?,?,?,?,?,?,?,?)', 
                        (assignment_id, assignment_name, assignment_description, due_at, course_id, group_category_id, points_possible, published))

                else:
                    return jsonify({"message": "NOT OK 400 THE ONE U ADDED"}), 400


        conn.commit()
        conn.close()
        return jsonify({"message": "courses pulled successfully"}), 201

    else: 
        return jsonify({"message": "NOT OK 400"}), 400




    conn.commit()
        #put these into catgory table - HAVE TO MOVE/ADJUST for loop also the errors are fucked 
        #try:
            #
        #    return jsonify({"message": "courses pulled successfully"}), 201
        #except sqlite3.IntegrityError:
        #    return jsonify({"message": "User already exists"}), 400 #IDK 
        #finally:
        #conn.close()

        #return jsonify({"message": "courses pulled from canvas api"}), 200
    
    #else: 
    #    return jsonify({"message": "NOT OK 400"}), 400


def getAssignmentsByCourse(course_id, canvasKey): 
    canvasURL = "https://templeu.instructure.com/api/v1/course_id/assignments"  #might have to change bc courseid var
    headers = {"Authorization": f"Bearer {canvasKey}"}

    response = requests.get(canvasURL, headers=headers)
    if response.status_code == 200:		#check if its good
        getAssignmentList = response.json()  #get course list
        #print(getAssignmentList)
        #print('\n')
        
        for assignment in getAssignmentList: 

            #ASSIGNMENTS: id, name, ?description?, due_at, course_id, due_date_required, group_category_id, points_possible, published
            assignment_id = assignment['id']
            assignment_name = assignment['name']
            assignment_description = assignment['description']
            due_at = assignment['due_at']
            course_id = assignment['course_id']
            group_category_id = assignment['group_category_id']
            points_possible = assignment['points_possible']
            published = assignment['published']


        return jsonify({"message": "courses pulled successfully"}), 201

    else: 
        return jsonify({"message": "NOT OK 400"}), 400







def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row  # Makes fetching rows easier with named columns
    return conn


if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)
