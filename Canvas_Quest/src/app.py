from flask import Flask, request, jsonify
import requests
import json
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  


def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data['name']
    last_name = data['lastName']
    email = data['email']
    password = data['password']

    try:
        conn = sqlite3.connect('users.db')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO users (name, last_name, email, password) VALUES (?, ?, ?, ?)', 
                       (name, last_name, email, password))
        conn.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "User already exists"}), 400
    finally:
        conn.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE email = ? AND password = ?', (email, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

def canvasGetUserId():
    try:
        userResp = requests.get('https://templeu.instructure.com/api/v1/users/self', headers={'Authorization': 'Bearer 9957~nLVAnfweEWYCnMuUXGYFnDQwx7VyXhmA4N7U7nJCmMcJ8YEFCkVWCnmFZ83Ze2tU'})
        if userResp:
            userRespData = userResp.json()
            return userRespData['id']    
    except:
        print('failed to find user or canvas token not valid')


        
def getCoursesByUserId(userId):
    url = 'https://templeu.instructure.com/api/v1/users/self/courses'
    print(url)
    courseResp = requests.get(url=url, headers={'Authorization': 'Bearer 9957~nLVAnfweEWYCnMuUXGYFnDQwx7VyXhmA4N7U7nJCmMcJ8YEFCkVWCnmFZ83Ze2tU'})
    if courseResp:
        courseRespData = courseResp.json()
        return courseRespData
        
        
        
def getAssignmentsByCourse(course):
    for course in courses:
        url = 'https://templeu.instructure.com/api/v1/users/self/courses/'+str(course['id'])+'/assignments'
        assignmentsResp = requests.get(url=url, headers={'Authorization': 'Bearer 9957~nLVAnfweEWYCnMuUXGYFnDQwx7VyXhmA4N7U7nJCmMcJ8YEFCkVWCnmFZ83Ze2tU'})
        if assignmentsResp:
            assignmentRespData = assignmentsResp.json()
            return assignmentRespData



if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)
