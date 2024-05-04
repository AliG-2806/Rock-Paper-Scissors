let humanVictory = 0;
let computerVictory = 0;
let numberOfRounds = 5;

function getSomeRandomNumber(){     
	return (Math.floor(Math.random() * 3));
    // have a random number, iqual to rock, paper or scissors
}

function getComputerChoice(){
    // convert the number decision to rock, paper or scissors decision and store it
	let randonNumber = getSomeRandomNumber();

	if(randonNumber == 0){
		return "rock";
	}
	if(randonNumber == 1){
		return "paper";
	}
	if(randonNumber == 2){
		return "scissors";
	}
}

function getHumanChoice(){
    // store the human decision
	let currentHumanChoice = prompt("What's your choice? (rock,paper,scissors): ");
	return currentHumanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    // play the round
    
	while(humanChoice != computerChoice){
		if(humanChoice == "rock"){
			if(computerChoice != "paper"){

				console.log("You win this round!");
				humanVictory++;

			} else {

				console.log("You lose this round!");
				computerVictory++;
			}

			break;
		}

		if(humanChoice == "paper"){
			if(computerChoice != "scissors"){

				console.log("You win this round!");
				humanVictory++;

			} else {

				console.log("You lose this round!");
				computerVictory++;
			}

			break;
		}

		if(humanChoice == "scissors"){
			if(computerChoice != "rock"){

				console.log("You win this round!");
				humanVictory++;

			} else {

				console.log("You lose this round!");
				computerVictory++;

			}

			break;
		}
	}

	if(humanChoice == computerChoice){
		console.log("This round is tie!");
	}
}

while(numberOfRounds){
    // we play the 5 rounds and return every result round
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();

	playRound(humanSelection , computerSelection);
	console.log(humanVictory + ", " + computerVictory); // show the score every time 
	
	numberOfRounds--;
}


if(humanVictory > computerVictory){ // win the human
	console.log("You win the game!");
} else {
	if(humanVictory < computerVictory){ // win the computer
		console.log("You lose this game!");
	
	} else {
		console.log("The game ended tie!"); // tie game
	}
}