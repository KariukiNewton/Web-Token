const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser")

const uri = `mongodb+srv://newtonkaris176:Mongo7266_@level0cluster.pow0n.mongodb.net/jwt?retryWrites=true&w=majority`;

const app = express();

//app.get('/', (req, res) => {
//    res.send('Hello Modafacka!!!!!');
//});

app.listen(4000, () => {
    console.log("Server Started on port 4000")
});

mongoose.connect("mongodb://localhost:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connection Successful");
}).catch((err) => {
    console.error("DB connection error:", err.message);
});

app.use(
    cors({
        origin: ["http://localhost:5173"],
        method: ["GET", "POST"],
        credentials: true
    })
);

app.use(cookieParser())
app.use(express.json());
app.use("/", authRoutes);