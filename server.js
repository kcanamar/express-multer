const express = require("express")

// https://www.npmjs.com/package/multer
const multer = require("multer")

// multer variable
const multipart = multer()

const app = express()

app.use(express.static("public"))

// traditional middlware for parsing request body
app.use(express.urlencoded({extended: true})) // this is for application/x-www-form-urlencoded encoded data
app.use(express.json()) // this is for application/json encoded data

// 

// form handling route
app.post("/submit1", multipart.array("files") , (req, res) => {
    console.log("debug",{
        body: req.body,
        file: req.files,
        headers: req.headers["content-type"]
    })
    res.redirect("/")
})

app.listen(4200, () => console.log(`I hear you on PORT: 4200`))