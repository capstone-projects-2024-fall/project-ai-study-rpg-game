import pytest
import requests

BASE_URL = "http://localhost:5000"
def reset_db():
    requests.post(f"{BASE_URL}/reset-db")
# signup success
def test_signup_success():
    payload = {
        "name": "Test",
        "lastName": "Tester",
        "nickname": "asdf",
        "email": "testuser@example.com",
        "password": "testpassword",
        "canvasKey": "9957~8DB6FZt4CxkfVNaEk7vrD2HRyQXH48tmhmZaZC6nC9UAUZmBDUhDBZ439PChuYuR",
        "selectedMotto": "Learning is fun!"
    }
    response = requests.post(f"{BASE_URL}/signup", json=payload)
    assert response.status_code == 201
    assert response.json()["message"] == "User registered successfully"

#signup fail duplicate email
def test_signup_duplicate_email():
    payload = {
        "name": "Test",
        "lastName": "Tester",
        "nickname": "asdf",
        "email": "testuser@example.com",
        }
    response = requests.post(f"{BASE_URL}/signup", json=payload)
    assert response.status_code == 500

    
#login
def test_login_success():
    payload = {
        "email": "testuser@example.com",
        "password": "testpassword"
    }
    response = requests.post(f"{BASE_URL}/login", json=payload)
    assert response.status_code == 200
    assert response.json()["message"] == "Login successful"



#login incorrect
def test_login_invalid_password():
    payload = {
        "email": "testuser@example.com",
        "password": "wrongpass"
    }
    response = requests.post(f"{BASE_URL}/login", json=payload)
    assert response.status_code == 401
    assert response.json()["message"] == "Invalid password"

# test get player data
def test_get_user_by_email():
    params = {"email": "testuser@example.com"}
    response = requests.get(f"{BASE_URL}/api/user", params=params)
    assert response.status_code == 200
    assert response.json()["email"] == "testuser@example.com"

#buy something from store
def test_buy_items():
    payload = {
        "email": "testuser@example.com",
        "items": [
            {"id": "item001", "name": "Sword", "description": "A sharp blade.", "price": 50},
            {"id": "item002", "name": "Shield", "description": "Protects against attacks.", "price": 75}
        ]
    }
    response = requests.post(f"{BASE_URL}/api/buyItems", json=payload)
    assert response.status_code == 200
    assert response.json()["message"] == "Items successfully purchased and added to inventory"


#empty assignments list
def test_get_assignments_empty():
    params = {"email": "testuser@example.com"}
    response = requests.get(f"{BASE_URL}/getUnsubmittedAssignmentsFromDb", params=params)
    assert response.status_code == 404
    assert response.json()["message"] == "No assignments found for the user"

#test user inventory
def test_get_user_items():
    """
    Test retrieving items from the user's inventory.
    """
    params = {"email": "testuser@example.com"}
    response = requests.get(f"{BASE_URL}/api/getUserItems", params=params)
    assert response.status_code == 200
    items = response.json()

    # Validate the structure of each item
    for item in items:
        assert "id" in item
        assert "name" in item
        assert "description" in item
        assert "price" in item

#update player gold
def test_update_player_gold():
    """
    Test updating a player's gold.
    """
    payload = {
        "email": "testuser@example.com",
        "amount": 100  # Positive to add gold, negative to subtract
    }
    response = requests.post(f"{BASE_URL}/api/updatePlayerGold", json=payload)
    assert response.status_code == 200
    assert response.json().get("message") == "Gold amount updated successfully"

#fetch all assignments


# Canvas Integration
    

#get course assginments from Canvas


#update assignment status


# complete an assignement 


#delete assignment


#update world state

# delete assignment