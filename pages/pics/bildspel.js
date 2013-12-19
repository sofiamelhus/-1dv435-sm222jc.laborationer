var imageArray = ["http://st.gdefon.ru/wallpapers_original/76995_(www.GdeFon.ru).jpg","http://bilder.alltinggratis.se/big/327.jpg","http://bilder.alltinggratis.se/big/995.jpg","http://www.fototavling.nu/ExternaSkript/bidrag/landskap/large/large_svenskt-landskap-12799.jpg","http://images5.fanpop.com/image/photos/31700000/landskap-pirates-of-the-caribbean-31769774-2560-1700.jpg"];
var counter = 0;
 
function bildspel() {
    
    document.getElementById("image").src = imageArray[counter];
    counter++;
    if (counter >= imageArray.length) {
        counter = 0;
    }
}
 
window.onload = function() {
 
    setInterval(bildspel,2000);
 
};