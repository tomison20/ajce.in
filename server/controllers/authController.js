
const registerUser = async (req, res) => {
    res.status(200).json({ message: 'Register User' });
};

const loginUser = async (req, res) => {
    res.status(200).json({ message: 'Login User' });
};

const getMe = async (req, res) => {
    res.status(200).json({ message: 'User Data Display' });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
