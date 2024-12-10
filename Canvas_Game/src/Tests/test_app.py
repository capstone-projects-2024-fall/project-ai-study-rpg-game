import pytest
import unittest
import json
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import app, init_db,  get_db_connection

@pytest.fixture
def client():
    # Set up the test client
    app.config['TESTING'] = True
    app.config['DATABASE'] = ':memory:' 
    init_db() 
    with app.test_client() as client:
        yield client  



def test_signup_success(client):
    payload = {
        "name": "John",
        "lastName": "Doe",
        "nickname": "johnny",
        "email": "john.doe@example.com",
        "password": "password123",
        "canvasKey": "fake_canvas_key",
        "selectedMotto": "Stay positive"
    }
    response = client.post("/signup", json=payload)
    assert response.status_code == 201
    assert response.json["message"] == "User registered successfully"

def test_signup_existing_user(client):
    payload = {
        "name": "John",
        "lastName": "Doe",
        "nickname": "johnny",
        "email": "john.doe@example.com",
        "password": "password123",
        "canvasKey": "fake_canvas_key",
        "selectedMotto": "Stay positive"
    }
    response = client.post("/signup", json=payload)
    assert response.status_code == 400
    assert response.json["message"] == "User already exists"

# Test Login
def test_login_success(client):
    payload = {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    response = client.post("/login", json=payload)
    assert response.status_code == 200
    assert response.json["message"] == "Login successful"

#test invalid password
def test_login_invalid_password(client):
    payload = {
        "email": "john.doe@example.com",
        "password": "wrongpassword"
    }
    response = client.post("/login", json=payload)
    assert response.status_code == 401
    assert response.json["message"] == "Invalid password"

#testing nonexistent user
def test_login_nonexistent_user(client):
    payload = {
        "email": "nonexistent@example.com",
        "password": "password123"
    }
    response = client.post("/login", json=payload)
    assert response.status_code == 404
    assert response.json["message"] == "Account does not exist"
 
 # Test Get User Data
def test_get_user_by_email(client):
    response = client.get("/api/user?email=john.doe@example.com")
    assert response.status_code == 200
    assert response.json["email"] == "john.doe@example.com"

def test_get_user_not_found(client):
    response = client.get("/api/user?email=unknown@example.com")
    assert response.status_code == 404
    assert response.json["message"] == "User not found"

# Test Delete Task (mocked)
def test_delete_task_missing_task_id(client):
    response = client.post("/api/deleteTask", json={})
    assert response.status_code == 400
    assert response.json["message"] == "Task ID is required"


# Test Account Age
def test_account_age(client):
    response = client.get("/account-age?email=john.doe@example.com")
    assert response.status_code == 200
    assert "years" in response.json

def test_account_age_missing_email(client):
    response = client.get("/account-age")
    assert response.status_code == 400
    assert response.json["message"] == "Email is required"


def test_account_age_user_not_found(client):
    response = client.get("/account-age?email=unknown@example.com")
    assert response.status_code == 404
    assert response.json["message"] == "User not found"

# Test Update Gold
def test_update_gold_success(client):
    payload = {
        "email": "john.doe@example.com",
        "amount": 50
    }
    response = client.post("/api/updatePlayerGold", json=payload)
    assert response.status_code == 200
    assert response.json["message"] == "Gold amount updated successfully"


def test_update_gold_insufficient_funds(client):
    payload = {
        "email": "john.doe@example.com",
        "amount": -5000
    }
    response = client.post("/api/updatePlayerGold", json=payload)
    assert response.status_code == 400
    assert response.json["message"] == "Not enough gold for this transaction"

# Test Get Assignments from Database
def test_get_assignments_missing_email(client):
    response = client.get("/assignmentFromDb")
    assert response.status_code == 400
    assert response.json["message"] == "Email is required"


def test_get_assignments_user_not_found(client):
    response = client.get("/assignmentFromDb?email=nonexistent@example.com")
    assert response.status_code == 404
    assert response.json["message"] == "User not found"

# Test Buy Items
def test_buy_items_success(client):
    payload = {
        "email": "john.doe@example.com",
        "items": [
            {
                "id": "item1",
                "name": "Sword",
                "description": "A sharp blade",
                "price": 100
            }
        ]
    }
    response = client.post("/api/buyItems", json=payload)
    assert response.status_code == 200
    assert response.json["message"] == "Items successfully purchased and added to inventory"


def test_buy_items_missing_data(client):
    payload = {
        "email": "john.doe@example.com"
    }
    response = client.post("/api/buyItems", json=payload)
    assert response.status_code == 400
    assert response.json["message"] == "Email and items are required"