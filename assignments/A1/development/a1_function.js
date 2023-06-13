//created variables then function with parameters then tested with new parameters 
var canvas;
var ctx;
var w = 1000;
var h = 700;

// var x = 50
// var y = 0;

setUpCanvas();
 
function DrawRainbow(cp1x,cp1y,cp2x,cp2y,x,y){
    ctx.beginPath();
    ctx.moveTo(y,h);
    ctx.bezierCurveTo(y, y, w, y, w, h);
    ctx.lineTo(w - x, h);
    ctx.bezierCurveTo(w - x, x, x, x, x, h);
    ctx.closePath();
    ctx.strokeStyle = "purple";
    ctx.stroke();
    ctx.fill();
}

DrawRainbow(50,50,50,50,50,50);


function setUpCanvas(){
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.border = "1px solid black";
}