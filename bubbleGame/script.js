var bubble = "";

for(var i = 1; i <= 182; i++)
{
    var num = Math.random()*10;
    num = Math.floor(num);
    bubble += `<div class="bubble">${num}</div>`;
}

document.querySelector(".body-panel").innerHTML = bubble;

var timer = 5;

function runTimer(){
    var timeInterval =  setInterval(function(){
        if(timer >= 0)
        {
            document.querySelector("#timer").innerHTML = timer;
            timer--;
        }
        else 
            // clearInterval(timeInterval);
        return;

        // console.log(timer);
        
    } 
    
    , 1000)
}


var hit = 0;
function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hit;
}

document.querySelector(".body-panel").addEventListener("click" , function(){
    var clickedNum = 
})

// var currentScore = getNewHit();
// var score = 0;
// function totalScore(){
//     score += 

// }

runTimer();
getNewHit();
// document.querySelector("#timer").innerHTML(runTimer());