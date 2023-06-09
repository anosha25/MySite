var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();


ctx.beginPath();
ctx. rect (w/2, h/2, 200, 200);
ctx.fill();

function setUpCanvas(){
canvas = document.querySelector("#myCanvas")
ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.border = "1px solid purple";
console.log(canvas, ctx);
}

console. log ("module 3: canvas")