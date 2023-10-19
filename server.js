const Router = require("./router/router.js");
const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors')
var app = express()
app.use(cors({origin:'*'}))
//  mongoose.connect(process.env.DB_URL);



var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

 mongoose
//  .connect("mongodb+srv://ochhaneCKN:ckNashedi2023@ckncluster.f9aqza7.mongodb.net/test")
 .connect("mongodb://localhost:27017/task")
 .then(() => console.log("DB connection successful!"))
 .catch((error) => console.log(error));


Router.use(express.json())

// const PORT =process.env.PORT || 8000;
const PORT = 5050;
app.use(Router)
app.get('/data', (req, res) => {
    res.send("http://localhost")
}
)


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})