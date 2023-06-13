//created simpler shape - idea of rainbow? 
//realized old shape of cat was too complicated and consisted of circles/triangles which I wasn't supposed to use
var canvas;
var ctx;
var w = 1000;
var h = 700;

var x = w/2;
var y = h/2;

setUpCanvas();
 
    ctx.beginPath();
    ctx.moveTo(0,h);
    ctx.bezierCurveTo(0, 0, w, 0, w, h);
    ctx.lineTo(w - 50, h);
    ctx.bezierCurveTo(w - 50, 50, 50, 50, 50, h);
    ctx.closePath();
    ctx.strokeStyle = "red";

    ctx.stroke();
    ctx.fill();




function setUpCanvas(){
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.border = "1px solid black";
}