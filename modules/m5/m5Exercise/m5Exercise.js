var canvas;
var ctx;
var w = 1000;
var h = 700;
var colour =[120, 300];
setUpCanvas();



for (var i=0; i<10; i++){
    rect(70+i*90,150,50,100,colour[i%2])
    rect(70+i*90,300,50,100,colour[i%2])
    rect(70+i*90,450,50,100,colour[i%2])
}

function rect(x,y,rw,rh,c){
ctx.beginPath();
ctx.rect (x, y, rw, rh);
ctx.fillStyle = "hsla("+c+", 100%, 50%, 0.3)";
ctx.fill();
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "5px dotted orange";
}

// ctx.beginPath();
// ctx.rect (100, 200, 100, 300);
// ctx.fillStyle = "hsla(120, 100%, 50%, 0.3)";
// ctx.fill();
