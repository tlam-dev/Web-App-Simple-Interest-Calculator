// JavaScript
function compute() {
            var p = parseFloat(document.getElementById("principal").value);
            var r = parseFloat(document.getElementById("rate").value);
            var t = parseFloat(document.getElementById("years").value);
            var result = (p * (1 + (r*t /100)) - p).toFixed(2);
    
            var currentY = new Date().getFullYear();
            var y = parseFloat(currentY) + t;
            
            if(!isNaN(p) && p > 0) {
            document.getElementById("output").innerHTML =
              ("If you deposit " + "<mark>" + p + "</mark>" + "," + "<br/>"
              + "at an interest rate of " + "<mark>" + r + "%," + "</mark>" + "<br/>"
              + "You will receive an amount of " + "<mark>" +result + "</mark>" +"," + "<br/>"
              + "in the year " +" <mark>" + y + "</mark>" + ".");
            } else {document.getElementById("output").innerHTML =
              "Please enter a positive amount."}
        }
