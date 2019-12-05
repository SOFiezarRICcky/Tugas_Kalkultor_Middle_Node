const andminController = require("../controller/adminController")
const middleware = require("../middleware/middleware")

module.exports = app => {
    app.get("/index", andminController.index)
    app.post("/proses", middleware.validate_user, andminController.proses)
}