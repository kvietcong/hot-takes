module.exports = {
    ensureAuth: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({ status: "Not Authenticated"});
        }
    }
};