const userController = require("./controllers/userController");

module.exports = function (expresServer){
    expresServer.get("/", function(req, res, next){
        res.send({
                server: "ON",
                url: "localhost:3090",
                message: "express server started on port 3090..."
            })
    });
    expresServer.post("/signup", userController.signup);
}