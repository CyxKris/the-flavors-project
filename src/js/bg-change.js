
// Function for when the window is scrolled
$(window).scroll(function () {

    // Selecting the body
    $('#body').each(function () {

        // Getting the position of the top and bottom of the window
        var topOfWindow = $(window).scrollTop(),

            bottomOfWindow = topOfWindow + $(window).height();

        // Getting the position of the footer
        var boxPos = $('#footer').offset().top;

        // Changing the background color of the body based on the position of the footer.
        if (boxPos <= bottomOfWindow - 100 && boxPos >= topOfWindow) {
            $("#body").css("background-color", "#1D2226");
        } else {

            $("#body").css("background-color", "#B2B4CC");

        }

    });

});



