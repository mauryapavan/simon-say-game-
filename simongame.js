let gameseq=[];
let userseq=[];
let highscore=0;

let btns =["yellow","red","blue","green"]

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

let started=false;
let level=0;

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
   started=true;
   levelup();
   h3.innerText=``

}
});

function gameflash (btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250)
}

function userflash (btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelup () {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx=Math.floor(Math.random()*3)
    let randcolor=btns[randidx];
   let randbtn=document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor)
    console.log(gameseq)
   gameflash(randbtn);
}

function checkAns(idx){
   // console.log( "curr lev: ",level)
   //let idx=level-1;

   if(userseq[idx]==gameseq[idx]){
   // console.log("same value");
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000)
    }
   }
   else{
    h2.innerHTML=`Game Over!<br>your score was <b>${level*10} </b> <br>press any key to start`
    document.querySelector(`body`).style.backgroundColor="red"
    setTimeout(function() {
        document.querySelector(`body`).style.backgroundColor="white"

    }, 150);
     if(highscore<(level*10)){
        highscore=level*10;
        h3.innerText=` nice new high score ${highscore}`
     }
     else{
        h3.innerText=`high score ${highscore}`

     }
    reset();

   }
}
    
function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id")
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    gameseq=[]
    userseq=[]
    level=0;
    started=false;

}