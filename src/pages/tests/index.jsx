import { Button } from "@mui/material";
import React, { useState } from "react";
import "./quiz";
import { questions } from "./quiz";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [getResult, setGetResult] = useState(false);
  const [rightAnswer, setRightAnswer] = useState([]);

  const nextQuestion = () => {
    if (currentQuestion == questions.length - 1) {
      setCurrentQuestion(
        (currentQuestion) => (currentQuestion = questions.length - 1)
      );
    } else {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
  };
  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((currentQuestion) => currentQuestion - 1);
    } else {
      setCurrentQuestion((currentQuestion) => (currentQuestion = 0));
    }
  };

  return (
    <div>
      {showScore ? (
        <section>
          Your score is {score} of {questions.length}
        </section>
      ) : (
        <section>
          <h1 className="text-3xl uppercase">
            {questions[currentQuestion].questionText}
          </h1>
          <div>
            {questions[currentQuestion].answerOptions.map((item, index) => (
              <p key={index}>{item.ansewrText}</p>
            ))}
          </div>
          <div>
            <Button variant="outlined" onClick={previousQuestion}>
              prev
            </Button>
            <Button variant="outlined" onClick={nextQuestion}>
              next
            </Button>
            <Button onClick={setGetResult} disabled={currentQuestion!=questions.length-1} variant="contained">
              show result
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Quiz;
