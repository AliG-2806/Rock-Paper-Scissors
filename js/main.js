let humanVictory = 0;
let computerVictory = 0;


function getSomeRandomNumber(){     
	return (Math.floor(Math.random() * 3));
    // have a random number, iqual to rock, paper or scissors
}                                 

function getComputerChoice(){
    // convert the number decision to rock, paper or scissors decision and store it
	const randonNumber = getSomeRandomNumber();

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

const buttonContainer = document.querySelector("#btn-container");    // DOM container for rock paper scissors button
const allButtons = document.querySelectorAll("button");              // DOM to manipulate button tag name        
const winner = document.querySelector("#winner");                    // DOM winner results container
const winnerTextResults = document.createElement("p");
const winnerText = document.createElement("p");                      // DOM winner results text

winnerTextResults.textContent = "Human: " + humanVictory + " , " + "Computer: " + computerVictory;

function playRound(humanChoice, computerChoice){    
    // play the round
    
	while(humanChoice != computerChoice){
		if(humanChoice == "rock"){
			if(computerChoice != "paper"){
				humanVictory++;

			} else {
				computerVictory++;
			}

			break;
		}

		if(humanChoice == "paper"){
			if(computerChoice != "scissors"){
				humanVictory++;

			} else {
				computerVictory++;
			}

			break;
		}

		if(humanChoice == "scissors"){
			if(computerChoice != "rock"){
				humanVictory++;

			} else {
				computerVictory++;
			}

			break;
		}
	}

    winnerTextResults.textContent = "Human: " + humanVictory + " , " + "Computer: " + computerVictory;
    console.log(humanVictory + " " + computerVictory);
}              

winner.appendChild(winnerTextResults);                                      // print results

allButtons.forEach((button) =>{ 
    // select human option and play round
    function getButtonValue(){        
        const humanChoice = button.value;
        const computerChoice = getComputerChoice();
        
        playRound(humanChoice,computerChoice);
        
        if(humanVictory == 5 || computerVictory == 5) {
            if(computerVictory == 5) {
                
                winner.textContent = "YOU LOOSE THE GAME";
                buttonContainer.style.display = "none";
                winnerTextResults.style.display = "none";
                
            } else {
                
                winnerText.textContent = "YOU WIN THE GAME!";
                buttonContainer.style.display = "none";
                winnerTextResults.style.display = "none";
            }
        }
        
    }

    button.addEventListener("click", getButtonValue);
});                             

winner.appendChild(winnerText);
document.getElementById("container").reset();