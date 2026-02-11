
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['student', 'faculty', 'admin'],
        default: 'student'
    },
    department: { type: String }, // For faculty/students
    collegeId: { type: String, unique: true }, // For students
    isApproved: { type: Boolean, default: false }, // For faculty registration approval
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
