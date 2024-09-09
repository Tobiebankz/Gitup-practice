const express = require('express');
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const expresshandlebars = require("express-handlebars");
const expfileupload = require("express-fileupload");
const { extname } = require('path');
const generalroute = require("./routes/generalroutes")
const dashboardroute = require("./routes/dashboardroutes")

//connect to DB
const url = process.env.MONGO_URL
mongoose.connect(url).then(() =>
    console.log("Connected to DB successfully")
).catch((err) => (
    console.log(err.message)
))

//Setup template engine
app.engine("hbs", expresshandlebars.engine({
    extname: "hbs",
    defaultlayout: "Main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

//setup view engine
app.set("view engine", "hbs")

//setup middleware
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(expfileupload())
app.use("/", generalroute)
app.use("/dashboard", dashboardroute)
app.use("*", (req, res)=>{
    res.render("page-error")
})



const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})