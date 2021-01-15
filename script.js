// JavaScript
function compute() {
    var p = parseFloat(document.getElementById("principal").value);
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    
    var y = new Date().getFullYear();
    var result = p * (1 + (r*t /100);
    
    document.getElementById("output").innerHTML =
              ("If you deposit ," + "<br/>"
              + "at an interest rate of %," + "<br/>"
              + "You will receive an amount of ," + "<br/>"
              + "in the year .");}
