# Node-Frist-Api
This project have the aim of learn basic concepts about node.js with Typescript and how to create a RESTful API with it from the scratch.

## How to run
First of all, you need to install and run a instance of mongodb on port 27017, that is the database that we use here. If you use docker, you can download a image and run it with the following comands.

    sudo docker pull mongo && sudo docker run --name mongodb-nodejs -p 27017:27017 mongo:latest

To run the application its necessary also node and npm installed of corse. You can install the node dependencies with the following command inside the directory of the project.

    npm install

And finaly, to start the server you can user the comand:

    npm run dev

## Accessing the endpoints

The API exposes the port 8100 of your localhost. So you can make a get request to

    localhost:8100

for acess the initial endpoint.

Theres also two another endpoints to manipulate data from the mongodb with a simple schema created to a user, with simple fields. With get request to

    localhost:8100/users

you can fetch data from the server of all users created. And with post request to the same url with a json body you can create a user in the database. An example of json to use:

    {
	    "email": "dennis@gmail.com",
	    "name": "Dennis",
	    "age": 20
    }




