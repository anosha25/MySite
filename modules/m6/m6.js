var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();














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



console.log("Module 5!");