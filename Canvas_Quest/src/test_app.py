import pytest
import json
from app import app, init_db

@pytest.fixture
def client():
    # Set up the test client
    app.config['TESTING'] = True
    app.config['DATABASE'] = ':memory:' 
    init_db() 
    with app.test_client() as client:
        yield client  

def test_signup(client):
    # Test user signup
    response = client.post('/signup', json={
        'name': 'John',
        'lastName': 'Doe',
        'email': 'john.doe@example.com',
        'password': 'securepassword123'
    })
    assert response.status_code == 201
    assert b'User registered successfully' in response.data

    # Test duplicate signup
    response = client.post('/signup', json={
        'name': 'John',
        'lastName': 'Doe',
        'email': 'john.doe@example.com',
        'password': 'securepassword123'
    })
    assert response.status_code == 400
    assert b'User already exists' in response.data

def test_login(client):
   
    client.post('/signup', json={
        'name': 'Jane',
        'lastName': 'Doe',
        'email': 'jane.doe@example.com',
        'password': 'securepassword456'
    })

    # Test user login
    response = client.post('/login', json={
        'email': 'jane.doe@example.com',
        'password': 'securepassword456'
    })
    assert response.status_code == 200
    assert b'Login successful' in response.data

    # Test invalid credentials
    response = client.post('/login', json={
        'email': 'jane.doe@example.com',
        'password': 'wrongpassword'
    })
    assert response.status_code == 401
    assert b'Invalid credentials' in response.data
