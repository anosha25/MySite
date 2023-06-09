var cost = 9.99;

document.querySelector("#button").onclick = button;

function button(){
    var i = document.querySelector("#input");
    var v = i.ariaValueMax;
    var subtotal = cost*v;
    var total = addTax(sobtotal);
    var mes = "Your total cost will be $"+total+" for "+v+" of shirts."
    document.querySelector("#paragraph").innerHTML = mes;
    i.value = "";
    console.log("button has been clicked", v, total);
}
function addTax(num){
    var tax = 0.12; // could do 1.13 then multiply
    var c = num*tax + num;
    c = c.toFixed(2)
    return c
}
console.log("week 3; function and web interaction")