"use strict";
//Reads the value of the range slider and shows next to slider
//Be carefool script at the end of body
//with this way it refresh by the movement of slider
var slider = document.getElementById("rate");
slider.oninput = function () {
    document.getElementById("rate_val").innerText=slider.value;
}

//Checks if amount (id principal) is number and >0
//if so calculates the amount after years of rate
//Shows the result in id result
function compute()
{

    var principal = document.getElementById("principal").value;
    if ((isNaN(principal))||(principal<=0)) {
        alert("Amount must be a number and larger than zero");
        document.getElementById("principal").focus();
    }
    else {
        var rate= document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var amount = principal*years*rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>";
    }
    
}
        