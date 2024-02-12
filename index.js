//IMPORTS
const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const morgan=require("morgan");
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express();

//NATIVE IMPORTS 
const { sheduleController }=require("./controllers/shedules.controller")

/* CONFIGURATIONS */
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));
dotenv.config();

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get("/shedules", sheduleController.getShedules);
app.get("/shedules/:id", sheduleController.getSingleShedule);
app.post("/shedules", sheduleController.createShedule);
app.patch("/shedules/:id", sheduleController.updateShedule);
app.delete("/shedules/:id", sheduleController.deleteShedule);

const PORT=3000

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
