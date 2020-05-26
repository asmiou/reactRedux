const userController = require("../controllers/userController");
require("../services/passportService");
const passport = require('passport');

const protectedRoute = passport.authenticate("jwt", {session:false})
const validCredentials = passport.authenticate("local", {session:false})

module.exports = function (expresServer){
    expresServer.get("/", function(req, res, next){
        res.send({
                server: "ON",
                url: "localhost:3090",
                message: "express server started on port 3090..."
            })
    });
    expresServer.post("/signup", userController.signup);
    expresServer.post("/login", validCredentials, userController.login);
    expresServer.get("/users", protectedRoute, userController.listUser);

}