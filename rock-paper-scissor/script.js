function ComputerMove() {
    let random = Math.random() * 3;
    if (random > 0 && random <= 1)
        return "Rock";
    else if (random > 1 && random <= 2)
        return "Paper";
    else
        return "Scissor";
}

let score = {
    win: 0,
    loss: 0,
    tie: 0,
};

function result(userMove, ComputerMove) {
    if (userMove === "Rock") {
        if (ComputerMove === "Rock") {
            score.tie++;
            return "its a tie.";
        }
        else if (ComputerMove === "Paper") {
            score.loss++;
            return "Computer won.";
        }
        else {
            score.win++;
            return "User won.";
        }
    }

    else if (userMove === "Paper") {
        if (ComputerMove === "Paper") {
            score.tie++;
            return "its a tie.";
        }
        else if (ComputerMove === "Rock") {
            score.win++;
            return "User won.";
        }
        else {
            score.loss++;
            return "Computer won.";
        }
    }

    else {
        if (ComputerMove === "Scissor") {
            score.tie++;
            return "its a tie.";
        }
        else if (ComputerMove === "Paper") {
            score.win++;
            return "User won.";
        }
        else {
            score.loss++;
            return "Computer won.";
        }
    }
}

console.log(score);

// function showResult(userMove , ComputerMove , result){
//     console.log(score);
//     // alert(`score.win`);

//     // return alert(`You have choosen ${userMove} , Computer has choosen ${ComputerMove} and The result is ${result}.`);
// //    return document.querySelector('.user-move').innerText = `You have choosen ${userMove}`;
// }

function displayScore(userMove, ComputerMove, result) {
    document.querySelector('.user-move').innerText = `User has choosen: ${userMove}`;
    document.querySelector('.computer-move').innerText = `Computer has choosen: ${ComputerMove}`;
    document.querySelector('.result').innerText = `Result : ${result}`;
}

function scoreCount(win , loss , tie)
{
    document.querySelector('.scoreCount').innerText = `Win : ${win}, Loss : ${loss},  Tie : ${tie}`;
}





