const express = require("express")
const multer = require("multer")

const app = express()

app.use(express.static("public"))



app.listen(4200, () => console.log(`I hear you on PORT: 4200`))