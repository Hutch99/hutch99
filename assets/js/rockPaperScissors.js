const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
      return userInput;
    }
    else{
      console.log("please enter a valid option, Rock, Paper or Scissors.");
    }
  }
  
  getUserChoice("paper");