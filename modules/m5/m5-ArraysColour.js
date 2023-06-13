//indeterministic strategies = randomness
var canvas;
var ctx;
var w = 1000;
var h = 700;
var colour = [10, 50, 120, 200, 280,]; // array explained at the bottom
//console.log(colour.)


setUpCanvas();

// console.log(rand(10));
// rectRand(w/2, h/2, 200, 200, 0, 0, 0.75);
// rectRand(w/2, h/2, 200, 200, 100, 260, 0.75);

// javascript reads top to bottom? so the rectangles above ^ are drawn first then the next ones are layered over ↓
// something in background code first, foreground code last

// i has to be a value that makes the condition i<10 false to break the for loop
for (var i=0; i<100; i++){  // colour.length makes the for loop repeat the # of array elememnts 
    //console.log(i);    // ↓ [i%5] repeated 5 of colours or [i%2] repeats 2 of colours iterating back and forth
    // MODULE -> rectRand(100+i*10, h/2, 20, 300, 0, colour[i%2], 0.75); // TODO i*90 to increment the xy coordinates of rectangles
    // rectRand(100+i*10, h/2, 20, 300, 0, colour[i%[colour.length]], 0.75);  // colour.length allows us to add more to array without having to change for example i%5 to i%6 
    // rectRand(rand(w), h/2, 20, 100, 0, 200, 0.75)
    //console.log(i%3, i); // % remainder operator takes value away from left as many times as it can and the number left is what is returned
    rectRand(100+i*10, h/2, 20, 300, 0, colour[i%colour.length], 0.75)
}


//console.log("Outside the for loop", i);


function rectRand(x,y,w,h, random, c, a){   // c - colour // a - alpha 
    x = x - w/2;
    y = y - h/2;
   
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+w+randn(random),y+randn(random));   // randn - x coordinate can go from left to right up or down // including negative range
    ctx.lineTo(x+w+randn(random), y+h+randn(random));
    ctx.lineTo(x+randn(random), y+h+randn(random));
    ctx.closePath();
    ctx.fillStyle = "hsla("+c+", 100%, 50%, "+a+")"
    ctx.fill();

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

// // setting up array ↓
// // using  numbers for colours (hsla), numbers are variety of colours we want to use
// var colour = [10, 50, 120, 200, 260]; 
// console.log(colour[2]); // selects third index from array
// colour.push(300)    // add information to array using push // reference using variable name (colour)
// console.log(colour); // now have 6 elements in array 300 at the end
// colour.pop();       // pop removes last element in array
// console.log(colour);