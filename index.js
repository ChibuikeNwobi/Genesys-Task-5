// const questions = [
//   {
//     prompt: "What is the capital of France?",
//     answer: "Paris"
//   },
//   {
//     prompt: "2 + 2 = ?",
//     answer: "4"
//   }
// ];

// let score = 0;

// for (let i = 0; i < questions.length; i++) {
//   // Use prompt in real browser; here we simulate input for demo
//   let userAnswer = "Paris"; // replace with prompt(questions[i].prompt);
//   if (userAnswer === questions[i].answer) {
//     score++;
//     console.log(`Correct!`);
//   } else {
//     console.log(`Incorrect. The answer is ${questions[i].answer}.`);
//   }
// }
// console.log(`Quiz Completed. Your score: ${score}/${questions.length}`);


/**
 * --------------------------------- Quiz App Steps ---------------------------------
 * 1. Create a list of questions and answers.
 * 2. Initialize a score variable to keep track of total score.
 * 3. Loop through each question, prompt the user for an answer.
 * 4. Check if the user's answer is correct and update the score accordingly.
 * 5. After all questions have been answered, display the total score to the user.
 */


/**
 * ---------------------------------- Quiz Questions ----------------------------------
 * ->Capital of Nigeria
 * ->3 * 4
 * ->100 + 32
 * ->Capital of England
 * ->What is the capital of America
 */

/**
 *  ---------------------- IMPLEMENTATION -----------------------
 */

let Quiz_Questions = [
    {
        prompt: 'what is the Capital of Nigeria?',
        answer: "Abuja",
        userAnswer: "",
        isCorrect: false
    },
    {
        prompt: '3 * 4 = ?',
        answer: "12",
        userAnswer: "",
        isCorrect: false
    },
    {
        prompt: '100 + 32 = ?',
        answer: "132",
        userAnswer: "",
        isCorrect: false
    },
    {
        prompt: 'Capital of England?',
        answer: "London",
        userAnswer: "",
        isCorrect: false
    },
    {
        prompt: '100 * 10 = ?',
        answer: "1000",
        userAnswer: "",
        isCorrect: false
    }
]

const startQuiz = () => {
    // return console.log(Quiz_Questions[0])

    let totalScore = 0;

    for (let i = 0; i <= Quiz_Questions.length - 1; i++) {
        let userInput = prompt(`Question ${i + 1} / ${Quiz_Questions.length}` + "\n" + Quiz_Questions[i].prompt);
        Quiz_Questions[i].userAnswer = userInput

        if (Quiz_Questions[i].answer.toLowerCase() === userInput.toLowerCase()) {
            totalScore += 1
            Quiz_Questions[i].isCorrect = true

        } else {
            Quiz_Questions[i].isCorrect = false
        }
    }

    for (let i = 0; i <= Quiz_Questions.length - 1; i++) {
        if (Quiz_Questions[i].isCorrect) {
            console.log(`Q${i + 1}: ${Quiz_Questions[i].prompt}`)
            console.log(`CORRECT ✅: Your answer ${Quiz_Questions[i].userAnswer} is correct!`)
        } else {
            console.log(`Q${i + 1}: ${Quiz_Questions[i].prompt}`)
            console.log(`INCORRECT ❌: Your answer ${Quiz_Questions[i].userAnswer} is incorrect`)
            console.log(`Correct Answer: ${Quiz_Questions[i].answer}`)
        }
    }

}



