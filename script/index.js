function windowCheckDesktop()
{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile)
    {
        //alert("MOBILE");
        document.getElementsById("firstBanner").style.content = "Mobile";
    } else
    {
        //alert("ORDINATEUR");
    }
}

windowCheckDesktop();
