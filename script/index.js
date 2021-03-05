function windowCheckDesktop()
{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile)
    {
        alert("MOBILE 3");
    } else
    {
        //alert("ORDINATEUR");
    }
}

windowCheckDesktop();
