const connectToMongo = require('./db');
const Student = require('./models/Student');
const mongoose = require('mongoose');

const addNewStudent = async () => {
    connectToMongo();

    const newStudent = new Student({
    name: 'James Bond',
    age: 22,
    Class: 'CSE',
    section: 'A',
    rollno: '007',
    });

    try {
    const savedStudent = await newStudent.save();
    console.log('Student saved successfully:', savedStudent);
    } catch (error) {
    console.error('Error saving student:', error);
    } finally {    
    mongoose.connection.close();
    }
};

addNewStudent();
