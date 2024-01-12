var Timer = 60;
var score = 0;
var hitrn = 0;
function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 120; i++) {
     var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

makebubble();

function runTimer() {
  var lol = setInterval(() => {
    if (Timer > 0) {
      Timer--;
      document.querySelector("#timerval").textContent = Timer;
    } else {
      clearInterval(lol);
      document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
    }
  }, 1000);
}
runTimer();

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

getNewHit()

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}


document.querySelector("#pbtm")
.addEventListener("click",(dets)=>{
  clickedNumber =  Number(dets.target.textContent);
  if (clickedNumber == hitrn) {
    increaseScore();
    makebubble();
     getNewHit();
    
  }
})