//Give Navbar background color once scrolled
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) /*height in pixels when the navbar becomes non opaque*/ {
        $("#header-container").addClass("scrolled");
    } else {
        $("#header-container").removeClass("scrolled");
    }
});
