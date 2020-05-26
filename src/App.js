import React, { useState, useEffect } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import NameForm from "./components/NameForm";
// import List from "./components/List";

const CHOICES = {
    scissors: {
        name: "scissors",
        url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
    },
    paper: {
        name: "paper",
        url:
            "data:image/png;base64,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",
    },
    rock: {
        name: "rock",
        url: "https://freesvg.org/img/1435294641.png",
    },
};

let history = [];
let historyArray = [];
let num = 0;
let vcount = 0;
let lcount = 0;

function App() {
    // let htmlResult;
    const [flawless, setflawless] = useState("");
    let user = "";
    let [userC, setuserC] = useState({});
    let [computerC, setcomputerC] = useState({});
    let [result, setresult] = useState("");
    let [previousWinner, setPreviousWinner] = useState(null);
    const [historyA, sethistoryA] = useState([]);

    let play = (userChoice) => {
        // userChoose(userChoice);
        let uChoice = userChoice;
        let cChoice = computerChoice();
        let tempResult = getResult(uChoice, cChoice);
        let tempPrevious = "";

        if (tempResult === "Victory!") {
            tempPrevious = "You";
        } else if (tempResult === "Defeat!") {
            tempPrevious = "Computer";
        } else {
            tempPrevious = "Tie";
        }
        setflawless(checkHistory(tempResult));
        setPreviousWinner(tempPrevious);
        setuserC(CHOICES[uChoice]);
        setcomputerC(CHOICES[cChoice]);
        setresult(tempResult);

        // return [uChoice, cChoice, tempResult]
        // htmlResult = result;
        // console.log("result:", userC.name, computerC.name, getResult());
    };
    let checkHistory = (newResult) => {
        let prettyResult = "";
        num += 1;
        if (newResult === "Victory!") {
            vcount += 1;
            lcount = 0;
        } else if (newResult === "Defeat!") {
            vcount = 0;
            lcount += 1;
        } else {
            vcount = 0;
            lcount = 0;
        }
        console.log(vcount, lcount);
        if (vcount === 2) {
            newResult = "Flawless Victory!";
            prettyResult = newResult;
        } else if (lcount === 2) {
            newResult = "Catastrophic Defeat!";
            prettyResult = newResult;
        }
        // if (history[0] === "Victory!" && history[1] === "Victory!" && history[2] === "Victory!") {
        //     prettyResult = "Flawless Victory!";
        // }

        // history = history.concat(`${num}. ${newResult}`);
        history = [`${num}. ${newResult}`, ...historyA];
        sethistoryA(history);
        // historyArray = history.map((item) => <div>{item}</div>);
        console.log(history);
        return prettyResult;
    };
    let computerChoice = () => {
        let choiceArray = Object.keys(CHOICES);
        let compChoice = CHOICES[choiceArray[Math.floor(Math.random() * choiceArray.length)]];
        return compChoice.name;
    };

    // let userChoose = (userChoice) => {
    //   setuserC(CHOICES[userChoice]);
    //   let choiceArray = Object.keys(CHOICES);
    //   setcomputerC(
    //     CHOICES[choiceArray[Math.floor(Math.random() * choiceArray.length)]]
    //   );
    // };

    let getResult = (u, c) => {
        let result;
        if (u === "rock") {
            result = c === "scissors" ? "Victory!" : "Defeat!";
        }
        if (u === "paper") {
            result = c === "rock" ? "Victory!" : "Defeat!";
        }
        if (u === "scissors") {
            result = c === "paper" ? "Victory!" : "Defeat!";
        }
        if (u === c) result = "Tie game!";
        // if (result === "Victory!") {
        //   setPreviousWinner("You");
        // } else if (result === "Defeat!") {
        //   setPreviousWinner("Computer");
        // } else {
        //   setPreviousWinner("Tie");
        // }
        return result;
    };
    useEffect(() => {
        console.log(userC, computerC, result);
    });
    return (
        <div className="App">
            {/* {user === "" ? <NameForm></NameForm> : <h1>WTF</h1>} */}
            <ChoiceCard title="You" choice={userC} previousWinner={previousWinner} flawless={flawless} />
            {/* <div> */}
            <div className="d-flex flex-column justify-content-center mid">
                <button className="btn btn-primary my-3" onClick={() => play("rock")}>
                    Rock
                </button>
                <button className="btn btn-primary my-3" onClick={() => play("paper")}>
                    Paper
                </button>
                <button className="btn btn-primary my-3" onClick={() => play("scissors")}>
                    Scissors
                </button>
                {/* <div>Result is: {result}</div>
                <div id="flawless">{flawless}</div> */}
            </div>

            {/* </div> */}
            <ChoiceCard title="Computer" choice={computerC} previousWinner={previousWinner} flawless={flawless} />
            <div className="history my-auto mr-5">
                {historyA.map((item) => (
                    <div>{item}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
