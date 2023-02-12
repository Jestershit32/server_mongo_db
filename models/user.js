const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    nickname: String,
    firstname: String,
    lastname: String,
    image: String,
    birthday: {
        age: Number,
        month: Number,
        day: Number,
    }
})