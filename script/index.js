window.desktopcheck = function()
{
    if(window.innerWidth>768)
    {
        alert("MOBILE");
        document.getElementsById("firstBanner").style.content = "Mobile";
    }
}
