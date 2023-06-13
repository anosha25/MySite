var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();



// first shape development
// starting from leftmost point and going up
//cloud!
ctx.beginPath();
ctx.moveTo(10,350);
ctx.bezierCurveTo(0,350,50,250,200,300);
ctx.bezierCurveTo(200,300,150,200,350,175);
ctx.bezierCurveTo(350,70,600,70,600,175);
ctx.bezierCurveTo(850,200,800,300,800,300);
ctx.bezierCurveTo(950,250,1000,350,990,350);
ctx.closePath();
ctx.stroke();

//raindrop
ctx.beginPath();
ctx.moveTo(w/2,h/2)
ctx.arc(w/2, h/2+100, 20, 1*Math.PI, 1.9 * Math.PI, true); // x coor can change, radius can be smaller than 20px
ctx.closePath();
ctx.stroke();

//stars
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(110,120);
ctx.lineTo(130,120);
ctx.lineTo(110,130);
ctx.lineTo(120,150);
ctx.lineTo(100,140);
ctx.lineTo(80,150);
ctx.lineTo(90,130);
ctx.lineTo(90,130);
ctx.lineTo(70,120);
ctx.lineTo(90,120);
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