var linkhideShow = document.getElementById("hideShow");
var showtable = document.getElementById("show");

linkhideShow.onclick = function() {
    //om tabellen döljs så ska den visas 
      if (showtable.style.display === "none")
                showtable.style.display = "block";
    //annars ska tabllen döljas
        else
                showtable.style.display = "none";
};
