# AlmaBetter Backend Project 

## Get_Youtube_Subscribers
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.

The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.

## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches. http://localhost:4001/
   ![Screenshot 2023-12-09 213503](https://github.com/Shiv199206/Get-youtube-subcribers/assets/126183364/24521e65-71b8-4873-b5b5-5a59404b707a)



2. **"/subscribers "** -> This endpoint returns an array of all subscribers in the database. http://localhost:4001/subscribers
   ![Screenshot 2023-12-09 213532](https://github.com/Shiv199206/Get-youtube-subcribers/assets/126183364/1c3d1c5f-1db2-43de-bfe8-63fc853f7ea1)



3 **"/subscribers/names "** -> This endpoint returns an array of subscribers with only two fields, their name and subscribed channel. http://localhost:4001/subscribers/names
 ![Screenshot 2023-12-09 213555](https://github.com/Shiv199206/Get-youtube-subcribers/assets/126183364/9cdab4d3-8389-4997-bada-e7be61f57d6f)


4. **"/subscribers/:id "** -> This returns the details of subscriber whose Id is provided in endpoint. http://localhost:4000/subscribers/:id
![Screenshot 2023-12-09 213721](https://github.com/Shiv199206/Get-youtube-subcribers/assets/126183364/b5b94062-be43-4cec-a0f5-ae348148dfda)

## Application Folder Structure
1. [src/app.js] -> For handling requests and responses.

2. [/index.js] -> To connect and start the server.

3. [src/createDatabase.js] -> To create database on MongoDB.

4. [src/data.js] -> Data that has to be connnected to a database.

5. [src/models/subscribers.js] -> For the schema.
   
6. [src/index.html] -> The home page for the application.
```
├── src/
│   ├── app.js
│   ├── createDatabase.js
│   ├── data.js
│   ├── index.html 
│   └── models/
│       ├── subscribers.js
├── index.js   
├── {} package-lock.json
└── {}package.json
```

## Installation 

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **nodemon index.js**

## Dependencies
Following dependencie are needed to run this application: 

1. express

2. mongoose

3. nodemon

## Deployment

Visit to see the working on Youtube :

Web Deployment : https://get-youtube-subscribers-sjg7.onrender.com/  

## Team Memebers

- shivchandra kumar
- md irshad alam
