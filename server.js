
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');
const { URL } = require('../GLOBAL');



const PORT = 3000;









const handleError = (res, message) => {
    res.status(500).json({ message });
}

const app = express();
app.use(express.json());



app.post('/create-post', cors(), (req, res) => {
    const post = new Post(req.body);
    console.log(req);
    post
        .save()
        .then((result) => {
            res
                .status(200)
                .json(result);
        })
        .catch((err) => { handleError(res, err) })
})

app.get("/post", cors(), (req, res) => {
    Post
        .find()
        // .skip(2)
        // .limit(4)
        .sort({ title: -1 })
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

app.get("/profile/posts/:id", cors(), (req, res) => {
    Post
        .find({ autorOfPublic: req.params.id })
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


// Запуск подключения к базе данных
mongoose
    .set('strictQuery', true)
    .connect(URL)
    .then(() => console.log("connection"))
    .catch((err) => console.log("db connect err " + err));





// создание сервера
app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("listening on port " + PORT)
})