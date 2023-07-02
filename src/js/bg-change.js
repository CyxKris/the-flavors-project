
$(window).scroll(function () {

    $('#body').each(function () {

        var topOfWindow = $(window).scrollTop(),

            bottomOfWindow = topOfWindow + $(window).height();

        var boxPos = $('#footer').offset().top;

        if (boxPos <= bottomOfWindow - 100 && boxPos >= topOfWindow) {
            $("#body").css("background-color", "#1D2226");
        } else {

            $("#body").css("background-color", "#B2B4CC");

        }

    });

});