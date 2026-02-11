
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
// connectDB(); // Uncomment when MONGO_URI is set

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('AJCE API is running...');
});

// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/departments', require('./routes/departmentRoutes'));
// app.use('/api/programs', require('./routes/programRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
