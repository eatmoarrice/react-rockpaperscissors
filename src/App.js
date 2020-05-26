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
        url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    },
    rock: {
        name: "rock",
        url: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
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
