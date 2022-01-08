function computerPlay(){
    const ResultDict = {
        '0': 'Rock',
        '1': 'Paper',
        '2': 'Scissors'
    };
    return ResultDict[Math.floor(Math.random() * 3)];    
}

function playRound(PlayerSelection, ComputerSelection){
    //key value pairs for wins and losses
        //first element is 1 if the players wins
        //second element is for correct verb in result message
    const ScoringDict = {
        'rockScissors'  : [1, ' smashes '],
        'paperRock'     : [1, ' covers '],
        'scissorsPaper' : [1, ' cut '],
        'rockPaper'     : [0, ' is covered by '],
        'paperScissors' : [0, ' is cut by '],
        'scissorsRock'  : [0, ' are smashed by ']
    };

    //create dictKey by appending PlayerSelection and ComputerSelection
    dictKey = PlayerSelection.toLowerCase() + ComputerSelection;
    
    //if the key is in the dict, return the value
    if(ScoringDict.hasOwnProperty(dictKey)){
        return ScoringDict[dictKey];
    }
    else{
        //players tie
        return [6,9];
    }
}

function game(){
    
    const inputProtectionDict = {
        'rock'      : 'meow',
        'paper'     : 'meow',
        'scissors'  : 'meow'
    };
    let tally = 0;
    let PlayerSelection;
    let ComputerSelection;
    let ResultMessage;
    let ResultArray;


    for(let i = 0; i<5; i++){
        
        //get inputs for this round, with input protection
        PlayerSelection = prompt('Enter your selection: Rock, Paper, or Scissors?');
        while(!inputProtectionDict.hasOwnProperty(PlayerSelection.toLowerCase())){
            PlayerSelection = prompt('Invalid selection, please choose: Rock, Paper, or Scissors?');
        }

        ComputerSelection = computerPlay();

        //play round
        ResultArray = playRound(PlayerSelection, ComputerSelection);

        //Tally score, build result message
        if(ResultArray[0] == 6){
            ResultMessage = 'Tie!'
        }
        else if(ResultArray[0] == 0){
            ResultMessage = 'You Lose! ' + PlayerSelection + ResultArray[1] + ComputerSelection;
            tally--;
        }
        else{
            ResultMessage = 'You Win! ' + PlayerSelection + ResultArray[1] + ComputerSelection;
            tally++;
        }

        //announce winner of round
        console.log(ResultMessage);

    }
    if(tally == 0){
        console.log('You tied the game!');
    }
    else if(tally < 0){
        console.log('You lose the game!');
    }
    else{
        console.log('You win the game!');
    }
}

game();
