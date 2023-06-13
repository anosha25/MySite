var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();

document.querySelector("#button").onclick= click;


// v = input from user
// user input = control point 1, randomness max, colour
function click(){
    console.log("click");
    var v = document.querySelector("#input1").value;
    for (var i =0; i<v; i++){
        RandomRainbow(v,0,w,h,w-i*90,h-i*90,v,rand(v + i*20));
    }
}

function rand(range){
    var r = Math.random()*range;
    return r
}

function RandomRainbow(cp1x,cp1y,cp2x,cp2y,x,y,random,colour){
    ctx.beginPath();
    ctx.moveTo(y,h);
    ctx.bezierCurveTo(y+rand(random), y, w, y+rand(random), w-rand(random), h);
    ctx.lineTo(w - x, h);
    ctx.bezierCurveTo(w - x +rand(random), x, x, x + rand(random), x - rand(random), h);
    ctx.closePath();
    ctx.stroke();
    ctx.strokeStyle = "hsla("+colour+", 100%, 70%, 1)";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "hsla("+colour+", 100%, 70%, 1)";
    ctx.fillStyle = "hsla("+colour+", 100%, 50%, 1)";
    ctx.fill();
    
    
}

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

function setUpCanvas(){
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = w;
canvas.height = h;
canvas.style.border = "1px solid black";
}

// for (var i=0; i<10; i++){
//     console.log(i);
// }

// RandomRainbow(100,100,100,100,100,100,100,260);
// RandomRainbow(100,100,100,100,100,100,100,rand(200));