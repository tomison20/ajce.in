
const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    hod: {
        name: { type: String },
        email: { type: String },
        image: { type: String },
    },
    facultyCount: { type: Number, default: 0 },
    studentCount: { type: Number, default: 0 },
    programs: [{ type: String }], // Array of program names/IDs
}, {
    timestamps: true,
});

module.exports = mongoose.model('Department', departmentSchema);
