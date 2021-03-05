window.addEventListener("load", function()
{
	function windowCheckDesktop()
	{
    	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    	if(isMobile)
    	{
    	    //alert("MOBILE");
    	    let element1 = document.querySelector("#menu ul");
    	    element1.style.display = "grid";
    	    element1.style.gridTemplateColumns = "300px";
    	    element1.style.gridAutoRows = "125px";
    	    element1.style.alignContent = "center";
    	    let element2 = document.querySelector("#menu ul li a");
    	    element2.style.gridTemplateColumns = "100%";
    	    element2.style.alignItems = "center";
    	} else
    	{
    	    //alert("ORDINATEUR");
    	}
	}
	windowCheckDesktop();
});
