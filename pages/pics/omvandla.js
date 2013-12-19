//1 krona = 0.15 amerikanska dollar 1 dollar =  6,57 kronor
//1 krona = 0.11 euro 1 euro = 9,04 kronor

//skapar variabler och hämtar ut referenser
var input = document.querySelector("#kronor");
var omvandla = document.querySelector("#convert");
var valueconverted = document.getElementById("convertedValue");

//skapar variabler som visar på valutan för dollar och euro
var dollar = 0.51;
var euro = 0.11;

//när man klickar på omvandla så händer det här
omvandla.onclick = function (e){
    //om input innehåller något annat än nummer eller inget input alls så kommer alert anropas och skicka ut "fyll i siffror"
    if(isNaN(input.value) || input.value.length === 0){
        alert ("Fyll i siffror");
    }
    //om input godkäns från ovan så körs det här, tar input värderna och mha valueconverted så skriv de omvandlade valutan ut
    //använder toFixed för att få två decimaler
    else{
        valueconverted.innerHTML = "Dollar: " + (input.value*dollar).toFixed(2) + " Euro: " + (input.value*euro).toFixed(2) + "<br>" + valueconverted.innerHTML;
        console.log(("Dollar:" + input.value*dollar) + ("Euro:" + input.value*euro));
        e.preventDefault();
    }
};

