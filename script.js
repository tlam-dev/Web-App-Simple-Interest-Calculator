function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    
    currentY = new Date().getFullYear();
    result = p * (100 + r) /100;
    return result;
    
    console.log("If you deposit " + principal + ",");
    console.log("at an interest rate of " + rate + "%,");
    console.log("You will receive an amount of " + result + ",");
    console.log("in the year " + (currentY + y) + "years."
}
        
