import React from "react";

const DEFAULT_IMG = "https://freesvg.org/img/1457633527.png";

export default function ChoiceCard(props) {
	const won = props.title === props.previousWinner || props.previousWinner === "You";
	const www = props.flawless;
	let className;
	const hasPreviousGame = props.previousWinner === "Computer" || props.previousWinner === props.title;
	if (hasPreviousGame) {
		className = won ? "winner" : "loser";
	}

	let prompt;
	if (won) {
		prompt = "Won!";
		className = "winner";
		if (www === "Flawless Victory!") prompt = "Whoa! You should buy a lottery ticket!";
	} else if (props.previousWinner === "Tie") {
		prompt = "It's a tie!";
	} else if (props.previousWinner === null) {
		prompt = "Start";
	} else {
		prompt = "Defeated!";
		className = "loser";
		if (www === "Catastrophic Defeat!") prompt = "You were beaten senselessly by a computer!";
	}
	if (www === "Catastrophic Defeat!" && props.title === "Computer") prompt = "Flawless Victory!";
	return (
		<div className={`choice-card ${className}`}>
			<h1>{props.title}</h1>
			<div class="image-container">
				<img src={props.choice.url || DEFAULT_IMG} alt={props.title} />
			</div>
			<h3>{prompt}</h3>
		</div>
	);
}

// export default function ChoiceCard(props) {
//     return (
//         <div className={`choice-card ${props.winner}`}>
//             <h1>{props.title}</h1>
//             <img src={props.choice.url} alt={props.choice.name} />
//             <h3>{props.winner}</h3>
//         </div>
//     );
// }

// export default class ChoiceCard extends Component {
//   render() {
//     return (
//       <div className={`choice-card ${this.props.winner ? "winner" : "loser"}`}>
//         <h1>{this.props.title}</h1>
//         <img src={this.props.imgURL} alt={this.props.title} />
//         <h3>{this.props.winner ? "Win" : "Loss"}</h3>
//       </div>
//     );
//   }
// }
