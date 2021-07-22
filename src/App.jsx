import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";


function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

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
      question: "Which country operationalized world’s largest radio telescope?",
      answers: [
        {
          text: "USA",
          correct: false,
        },
        {
          text: "China",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Nobel prize is awarded for which of the following disciplines",
      answers: [
        {
          text: "Literature, peace and economics",
          correct: false,
        },
        {
          text: "Medicine or Physiology",
          correct: false,
        },
        {
          text: "Chemistry and PhysicsFood",
          correct: false,
        },
        {
          text: "All of above",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which of the following ingredients is not normally used to brew beer?",
      answers: [
        {
          text: "Vinegar",
          correct: true,
        },
        {
          text: "Hops",
          correct: false,
        },
        {
          text: "Yeast",
          correct: false,
        },
        {
          text: "Malts",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: " Albert Einstein was a scientist famous for his work on physics. Where was he born?",
      answers: [
        {
          text: "Great Britain",
          correct: false,
        },
        {
          text: "Germany",
          correct: true,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "A country that is divided into 22 administrative regions and subdivided into 95 departments is:",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "France",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "How much of your vision do you lose if you go blind in one eye?",
      answers: [
        {
          text: "50%",
          correct: false,
        },
        {
          text: "70%",
          correct: false,
        },
        {
          text: "40%",
          correct: false,
        },
        {
          text: "20%",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which country’s Antarctic claim covers the greatest swath of longitude?",
      answers: [
        {
          text: "Australia",
          correct: true,
        },
        {
          text: "New Zealand",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented the BALLPOINT PEN?",
      answers: [
        {
          text: "Wright Brothers",
          correct: false,
        },
        {
          text: "Biro Brothers",
          correct: true,
        },
        {
          text: "Ric Brothers",
          correct: false,
        },
        {
          text: "Bicco Brothers",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What J. B. Dunlop invented?",
      answers: [
        {
          text: "Rubber Boots",
          correct: false,
        },
        {
          text: "Needles",
          correct: false,
        },
        {
          text: "Pneumatic rubber tire",
          correct: true,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which scientist discovered the radioactive element radium?",
      answers: [
        {
          text: "Albert Einstine",
          correct: false,
        },
        {
          text: "Marie Curie",
          correct: true,
        },
        {
          text: "Sir Isaac Newton",
          correct: false,
        },
        {
          text: "Benjamin Franklin",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What James Watt invented?",
      answers: [
        {
          text: "Rotary Steam Engine",
          correct: true,
        },
        {
          text: "Hot air ballon",
          correct: false,
        },
        {
          text: "Steam boat",
          correct: false,
        },
        {
          text: "Diving bell",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which planet is known as the 'Watery Planet'?",
      answers: [
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Earth",
          correct: true,
        },
        {
          text: "Jupiter",
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
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
