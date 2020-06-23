const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // CHeck if no token
    if (!token) {
        return res.status(401).json({ msg: 'Authorisation denied, missing token' });
    }

    // Verify token
    try {
        jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Invalid token' });
            } else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
