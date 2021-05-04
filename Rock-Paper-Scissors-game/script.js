let cs=0
let us=0;
const u_s=document.getElementById("uscore");
const c_m=document.getElementById("cscore");
const s_b=document.querySelector(".scoreBoard");
const r_s=document.querySelector(".result>p");
const rock=document.getElementById("r");
const pap=document.getElementById("p");
const sci=document.getElementById("s");
function getcompchoice()
{
    const arr=["r","p","s"];
    const rand=Math.floor(Math.random()*3);
return arr[rand];
}
function convert(letter)
{
if(letter==="r")
{
    return "Rock";
}
if(letter==="p")
{
    return "Paper";
}
if(letter==="s")
{
    return "Scissors";
}
}

function win(u,c)
{
   us++;
 u_s.innerHTML=us;
const smalluser="user".fontsize(3).sub();
const smallcomp="comp".fontsize(3).sub();
 //c_s.innerHTML=cs;
 document.getElementById(u).classList.add('greenglow');
 setTimeout(()=>document.getElementById(u).classList.remove('greenglow'),300);
 r_s.innerHTML=`${convert(u)}${smalluser} beats ${convert(c)}${smallcomp}. You Win!`;
}
function lose(u,c)
{
    cs++;
   // u_s.innerHTML=us;
    c_m.innerHTML=cs;
   const smalluser="user".fontsize(3).sub();
   const smallcomp="comp".fontsize(3).sub();
    //c_s.innerHTML=cs;
 document.getElementById(u).classList.add('redglow');
 setTimeout(()=>document.getElementById(u).classList.remove('redglow'),300);
    r_s.innerHTML=`${convert(u)}${smalluser} loses to ${convert(c)}${smallcomp}. You lost.. :(`;
}
function draw(u,c)
{
    
   const smalluser="user".fontsize(3).sub();
   const smallcomp="comp".fontsize(3).sub();
    //c_s.innerHTML=cs;
     //c_s.innerHTML=cs;
 document.getElementById(u).classList.add('pinkglow');
 setTimeout(()=>document.getElementById(u).classList.remove('pinkglow'),300);
    r_s.innerHTML=`${convert(u)}${smalluser} equals ${convert(c)}${smallcomp}. It's a draw!`;
}
function com(userchoice)
{
const compchoice=getcompchoice();
switch(userchoice+compchoice)
{
    case "pr":
    case "sp":
    case "rs":
        win(userchoice,compchoice);
    break;
    case "rp":
    case "ps":
    case "sr":
        lose(userchoice,compchoice);
break;
    case "rr":
    case "pp":
    case "ss":
        draw(userchoice,compchoice);
break;
}
}
rock.addEventListener('click',()=>
{
 com("r");
})
pap.addEventListener('click',()=>
{
   com("p");
})
sci.addEventListener('click',()=>
{
    com("s");
})

