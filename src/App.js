import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  //29:00--> Above code checks our timer and when it turns to 0, it changes timeout to true
  //When u click on wrong answer again this timeout will be true and you'll lose the game
  const [earned, setEarned] = useState("$ 0");
  //43:00 --> Earning logic

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "When did India won their second ODI worldcup?",
      answers: [
        {
          text: "2011",
          correct: true,
        },
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2003",
          correct: false,
        },
        {
          text: "1983",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "When did Google launch?",
      answers: [
        {
          text: "2004",
          correct: false,
        },
        {
          text: "2002",
          correct: false,
        },
        {
          text: "1998",
          correct: true,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who has more than 12k ODI runs?",
      answers: [
        {
          text: "Suresh Raina",
          correct: false,
        },
        {
          text: "Andrew Flintoff",
          correct: false,
        },
        {
          text: "MS Dhoni",
          correct: false,
        },
        {
          text: "Mahela Jayawardene",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "When did India gain independence?",
      answers: [
        {
          text: "1944",
          correct: false,
        },
        {
          text: "1947",
          correct: true,
        },
        {
          text: "1948",
          correct: false,
        },
        {
          text: "1937",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who scored 200 on Lord's Test Debut?",
      answers: [
        {
          text: "Virat Kohli",
          correct: false,
        },
        {
          text: "Devon Conway",
          correct: true,
        },
        {
          text: "Ajinkya Rahane",
          correct: false,
        },
        {
          text: "Trent Boult",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "When did India won their second ODI worldcup?",
      answers: [
        {
          text: "2011",
          correct: true,
        },
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2003",
          correct: false,
        },
        {
          text: "1983",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "When did Google launch?",
      answers: [
        {
          text: "2004",
          correct: false,
        },
        {
          text: "2002",
          correct: false,
        },
        {
          text: "1998",
          correct: true,
        },
        {
          text: "1995",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who has more than 12k ODI runs?",
      answers: [
        {
          text: "Suresh Raina",
          correct: false,
        },
        {
          text: "Andrew Flintoff",
          correct: false,
        },
        {
          text: "MS Dhoni",
          correct: false,
        },
        {
          text: "Mahela Jayawardene",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "When did India gain independence?",
      answers: [
        {
          text: "1944",
          correct: false,
        },
        {
          text: "1947",
          correct: true,
        },
        {
          text: "1948",
          correct: false,
        },
        {
          text: "1937",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );
  //44:50 --> Changing the earned amount as we increase in question number
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {/* 43:15 --> Stop logic */}
            {stop ? (
              <h1 className="endText">{`You earned : ${earned}`}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                    {/* Whenever question number changes timer will be set to 30s again 50:55 */}
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                  {/* 30:00 --> Passing props to <Trivia></Trivia> */}
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((item) => (
                <li
                  className={
                    questionNumber === item.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
