# Install
pip install -r requirements.txt

# Usage
uvicorn main:app --reload

# Accessing the API
in browser http://127.0.0.1:8000

# API List
http://127.0.0.1:8000/openapi.json

# Functionalities 
* API to Search documents from Elastic Search including Query Expansion feature
* API to Add Vaccine to Strain relationship to neo4js and to retrieve the list

# Using Dockerfile
 * docker build -t covid-search:latest . 
 * docker run -d -p 8000:8000 --name covid-container covid-search:latest

For local development, it is better recommended to use the 'Install' and 'Usage' steps as building docker image specially 
the first time and after a change in requirements.txt takes a very long time 

