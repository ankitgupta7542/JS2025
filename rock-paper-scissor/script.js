function ComputerMove(){
    let random = Math.random()*3;
    if(random >= 0 && random <= 1)
        return "Rock";
    else if(random > 1 && random <= 2)
        return "Paper";
    else
        return "Scissor";
}

function result(userMove , ComputerMove){
    if(userMove === "Rock")
    {
        if(ComputerMove === "Rock")
            return "its a tie.";
        else if(ComputerMove == "Paper")
            return "Computer won.";
        else
            return "User won.";
    }

    else if(userMove === "Paper")
    {
        if(ComputerMove === "Paper")
            return "its a tie.";
        else if(ComputerMove === "Rock")
            return "User won.";
        else
        return "Computer won.";
    }

    else
    {
        if(ComputerMove === "Scissor")
            return "its a tie.";
        else if(ComputerMove === "Paper")
            return "Computer won.";
        else
            return "User won.";
    }
}






