/*-----Tabell-----*/
var table = document.getElementById("table1");
var link = document.getElementById("link");
 link.onclick = function() {
        if(table.style.display == "none"){
            table.style.display = "block";
        }else{
            table.style.display = "none";
            console.log("Test");
        }

};
