var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();




for (var i = 0; i < 20; i++) {
    cloud(randi(1000), randi(700), rand(1));
    stars(randi(1000), randi(700), 3);
    raindrop(10+i*250,-50,randi(3));
    raindrop(10+i*100,100,randi(10));
    raindrop(20+i*200,250,randi(5));
    raindrop(1+i*150,500,randi(5));
    raindrop(100+i*100,600,randi(5));


}


function raindrop(x,y,z) {
ctx.beginPath();
ctx.moveTo(x, y)
ctx.arc(x, y + 100, z, 1 * Math.PI, 1.9 * Math.PI, true); // x coor can change, radius can be smaller than 20px
ctx.closePath();
ctx.fillStyle = "hsla(200,10%,70%,0.8)";
ctx.fill();
}

function stars(x, y, a) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + a, y + a * 2);
    ctx.lineTo(x + a * 3, y + a * 2);
    ctx.lineTo(x + a, y + a * 3);
    ctx.lineTo(x + a * 2, y + a * 5);
    ctx.lineTo(x, y + a * 4);
    ctx.lineTo(x - a * 2, y + a * 5);
    ctx.lineTo(x - a, y + a * 3);
    ctx.lineTo(x - a, y + a * 3);
    ctx.lineTo(x - a * 3, y + a * 2);
    ctx.lineTo(x - a, y + a * 2);
    ctx.closePath();
    ctx.fillStyle = "hsla(100,100%,10%,1)";
    ctx.fill();
  }
  

function cloud(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(50 * size + x, 350 * size + y);
    ctx.bezierCurveTo(50 * size + x, 350 * size + y, 50 * size + x, 250 * size + y, 200 * size + x, 300 * size + y);
    ctx.bezierCurveTo(200 * size + x, 300 * size + y, 150 * size + x, 200 * size + y, 350 * size + x, 175 * size + y);
    ctx.bezierCurveTo(350 * size + x, 70 * size + y, 600 * size + x, 70 * size + y, 600 * size + x, 175 * size + y);
    ctx.bezierCurveTo(850 * size + x, 200 * size + y, 800 * size + x, 300 * size + y, 800 * size + x, 300 * size + y);
    ctx.bezierCurveTo(950 * size + x, 250 * size + y, 1000 * size + x, 350 * size + y, 950 * size + x, 350 * size + y);
    ctx.closePath();
    ctx.fillStyle = "hsla(240,100%,10%,0.3)";
    ctx.fill();
}

function randi(range) { //random integer number - works with arrays
    var r = Math.random() * range;
    var i = Math.floor(r); // rounding down to nearest integer (math.floor)
    return i
}

function randn(range) { // randome number range including negative w/ 0 in middle
    var r = Math.random() * range - range / 2;
    return r
}

function rand(range) { // float number from 0 - whatever number we give
    var r = Math.random() * range;
    return r
}

function setUpCanvas() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px dotted purple";
}



console.log("Assignment 2!");