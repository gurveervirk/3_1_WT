import express from 'express';
const router = express.Router();
import Student from '../models/Student.js';

// Create a new student
router.post('/', async (req, res) => {
    try {
        const { rollno, name, age, Class, section } = req.body;
        const student = new Student({ rollno, name, age, Class, section });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read a student by rollno
router.get('/:rollno', async (req, res) => {
    try {
        const rollno = req.params.rollno;
        console.log(rollno);
        const student = await Student.findOne({ rollno: rollno });
        if (!student) {
            return res.status(404).json({ error: 'Student not Found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a student by rollno
router.put('/:rollno', async (req, res) => {
    try {
        const rollno = req.params.rollno;
        const { name, age, Class, section } = req.body;
        const temp = {};
        if(name) temp.name = name;
        if(age) temp.age = age;
        if(Class) temp.Class = Class;
        if(section) temp.section = section;
        const student = await Student.findOneAndUpdate({ rollno }, {$set: temp }, { new: true });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a student by rollno
router.delete('/:rollno', async (req, res) => {
    try {
        const rollno = req.params.rollno;
        const student = await Student.findOneAndDelete({ rollno });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
