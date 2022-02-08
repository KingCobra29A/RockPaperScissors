const selRock = document.querySelector('.rock');
const selPaper = document.querySelector('.paper');
const selScissors = document.querySelector('.scissors');
var playerScore = document.querySelector('.playerScore');
var compScore = document.querySelector('.compScore');
var resultMessage = document.querySelector('.resultMessage');

selRock.addEventListener('click', function(){
    //todo
    playRound('rock');
});
selPaper.addEventListener('click', function(){
    //todo
    playRound('paper');
});
selScissors.addEventListener('click', function(){
    //todo
    playRound('scissors')
});

var globalPlayerScore = 0;
var globalCompScore = 0;

/*
* Function that returns random selection of Rock, Paper, or Scissors
*/
function computerPlay(){
    const ResultDict = {
        '0': 'Rock',
        '1': 'Paper',
        '2': 'Scissors'
    };
    return ResultDict[Math.floor(Math.random() * 3)];    
}

/*
*
*/
function playRound(PlayerSelection){
    //key value pairs for wins and losses
        //first element is 1 if the players wins
        //second element is for correct verb in result message
    const ScoringDict = {
        'rockScissors'  : [1, 'rock', ' smashes '],
        'paperRock'     : [1, 'paper',' covers '],
        'scissorsPaper' : [1, 'scissors',' cut '],
        'rockPaper'     : [0, 'rock',' is covered by '],
        'paperScissors' : [0, 'paper',' is cut by '],
        'scissorsRock'  : [0, 'scissors',' are smashed by ']
    };

    let compSel = computerPlay();
    let result;
    //create dictKey by appending PlayerSelection and ComputerSelection
    let dictKey = PlayerSelection + compSel;
    console.log(dictKey);

    
    if(!ScoringDict.hasOwnProperty(dictKey)){
        resultMessage.innerText = "Tie!";
        return;
    }
    else{
        //otherwise, someone won. Build result and its message
        result = ScoringDict[dictKey];
        result.push(compSel);
    }

    let message = result[1] + result[2] + result[3];

    if(result[0] == 1){
        //player wins
        globalPlayerScore += 1;
        playerScore.innerText = globalPlayerScore;
        resultMessage.innerText = message;
    }
    else{
        //computer wins
        globalCompScore += 1;
        compScore.innerText = globalCompScore;
        resultMessage.innerText = message;
    }
    
}

function game(){

    console.log("frog");
    if(globalCompScore < 5 && globalPlayerScore < 5){
            //do nothing
    }
    else{
        if(globalCompScore > 4){
            //set message that computer won game
        }
        else{
            //set message that player won game
        }
        globalCompScore = 0;
        globalPlayerScore = 0;
        playerScore.innerText = globalPlayerScore;
        compScore.innerText = globalCompScore;
    } 
}

setInterval(game,100);
