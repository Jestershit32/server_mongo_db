const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    image: String,
    rule: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthday: {
        age: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
        day: {
            type: Number,
            required: true,
        },
    }
})



const User = mongoose.model("user", userSchema);
module.exports = User;
// const user32 = [{
//     "nickname": "jestershit32",
//     "firstname": "максим",
//     "lastname": "веденев",
//     "image": "",
//     "rule": "administrator",
//     "password": "1337",
//     "birthday": {
//         "age": 2000,
//         "month": 9,
//         "day": 9
//     }
// },
// {
//     "nickname": "lox",
//     "firstname": "тип",
//     "lastname": "бывалый",
//     "image": "",
//     "rule": "simple",
//     "password": "123",
//     "birthday": {
//         "age": 1999,
//         "month": 12,
//         "day": 11
//     }
// },
// ]