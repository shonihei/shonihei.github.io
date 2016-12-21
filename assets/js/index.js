function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

$(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        if (this.hash !== "") {
            // Make sure this.hash has a value before overriding default behavior
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $("#contact-btn").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            900);
    });

    var scroll_pos = 0;
    var jumbotronHeight = $(".jumbotron").outerHeight();
    var navbarHeight = $(".navbar").height();
    var colorChanged = false;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > jumbotronHeight - navbarHeight) {
            if (!colorChanged) {
                $(".navbar").animate({
                    backgroundColor : "#545454",
                    color : "#545454"
                }, 700);

                colorChanged = true;
            }
        } else {
            if (colorChanged) {
                $(".navbar").animate({
                    backgroundColor : "transparent",
                    color : "#545454"
                }, 700);
                colorChanged = false;
            }
        }
    });
})
