 window.onload = function() {
        // Get pointers to all IDs we wish to control
        var main = document.querySelector("#main");
        var myMenu = document.querySelector("#myMenu");
        var close = document.querySelector("#close");
        var nav = document.querySelector("#nav");
 
        myMenu.addEventListener("click", openMenu, false);
        close.addEventListener("click", closeMe, false);
 
        function openMenu() {
            // Unhide nav
            nav.style.display = "block";
            myMenu.style.display = "none";
            main.style.marginLeft = "25%";
        }
 
        function closeMe() {
            // Hide nav
            nav.style.display = "none";
            myMenu.style.display = "block";
            main.style.marginLeft = "0";
        }
    }
 window.onscroll = function() {
    scrollFunction()
};
 
function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("myBtn").style.display = "block";                
    } else {
        document.getElementById("myBtn").style.display = "none";                
    }
}
 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}