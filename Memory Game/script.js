document.addEventListener('DOMContentLoaded',()=>{

    //array of objects
    const arr=[
        {
            name:"fries",
            img:"images/fries.png"
        },
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        },
        {
            name:"fries",
            img:"images/fries.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        }   
    ]

arr.sort(()=> 0.5-Math.random())

const grid=document.querySelector('.grid');
const resultdisplay=document.querySelector('#result');

let cardchosen=[];
let cardchosenId=[];
let cardwon=[];

function gridboard()
{
for(let i=0;i<arr.length;i++)
{
const card=document.createElement('img');
card.setAttribute('src','images/blank.png');
card.setAttribute('dataid',i);
card.addEventListener('click',flipcard);
grid.appendChild(card);
}
}

function checkMatch(){

    const cards=document.querySelectorAll('img');
    const optiononeid=cardchosenId[0];
    const optiontwoid=cardchosenId[1];
    if(optiononeid == optiontwoid) 
    {
        cards[optiononeid].setAttribute('src', 'images/blank.png')
        cards[optiontwoid].setAttribute('src', 'images/blank.png')
        alert('Oops😬You have clicked the same image!')
      }
    else if(cardchosen[0]===cardchosen[1])
    {
        alert('You found a match!🤩');
        cards[optiononeid].setAttribute('src','images/white.png');
        cards[optiontwoid].setAttribute('src','images/white.png');

        cards[optiononeid].removeEventListener('click',flipcard);
        cards[optiontwoid].removeEventListener('click',flipcard);

        cardwon.push(cardchosen);
    }
    else
    {
        alert('You lost :(');
        cards[optiononeid].setAttribute('src','images/blank.png');
        cards[optiontwoid].setAttribute('src','images/blank.png');
    }
    cardchosen=[];
    cardchosenId=[];
    
    resultdisplay.textContent=cardwon.length;

    if(cardwon.length===arr.length/2)
    {
        resultdisplay.textContent="Congratulation! You found them all🥳"
    }
}


function flipcard(){
     let cardId=this.getAttribute('dataid');
     cardchosen.push(arr[cardId].name);
     cardchosenId.push(cardId);
     this.setAttribute('src',arr[cardId].img);
     if(cardchosen.length===2)
     {
         setTimeout(checkMatch,400);
     }
}
gridboard();
    
});