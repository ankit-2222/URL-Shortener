const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth');

async function handelUserSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        await User.create({ name, email, password });
        return res.redirect('/');
    } catch (error) {
        console.error("Signup Error:", error);
        return res.status(500).render('signup', { error: "Signup failed. Try again!" });
    }
}

async function handelUserLogin(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password }); // Await is missing in your original code

        if (!user) {
            return res.render('login', {
                error: "Invalid email or password!!!",
            });
        }

        const token = setUser(user);
        res.cookie('uid', token);
        return res.redirect('/');
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).render('login', { error: "Login failed. Try again!" });
    }
}

module.exports = {
    handelUserSignup,
    handelUserLogin
};
