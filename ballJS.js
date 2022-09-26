var velocityX = 5;
var velocityX2 = 5;
var velocityX3 = 5;
var positionX = 0;
var positionX2 = 0;
var positionX3 = 0;
var Xmin = 0;
var Xmax = 500;

var reverseX = true;
var reverseX2 = true;
var reverseX3 = true;
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');

function moveBall1() {
 if(reverseX){ 
   positionX = positionX + velocityX;
   ball1.style.left = positionX + 'px';
}
else{
  positionX = positionX - velocityX;
  ball1.style.left = positionX + 'px';
}

if (
  positionX > Xmax ||
  positionX === Xmin
) {
  reverseX = !reverseX;
}

}

function moveBall2() {
    if(reverseX2){ 
      positionX2 = positionX2 + velocityX2;
      ball2.style.left = positionX2 + 'px';
   }
   else{
     positionX2 = positionX2 - velocityX2;
     ball2.style.left = positionX2 + 'px';
   }
   
   if (
     positionX2 > Xmax ||
     positionX2 === Xmin
   ) {
     reverseX2 = !reverseX2;
   }
   
   }

   function moveBall3() {
    if(reverseX3){ 
      positionX3 = positionX3 + velocityX3;
      ball3.style.left = positionX3 + 'px';
   }
   else{
     positionX3 = positionX3 - velocityX3;
     ball3.style.left = positionX3 + 'px';
   }
   
   if (
     positionX3 > Xmax ||
     positionX3 === Xmin
   ) {
     reverseX3 = !reverseX3;
   }
   
   }
setInterval(moveBall1, 100);
setInterval(moveBall2, 100);
setInterval(moveBall3, 100);