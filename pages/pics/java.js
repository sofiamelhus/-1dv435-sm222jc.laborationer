var linkhideShow = document.getElementById("hideShow");
var showtable = document.getElementById("show");

linkhideShow.onclick = function() {
       if (document.getElementById(showtable).display === "none")
                showtable.style.display = 'block';
        else
                showtable.style.display = 'none';                

};