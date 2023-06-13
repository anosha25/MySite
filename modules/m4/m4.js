var canvas;
var ctx;
var w = 1000;
var h = 700;

setUpCanvas();
document.querySelector("#button").onclick = click;



function click(){
    console.log("click");
    varv = document.querySelector("#input1").value;
    for(var i=0; i<10; i++){
        // rectRand(rand(w), rand(h),50,200,0,260);
        rectRand(100+i+90,h/2, 10,200,i+5,i*30);
    } 

}



function rand(range){
    var r = Math.random()*range;
    return r
}


function rectRand(x, y, rw, rh,random,color){
    x = x - rw/2;
    y = y - rh/2;
    ctx.beginPath();
    ctx.moveTo(x   , y);
    ctx.lineTo(x+rw+rand(random),y+rand(random));
    ctx.lineTo(x+rw+rand(random), y+rh+rand(random));
    ctx.lineTo(x +rand(random)  ,  y+rh+rand(random));
    ctx.closePath();
    ctx.strokeStyle = "hsla("+color+",100%,50%,1)";
    ctx.stroke();
}

function rect(x, y, rw,rh){
    x = x - rw/2;
    y = y - rh/2;
    ctx.beginPath();
    ctx.moveTo(x   , y);
    ctx.lineTo(x+rw, y);
    ctx.lineTo(x+rw, y+rh);
    ctx.lineTo(x   ,  y+rh);
    ctx.lineTo(x   ,  y);
    ctx.stroke();
}
function setUpCanvas(){
    canvas =  document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px dotted purple"
}





console.log("module 4");

