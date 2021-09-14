const squares=document.querySelectorAll('.square');
const mole=document.querySelector('.mole');
const timeleft=document.querySelector('#time-left');
let score=document.querySelector('#result');

let result=0;
let hitposition
let currentTime = 60
let timerId

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomsquare=squares[Math.floor(Math.random()*9)];
    randomsquare.classList.add('mole');

    hitposition=randomsquare.id;
}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id==hitposition)
        {
            result++;
            score.textContent=result;
            hitposition=null;
        }
    })
})

function movemole(){
    timerId = setInterval(randomSquare, 500)
}
movemole();

function countdown(){
    currentTime--;
    timeleft.textContent=currentTime;

    if(currentTime==0)
    {
        clearInterval(timerId);
        clearInterval(countdowntimerid);   //so that after game is over, the time does not go in negative numbers
        alert('GAME OVER! Your final score is ' + result);
        score=0
    }
}
let countdowntimerid=setInterval(countdown,1000);

