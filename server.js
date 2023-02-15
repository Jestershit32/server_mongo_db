
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');


const PORT = 3000;
const URL = "mongodb+srv://admin:admin1337@hranilishe.qimdddk.mongodb.net/diplom?retryWrites=true&w=majority";








const handleError = (res, message) => {
    res.status(500).json({ message });
}

const app = express();




app.get("/post", cors(), (req, res) => {
    Post
        .find()
        .sort({ title: 1 })
        .then((post) => {
            res
                .status(200)
                .json(post)
        })
        .catch(() => handleError(res, "чето не так с постами"))
})




app.get("/post/:id", cors(), (req, res) => {
    Post
        .findById(req.params.id)
        .sort({ title: 1 })
        .then((post) => {
            res
                .status(200)
                .json(post)
        })
        .catch(() => handleError(res, "чето не так"))
})






app.get("/profile/:id", cors(), (req, res) => {
    User
        .findById(req.params.id)
        .sort({ title: 1 })
        .then((post) => {
            res
                .status(200)
                .json(post)
        })
        .catch(() => handleError(res, "чето не так"))
})




app.use(cors());

mongoose
    .connect(URL)
    .then(() => console.log("connection"))
    .catch((err) => console.log("db connect err " + err));

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("listening on port " + PORT)
})