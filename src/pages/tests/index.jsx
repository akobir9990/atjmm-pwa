import React, { useState } from "react";
import { questions } from "./quiz";
import "./style.css";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerId, setAnswerId] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [complatedAnswers, setComplatedAnswers] = useState([]);

  const checkAnswer = (item) => {
    setIsAnswered(true);
    setAnswerId(item.id);
    if (item.isCorrect) {
      setScore((score) => score + 1);
    }
  };
  const tryAgain = () => {
    setShowScore(!showScore);
    setScore(0);
    setIsAnswered(false);
    setCurrentQuestion((currentQuestion) => 0);
  };

  const nextQeustion = () => {
    if (!isAnswered) {
      alert("siz savolga javob bermadingiz iltimos javob bering");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(!isAnswered);
    }
  };

  const getResult = () => {
    setShowScore(!showScore);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Test yakunlandi</h1>
          <p>
            To'g'ri javoblar soni:{score} <br />
            Umumiy savollar soni: {questions.length} <br />
            Xato javoblar: {questions.length - score}
          </p>
          <Button variant="contained" onClick={tryAgain}>
            qayta topshirish
          </Button>
        </div>
      ) : (
        <div>
          <h3>
            Savol - {currentQuestion + 1}/{questions.length}
          </h3>
          <h1>{questions[currentQuestion].questionText}</h1>
          <div
            className={
              "" + (isAnswered ? " disable " : "") + (!isAnswered ? " " : " ")
            }
          >
            {questions[currentQuestion].answerOptions.map((item) => (
              <div
                key={item.id}
                className={
                  "answerItem " +
                  (isAnswered && answerId === item.id
                    ? item.isCorrect
                      ? "currectAnswer "
                      : "wrongAnswer "
                    : "") +
                  (!isAnswered ? " " : "")
                }
                onClick={() => checkAnswer(item)}
              >
                {item.answerText}
              </div>
            ))}
          </div>
          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="outlined" onClick={nextQeustion}>
              next
            </Button>
            <Button variant="contained" onClick={getResult}>
              ShowScore
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Quiz;
