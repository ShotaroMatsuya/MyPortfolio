$(document).ready(function(){
    //superslides
    $('#slides').superslides({
        animation:'slide',
        play:5000,
        pagination:false
    });




    //scrollTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $("#main-nav").addClass("fixed-me navbar-dark bg-dark");
        } else {
            $("#main-nav").removeClass("fixed-me navbar-dark bg-dark");
        }
    });










});

