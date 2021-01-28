function windowCheckDesktop()
{
    if(window.innerWidth>768)
    {
        alert("MOBILE");
        document.getElementsById("firstBanner").style.content = "Mobile";
    } else
    {
        alert("ORDINATEUR");
    }
}

windowCheckDesktop();
