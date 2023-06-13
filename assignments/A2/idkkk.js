

var canvas;
var ctx;
var w=1000;
var h=700;
var colour= [10,50,120,200,260,280];

var o1= {
    x:0,
    changeX: 100,
    y:0,
    changeY: 100,
    w:100,
    h:100,
    random: 0,
    c: 260,
    a:0.75

    

}
var a =20;



setUpCanvas();

for(var i=0; i<100; i++){
    cresRand(o1);
    o1.x += o1.changeX;
    o1.c += 1
    o1.changeX += 0.5;
    o1.w += randn(20);
    o1.h += randn (20);
    o1.random += 0.5;
    if(o1.x>w){
        o1.x=0;
        o1.y += o1.changeY;
    }
}

function horizontalLineOfShapes(o, num){
    for(var i=0; i<num; i++){
        cresRand(o);
        o.x += w/num+1
    
    }
}


function cresRand(o) {
    var x = o.x;
    var y = o.y;
    o.x = o.x - o.w / 2;
    o.y = o.y - o.h / 2;
  
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  
    ctx.beginPath();
    ctx.arc(
      o.x + o.w, // Center X-coordinate
      o.y + o.h, // Center Y-coordinate
      o.w, // Radius
      Math.PI, // Start angle (180 degrees in radians)
      0, // End angle (360 degrees in radians)
      true // Counterclockwise direction
    );
    ctx.arc(
      o.x + o.w + randn(o.random), // Center X-coordinate with random offset
      o.y + o.h + randn(o.random), // Center Y-coordinate with random offset
      o.w, // Radius
      0, // Start angle (0 degrees in radians)
      Math.PI, // End angle (180 degrees in radians)
      false // Clockwise direction
    );
    ctx.closePath();
    ctx.strokeStyle = "hsla(" + o.c + ",100%,50%," + o.a + ")";
    ctx.stroke();
  
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 0;
    ctx.shadowColor = "blue";
  
    o.x = x;
    o.y = y;
  }

function randi(range){
    var r= Math.random()*range;
    var i= Math.floor(r);
    return i
}



function randn(range){
    var r= Math.random()*range-range/2
    return r
}


function rand(range){
var r= Math.random()*range;
return r

}


function setUpCanvas(){
    canvas= document.querySelector("#myCanvas");
    ctx= canvas.getContext("2d");
    canvas.width= w;
    canvas.height= h;
    canvas.style.border="1px dotted purple"

}







