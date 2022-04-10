const express = require("express");
const axios = require("axios");
const { port, host, db, apiUrl } = require("./config");
const { connectDB } = require("./helpers/db");

const app = express();

app.get("/test", (req, res) => {
    res.send("Our authentication server is working correctly");
});

app.get("/api/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "foo@gmail.com"
    });
});

app.get("/testwithapidata", (req, res) => {
    console.log("here");
    axios.get(apiUrl + "/testapidata").then(response => {
        console.log("here2");

        res.json({
            testapidata: response.data.testwithapidata
        });
    });
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Started authentication service on port ${port}`);
        console.log(`Our host is ${host}`);
        console.log(`!!!!!!!!!!!!!!!! ${apiUrl} + /testapidata`);
    });
};

connectDB()
    .on("error", console.log)
    .on("disconnected", connectDB)
    .once("open", startServer);