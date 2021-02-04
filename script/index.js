function windowCheckDesktop()
{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile)
    {
        //alert("MOBILE");
        document.getElementById("firstBanner").style.color="blue";
    } else
    {
        //alert("ORDINATEUR");
    }
}

windowCheckDesktop();
