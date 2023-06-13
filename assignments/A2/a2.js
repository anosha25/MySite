var canvas;
var ctx;
var w = 1000;
var h = 700;

var o1 = {
    x: 100,
    y: 100,
    a: 100,
};

var o2 = {
    x: 10, 
    y: 10,
    s: 10,
    
}

setUpCanvas();

ctx.fillStyle = "#002233";
ctx.fillRect(0, 0, w, h);




for (var i = 0; i < 100; i++) {
    stars(o1);
    o1.x = rand(w);
    o1.y = rand(h);
    o1.a = randn(5);
}

for (var i = 0; i < 10; i++) {
    cloud(o2);
    o2.x = randn(w);
    o2.y = randn(h);
    o2.s = rand(h);
}

for (var i = 0; i < 30; i++) {
    raindrop(10 + i * 250, -50, randi(3));
    raindrop(10 + i * 100, 100, randi(10));
    raindrop(20 + i * 50 * 4, 250, randi(5));
    raindrop(1 + i * 150, 500, randi(5));
    raindrop(100 + i * 100, 600, randi(5));
}




function setUpCanvas() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px dotted purple";
}

function stars(o) {
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(o.x + o.a, o.y + o.a * 2);
    ctx.lineTo(o.x + o.a * 3, o.y + o.a * 2);
    ctx.lineTo(o.x + o.a, o.y + o.a * 3);
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

function raindrop(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y + 100, z, 1 * Math.PI, 1.9 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = "hsla(200,100%,30%,0.8)";
    ctx.fill();
}

function cloud(o) {
    ctx.beginPath();
    ctx.moveTo(o.s * 7 + o.x, o.s * 7 + o.y);
    ctx.bezierCurveTo(o.s + o.x, o.s * 7 + o.y, o.s + o.x, o.s * 5 + o.y, o.s * 4 + o.x, o.s * 6 + o.y);
    ctx.bezierCurveTo(o.s * 4 + o.x, o.s * 6 + o.y, o.s * 3 + o.x, o.s * 4 + o.y, o.s * 7 + o.x, o.s * 3 + 25 + o.y);
    ctx.bezierCurveTo(o.s * 7 + o.x, o.s + 25 + o.y, o.s * 12 + o.x, 70 + o.y, o.s * 12 + o.x, o.s * 3 + 25 + o.y);
    ctx.bezierCurveTo(o.s * 17 + o.x, o.s * 4 + o.y, o.s * 16 + o.x, o.s * 6 + o.y, o.s * 16 + o.x, o.s * 6 + o.y);
    ctx.bezierCurveTo(o.s * 19 + o.x, o.s * 5 + o.y, o.s * 20 + o.x, o.s * 7 + o.y, o.s * 9 + o.x, o.s * 7 + o.y);
    ctx.closePath();
    ctx.fillStyle = "hsla(240,100%,100%,0.9)";
    ctx.fill();
}

function randi(range) {
    var r = Math.random() * range;
    var i = Math.floor(r);
    return i;
}

function randn(range) {
    var r = Math.random() * range - range / 2;
    return r;
}

function rand(range) {
    var r = Math.random() * range;
    return r;
}




console.log("Assignment 2!");
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}