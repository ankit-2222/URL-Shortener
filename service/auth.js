const jwt = require('jsonwebtoken');
const scret = "Ankit@ak15";

function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        }, 
        scret
    );
}

function getUser(token) {
    if (!token) return null;
    try{
        return jwt.verify(token, scret);
    }catch(error){
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}