function windowCheckDesktop()
{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile)
    {
        alert("MOBILE 3");
        document.getElementById("menu").style.width = 200%;
        document.getElementById("title1").style.content = "test";
    } else
    {
        //alert("ORDINATEUR");
    }
}

windowCheckDesktop();
