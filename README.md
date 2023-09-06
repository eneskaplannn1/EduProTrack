## [EduProTrack](https://eduprotrack-frontend.onrender.com)  
login function takes some time due to cloud provider

# MERN Stack Application

![Screenshot_3](https://github.com/eneskaplannn1/EduProTrack/assets/111773033/e579a6fd-fad5-4de2-bb9c-3d93a494786e)

### This Project was bootstrapped with [Vite](https://github.com/vitejs/vite)

## Introduction
This is a side project I've been working on, a full-stack school management application created using the MERN stack (MongoDB, Express, React, and Node.js). The application focuses on managing students, teachers, classes, and homework, and how they are interconnected. In this application, teachers can assign homework to their students, students can submit their homework to their teachers and await evaluation, among other features. Please note that since this project is something I've been working on in my free time, I cannot guarantee that everything will work flawlessly. However, I would greatly appreciate it if you could report any issues you encounter.

## Key Features

- Authentication using jsonwebtoken (jwt)
  - Json web token has an expiration time and when the token expires the user must log back into the application
- Encrypting users password while creating new user (teacher,student,admin)
- Creating connection between Multiple Mongoose Models (Teacher,Student,Admin,Class,Homework)
  - Student and Teacher Model (one-to-many relationship),
  - Teacher and Homework Model (one-to-many relationship),
  - Homework and Classroom Model (one-to-one),
  - Homework and Teacher Model (Many-to-One relationship),
  - Homework and Student Model (Many-to-Many relationship),
  - Classroom and Student Model (Many-to-One relationship),
  - Classroom and Teacher Model (Many-to-One),
  - are interconnected.

- Student Features
  - Students can view all homework assignments assigned to them.
  - If a homework assignment's status is pending, students can submit their homework.
    
- Teacher Features
  - the teacher can see all the students in his/her class
  - the teacher can see the homework of all students in his/her class
  - the teacher can assign homework to the class to which it belongs, that is, to all students in that class or to specific students in that class
  - the teacher can update the status of the submitted homework as either failed or successfull
  - the teacher can see all the information about the class he/she belongs to
  - teacher can add new students to the class
    
 - Admin Features
    - admin can do all the things that teachers do
    - Admin can see all students
    - Admin can see all homeworks
    - Admin can see all the teachers and create new teachers
    - Admin can see all the classrooms with the details

## Technologies Used

This project was created using the following technologies.

#### Client
- React JS
- React Query (I believe this is one of the greatest libraries for React; I used it for managing Remote State).
- ContextApi (For managing and centralizing application state)
- React-router-dom (To handle routing)
- Axios (for JWT authentication via interceptors and for making API calls).
- Styled Components (For styling)
- React-hot-toast (for displaying success/error notifications).
- React-hook-form (To handle Forms)
- React-icons (For icons)
- React-spinners (for managing loading states).

#### Server
- Express
- Mongoose
- JWT (For authentication)
- bcryptjs and crypto (for data encryption)
- Validator (for validating Mongoose Schemas)
- and more..

#### Database
- MongoDB (MongoDB Atlas)

## Challenge Task Solutions
## What I learned from this project 


## How to Run Application

First of all clone the project

```bash
git clone https://github.com/eneskaplannn1/EduProTrack.git
```

The "**EduProTrack-frontend**" directory contains the React code. The "**EduProTrack-backend**" directory contains the code for the node.js express server.This project requries a **MongoDB** database to run.

cd both Project Directory and open two terminal window

### First window

```bash
cd EduProTrack-frontend
npm install
npm run dev # (runs react at localhost:5173)
```

### Second window

Important: Before starting the Node.js server, make sure to fill in the fields in the example.env file located in the EduProTrack-server root directory with the correct values. Then, run the following commands consecutively.

```bash
cd EduProTrack-frontend
npm install
node ./dev-data/data/import-devData.js --import # this code is responsible for creating teacher,homework student and class datas into mongoDB database
npm start # (runs nodemon at localhost:3000)
```


### Comment 
I intend to keep adding more features to this application such as notifications and messages, so if you like it, please give it a star, that will encourage me to to keep improving the project.



## Contributing

Pull requests are welcome. For major changes , please open an issue first to discuss what you would like to change.
