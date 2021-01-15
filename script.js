// JavaScript
function compute() {
            var p = parseFloat(document.getElementById("principal").value);
            var r = parseFloat(document.getElementById("rate").value);
            var t = parseFloat(document.getElementById("years").value);
            var result = (p * (1 + (r*t /100))).toFixed(2);
    
            var currentY = new Date().getFullYear();
            var y = parseFloat(currentY) + t;
            
            if(!isNaN(p)) {
            document.getElementById("output").innerHTML =
              ("If you deposit " + p + "<br/>"
              + "at an interest rate of " + r + "%," + "<br/>"
              + "You will receive an amount of " + result + "," + "<br/>"
              + "in the year " + y + ".");
            } else {document.getElementById("output").innerHTML =
              "Please enter an amount."}
        }
