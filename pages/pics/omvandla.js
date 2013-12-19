//1 krona = 0.15 amerikanska dollar 1 dollar =  6,57 kronor
//1 krona = 0.11 euro 1 euro = 9,04 kronor

var input = document.querySelector("#kronor");
var omvandla = document.querySelector("#convert");

var dollar = 0.51;
var euro = 0.11;

omvandla.onclick = function (){
    if(isNaN(input.value)){
        alert ("Fyll i siffror");
    }
    else{
        //alert ("Siffror ifyllda")
        console.log(("Dollar:" + input.value*dollar) + ("Euro:" + input.value*euro));
    }
};