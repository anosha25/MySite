//indeterministic strategies = randomness
var canvas;
var ctx;
var w = 1000;
var h = 700;
var colour = [10, 50, 120, 200, 280,]; // array explained at the bottom

var o1 = {
    x: 100,
    y: h/2,
    w: 10,
    h: 300,
    random: 0,
    c: 260,
    a: 0.75
}



setUpCanvas();

for (var i=0; i<550; i++){  
    rectRand(o1);
    //o1.x += 15; // same as 01.x = o1.x+20
    o1.x = rand(w); // randomly placed rectangles along x coordinate
    o1.y = rand(h);
    o1.h = rand(100);
    o1.c = 200+rand(60);
}

function rectRand(o){   //passing object to function ensuring we have all the info we need in the object 
   var x = o.x;
   var y = o.y;
    o.x = o.x - o.w/2;
    o.y = o.y - o.h/2;
   
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    ctx.lineTo(o.x+o.w+randn(o.random),o.y+randn(o.random));   // randn - x coordinate can go from left to right up or down // including negative range
    ctx.lineTo(o.x+o.w+randn(o.random), o.y+o.h+randn(o.random));
    ctx.lineTo(o.x+randn(o.random), o.y+o.h+randn(o.random));
    ctx.closePath();
    ctx.fillStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")"
    ctx.fill();
    o.x = x;
    o.y = y;

}



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

// var o1 = {
//     x: 100,
//     name: {first: "Anosha", last:"Khalid"},
//     colour: [10, 20, 30, {red: 0, purple: 260}], //can nest arrays within object and objects within objects // arrays within arrays // arrays within objects etc.
// };

// //1.y = h/2; // to assign new property to object - created y - dot notation

// for( keys in o1){
//     console.log(keys);  // get x, name, colour from object^
//     console.log(o1[keys]);
// }

//console.log(o1);

// console.log(o1.name.first); // only get first 
// console.log(o1.name);  // using dot . notation to get value of x from object or access it - js object usually uses dot notation
//console.log(o1["x"]); // using bracket string notation 

// function rectRand(x,y,w,h, random, c, a){   // could use objects to hold these parameters can design functions to take objects as parameters where we get other info
//     x = x - w/2;
//     y = y - h/2;
   
//     ctx.beginPath();
//     ctx.moveTo(x,y);
//     ctx.lineTo(x+w+randn(random),y+randn(random));   // randn - x coordinate can go from left to right up or down // including negative range
//     ctx.lineTo(x+w+randn(random), y+h+randn(random));
//     ctx.lineTo(x+randn(random), y+h+randn(random));
//     ctx.closePath();
//     ctx.fillStyle = "hsla("+c+", 100%, 50%, "+a+")"
//     ctx.fill();