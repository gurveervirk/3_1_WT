import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    Class: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
