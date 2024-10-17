const express = require("express");
const db = require("./config/mongoose-connection");

const apiRouter = require("./routes/api-router");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db();

app.use("/api", apiRouter);


app.listen("3000");
