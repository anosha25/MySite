var canvas;
var ctx;
var w = 1000;
var h = 700;

document.querySelector("#button").onclick = click;


setUpCanvas();



function click(){
    console. log("click");
    var v = document.querySelector("#input1").value;
    for(var i=0; i<10; i++){
        // rectRand (rand(w), rand(h), 50,200,0,260);
        rectRand(100+i*90, h/2, 10, 200, 1*5, v);
    }
}

function rand(range){
}

function rectRand(x, y, rw, rh, random, colour){
}

function rect(x, y, rw, rh){
}

function setUpCanvas (){
}

console. log ("module 4");