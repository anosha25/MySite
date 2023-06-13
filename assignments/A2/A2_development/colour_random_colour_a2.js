var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();


for (var i=0; i<20; i++){
    cloud(randn(700),randn(10));
}

//let a = 50;

function cloud(a,colour){
ctx.beginPath();
ctx.moveTo(a,a*7);
ctx.bezierCurveTo(a,a*7,a,a*5,a*4,a*6);
ctx.bezierCurveTo(a*4,a*6,a*3,a*4,a*7,a*4-a/2);
ctx.bezierCurveTo(a*7,a,a*12,a,a*12,a*4-a/2);
ctx.bezierCurveTo(a*17,a*4,a*16,a*6,a*16,a*6);
ctx.bezierCurveTo(a*19,a*5,a*19,a*7,a*19,a*7);
ctx.closePath();
// ctx.shadowBlur = 20;
// ctx.shadowColor = "hsla(100, "+colour+", 70%, 1)";
ctx.fillStyle = "hsla(240, 10%, 50%, 0.3)";
ctx.fill();
}

// ctx.beginPath();
// ctx.moveTo(50,350);
// ctx.bezierCurveTo(50,350,50,250,200,300);
// ctx.bezierCurveTo(200,300,150,200,350,175);
// ctx.bezierCurveTo(350,70,600,70,600,175);
// ctx.bezierCurveTo(850,200,800,300,800,300);
// ctx.bezierCurveTo(950,250,1000,350,950,350);
// ctx.closePath();
// ctx.stroke();

//raindrop
ctx.beginPath();
ctx.moveTo(w/2,h/2)
ctx.arc(w/2, h/2+100, 20, 1*Math.PI, 1.9 * Math.PI, true); // x coor can change, radius can be smaller than 20px
ctx.closePath();
ctx.stroke();

//stars

ctx.beginPath();
ctx.moveTo(w/2,h/2);
ctx.lineTo(w/2+10,h/2+20);
ctx.lineTo(w/2+30,h/2+20);
ctx.lineTo(w/2+10,h/2+30);
ctx.lineTo(w/2+20,h/2+50);
ctx.lineTo(w/2,h/2+40);
ctx.lineTo(w/2-20,h/2+50);
ctx.lineTo(w/2-10,h/2+30);
ctx.lineTo(w/2-10,h/2+30);
ctx.lineTo(w/2-30,h/2+20);
ctx.lineTo(w/2-10,h/2+20);
ctx.closePath();
ctx.stroke();






function randi(range){  //random integer number - works with arrays
    var r = Math.random()*range;
    var i = Math.floor(r);  // rounding down to nearest integer (math.floor)
    return i
}

function randn(range){  // randome number range including negative w/ 0 in middle
    var r = Math.random()*range-range/2;
    return r
}

function rand(range){ // float number from 0 - whatever number we give
    var r = Math.random()*range;
    return r
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px dotted purple";
}



console.log("Assignment 2!");