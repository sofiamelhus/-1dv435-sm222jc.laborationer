//skapar en array där jag samlar alla bilder som jag vill ha med i bildspelet
var imageArray = ["http://st.gdefon.ru/wallpapers_original/76995_(www.GdeFon.ru).jpg","http://bilder.alltinggratis.se/big/327.jpg","http://bilder.alltinggratis.se/big/995.jpg","http://www.fototavling.nu/ExternaSkript/bidrag/landskap/large/large_svenskt-landskap-12799.jpg","http://images5.fanpop.com/image/photos/31700000/landskap-pirates-of-the-caribbean-31769774-2560-1700.jpg"];
//skapar en variabel så håller koll på vilken bild som ska bytas
var counter = 0;
 
//skapar en funktion, bildspel
function bildspel() {
    
    //hämtar image och byter bild-elementets scr attribut  
    document.getElementById("image").src = imageArray[counter];
    counter++;
    if (counter >= imageArray.length) {
        counter = 0;
    }
}
 
window.onload = function() {
    //sätter intervallet mellan bildspelet till 2000 ms
    setInterval(bildspel,2000);
 
};