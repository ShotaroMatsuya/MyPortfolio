$(window).on("load",function(){
    $(".loader .inner").fadeOut(500,function(){
        $(".loader").fadeOut(750);
    });
    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue:false
        }
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
        strings:["Web Developer.","Student.","Creative Design.","Challenger."],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });




    //scrollTop
    var statsTopOffset = $('.statsSection').offset().top;
    var countUpFinished = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $("#main-nav").addClass("fixed-me navbar-dark bg-dark");
        } else {
            $("#main-nav").removeClass("fixed-me navbar-dark bg-dark");
        }
        if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});
    

    
    $("[data-fancybox]").fancybox();
    

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter:selector,
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
        });
        return false;
    });










});

