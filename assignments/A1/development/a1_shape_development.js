//finished developing shape 

var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();

    //head of cat!
    ctx.beginPath();
    ctx.arc(w/2, h/2, 200, 0, 2 * Math.PI);
    ctx.stroke();  

    // ears!
    //left ear
    ctx.beginPath();
    ctx.moveTo(w/2 - 50, h/2 - 195);
    ctx.lineTo(w/2 - 150, h/2 - 270);
    ctx.lineTo(w/2 - 150, h/2 - 130);
    ctx.stroke();
    //right ear
    ctx.beginPath();
    ctx.moveTo(w/2 + 50, h/2 - 195);
    ctx.lineTo(w/2 + 150, h/2 - 270);
    ctx.lineTo(w/2 + 150, h/2 - 130);
    ctx.stroke();

    //nose!
    ctx.beginPath();
    ctx.moveTo(w/2, h/2);  // start in middle of canvas
    ctx.lineTo(w/2 + 20, h/2 + 20); 
    ctx.lineTo(w/2 - 20, h/2 + 20);
    ctx.lineTo(w/2, h/2);
    ctx.stroke();

    //eyes!
    //right eye
    ctx.beginPath();
    ctx.arc(w/2 + 60, h/2 - 50, 20, 0, 2 * Math.PI)
    ctx.stroke();
    //left eye
    ctx.beginPath();
    ctx.arc(w/2 - 60, h/2 - 50, 20, 0, 2 * Math.PI)
    ctx.stroke();

    //mouth!
    ctx.beginPath();
    ctx.moveTo(w/2, h/2 + 20)
    ctx.lineTo(w/2, h/2 + 80)
    ctx.bezierCurveTo(w/2 + 50, h/2 + 50, w/2 + 50, h/2 + 50, w/2 + 50, h/2 + 60);
    ctx.moveTo(w/2, h/2 + 80)
    ctx.bezierCurveTo(w/2 - 50, h/2 + 50, w/2 - 50, h/2 + 50, w/2 - 50, h/2 + 60);
    ctx.stroke();

    //whiskers
    //right side
    ctx.beginPath();
    ctx.moveTo(w/2 + 30, h/2 + 10);
    ctx.lineTo(w/2 + 150, h/2 - 40);
    ctx.moveTo(w/2 + 30, h/2 + 20);
    ctx.lineTo(w/2 + 150, h/2);
    ctx.moveTo(w/2 + 30, h/2 + 30);
    ctx.lineTo(w/2 + 150, h/2 + 30);
    //left side
    ctx.moveTo(w/2 - 30, h/2 + 10);
    ctx.lineTo(w/2 - 150, h/2 - 40);
    ctx.moveTo(w/2 - 30, h/2 + 20);
    ctx.lineTo(w/2 - 150, h/2);
    ctx.moveTo(w/2 - 30, h/2 + 30);
    ctx.lineTo(w/2 - 150, h/2 + 30);
    ctx.stroke();



    















function setUpCanvas(){
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.border = "3px solid black";
}