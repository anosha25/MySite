var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();

ctx.fillStyle = "#002233";

// background colour
ctx.fillRect(0, 0, w, h);

for (var i = 0; i < 20; i++) {
    cloud(randi(1000), randi(700), rand(1));
}

for (var i = 0; i < 30; i++) {
    raindrop(10+i*250,-50,randi(3));
    raindrop(10+i*100,100,randi(10));
    raindrop(20+i*200,250,randi(5));
    raindrop(1+i*150,500,randi(5));
    raindrop(100+i*100,600,randi(5));
}

// for (var i = 0; i < 40; i++) {
//     stars(randi(1000), randi(700), 3);
// }

var o1 = {
    x: 100,
    y: 100,
    a: 100,
}

for (var i=0; i<10; i++){  
    rectRand(o1);
    o1.x = rand(x); 
    o1.y = rand(y);
    o1.a = rand(100);
}

function stars(o) {
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(o.x + o.a, o.y + o.a * 2);
    ctx.lineTo(o.x + o.a * 3, o.y + o.a * 2);
    ctx.lineTo(o.x + o.a, y + o.a * 3);
    ctx.lineTo(o.x + o.a * 2, o.y + o.a * 5);
    ctx.lineTo(o.x, o.y + o.a * 4);
    ctx.lineTo(o.x - o.a * 2, o.y + o.a * 5);
    ctx.lineTo(o.x - o.a, o.y + o.a * 3);
    ctx.lineTo(o.x - o.a, o.y + o.a * 3);
    ctx.lineTo(o.x - o.a * 3, o.y + o.a * 2);
    ctx.lineTo(o.x - o.a, o.y + o.a * 2);
    ctx.closePath();
    ctx.fillStyle = "hsla(50,100%,70%,0.8)";
    ctx.fill();
}



function raindrop(x,y,z) {
    ctx.beginPath();
    ctx.moveTo(x, y)
    ctx.arc(x, y + 100, z, 1 * Math.PI, 1.9 * Math.PI, true); // x coor can change, radius can be smaller than 20px
    ctx.closePath();
    ctx.fillStyle = "hsla(200,100%,30%,0.8)";
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
    ctx.fillStyle = "hsla(240,100%,100%,0.9)";
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