const mongoose = require('mongoose');

// define  schema
const questions = new mongoose.Schema({
   question:String,
   option1:String,
   option2:String,
   option3:String,
   option4:String,
   ans:Number
});


 // define model
const QuizQuestions = new mongoose.model('QuizQuestions', questions);
module.exports = QuizQuestions;