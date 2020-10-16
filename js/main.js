$(window).on("load",function(){
    $(".loader .inner").fadeOut(500,function(){
        $(".loader").fadeOut(750);
    });
    
});

$(document).ready(function(){
    //superslides
    $('#slides').superslides({
        animation:'slide',
        play:5000,
        pagination:false
    });
    var typed = new Typed(".typed",{
        strings:["Web Developer.","Student.","Creative Design.","Doctor."],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
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

