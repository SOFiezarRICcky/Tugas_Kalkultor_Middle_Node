const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes/router")

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.render("index");
});



require('./routes/router')(app)


app.listen(3011, () => {
    console.log("Server Berjalan di Port 3000")
})

