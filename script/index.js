function windowCheckDesktop()
{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile)
    {
        alert("MOBILE 2");
        document.getElementById("bigTitle").style.color = "blue";
    } else
    {
        //alert("ORDINATEUR");
    }
}

windowCheckDesktop();
