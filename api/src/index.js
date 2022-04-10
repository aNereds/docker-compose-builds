const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const { connectDB } = require('./helpers/db');
const { host, port, db, authApiUrl } = require('./config');
const app = express();
const postSchema = new mongoose.Schema({
  name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log(`started api service on: ${port}`);
    console.log(db);

    // const silience = new Post({ name: 'silience'});
    // console.log(silience.name);
  });
};

app.get('/test', (req, res) => {
  res.send('Our api server works');
});

app.get('/api/testapidata', (req, res) => {
  res.json({
    testwithapidata: true
  });
});

app.get("/testwithcurrentuser", (req, res) => {
  axios.get(authApiUrl + "/currentUser").then(response => {
    res.json({
      testwithcurrentuser: true,
      currentUserFromAuth: response.data
    });
  });
});


connectDB()
  .on('error', console.log)
  .on('disconnected', connectDB)
  .once('open', startServer);