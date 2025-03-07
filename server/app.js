const express = require("express");
const app = express();
const ConnectDB = require("./db/conn")

ConnectDB();
app.use(require("./routers/auth"));

app.listen(5000, () => {
    console.log("Server is Running on Port 4000");
})