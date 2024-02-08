const QuizQuestions = require('../models/userSchema');


exports.postData = async(req, res)=>{
     const { question, option1 ,option2,option3,option4,ans}= req.body;

     if(!question || !option1 || !option2 || !option3 || !option4 || !ans){
        res.status(400).json({error:"all inputs are required"});
     }
      
     try {
        const data = new QuizQuestions({
            question, option1 ,option2,option3,option4,ans
        });
       await data.save();
       res.status(200).json(data);
     } catch (error) {
        res.status(400).json(error);
        console.log("error in controlllers");
     }
}

exports.getData = async(req , res)=>{
    try {
        const quest = await QuizQuestions.find();
        res.status(200).json(quest);
    } catch (error) {
        res.status(400).json(error);
        console.log("error in controlllers");
    }
}