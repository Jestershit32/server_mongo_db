const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    autorOfPublic: {
        type: String,
        required: true,
    },
    creaters: [String]
    ,
    urlOnFile: {
        type: String,
        required: true,
    },
    tegs: [String],
})
const Post = mongoose.model("Post", postSchema);

module.exports = Post;

// const poste = [
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 2",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.07.2000",
//         "autorOfPublic": "уа",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },
//     {
//         "title": "Пост 1",
//         "info": "Разнообразный и богатый опыт реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом новая модель организационной деятельности влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт реализация намеченных плановых заданий в значительной степени обуславливает создание форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа соответствующий условий активизации.",
//         "date": "09.09.2000",
//         "autorOfPublic": "123421423",
//         "creaters": ["А.С. Пушкин", "В В Путин"],
//         "urlOnFile": "/files/1",
//         "tegs": ["Пушкин", "и тд"]
//     },

// ]