const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const morgan=require("morgan");

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));


app.listen(3000, () => {
    console.log("Listening on port 3001")
})

