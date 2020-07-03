module.exports = {
    ensureAuth: (req, res, next) => {
        console.log("ensuring")
        console.log(req.user)
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({ status: "Not Authenticated"});
        }
    },
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect("/");
        } else {
            next();
        }
    }
};