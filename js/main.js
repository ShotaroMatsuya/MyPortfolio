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
    function getTweet(){
        fetch('https://twitter-api-server-tester.herokuapp.com/timeline/shotaro').then(res=>{
          
          return res.json();
        }).then(data=>{
          
          output(data);
          return data;

        }).then(res=>{
            $('.owl-carousel').owlCarousel({
                loop:false,
                items:6,
                nav : true,
                navText: ["<img src='img/prev1.png'>","<img src='img/next1.png'>"],
                
                responsive:{
                    0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    800:{
                        items:3
                    },
                    1100:{
                        items:4
                    },
                    1400:{
                        items:5
                    },
                    1600:{
                        items:6
                    }
                    
                }   
               });      
        }).catch(err=>{
          console.log(err);
        });
        
      }
      function getSpreadsheet()
{
    const countDis = document.getElementById('distance');
    const countStep = document.getElementById('steps');
fetch('https://script.google.com/macros/s/AKfycbxZBcaRh3K27U5lEuqkmEx3uD1g9gO2cP5W7YSGNa8BP6vOe8Q/exec').then(res=>{
    return res.json();
}).then(data=>{
    const stats = data.data[0];
    const distance = stats.distance;
    const steps = stats.sumStep;
    console.log(steps,distance);
    countDis.innerHTML = distance;
    countStep.innerHTML= steps;
}).catch(err=>{
    console.log(err);
})

}    
getSpreadsheet();
getTweet();

            // Get the current year for the copyright
            $('#year').text(new Date().getFullYear());



            // auto collapse navbar
            $('.navbar-nav>li>a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
    
            
            $('.port-item').click(function () {
            $('.collapse').collapse('hide');
          });
            /*init Scrollspy*/
            $('body').scrollspy({
                target: '#main-nav'
            });
    
    
            $(document).on('click', '[data-toggle="lightbox"]', function (e) {
            e.preventDefault();
            $(this).ekkoLightbox();
          });
    
    
    
            /*smooth scrolling*/
            $('#main-nav a').on('click', function (event) {
                if (this.hash !== '') {
                    event.preventDefault();
                    const hash = this.hash;
                    $('html,body').animate({
                            scrollTop: $(hash).offset().top,
                        },
                        800,
                        function () {
                            window.location.hash = hash;
                        }
                    );
                }
            });
    
            
    
            
    
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
    // var latestTopOffset = $('#activity').offset().top;
    // var fetchFinished = false;
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
    
    
              let html ="";
              const tweetArea = document.querySelector('.tweets-area');
              function output(data){
                data.forEach(el => {
                  html += `<aside class="tweet-card">
                  <header>
                  <span class="tw-logo"></span>
                  <figure class="user-photo">
                  <img src="img/duck.jpg" alt="">
                  </figure>
                  </header>
                  
                  <main>
                  <h3>Shotaro</h3>
                  <h5>@Shotaro59432703</h5>
                  <div class="message">${el.text}</div>
                  <small class="date">posted at :${new Date(el.created_at)}</small>
                  </main>
                  </aside>`;
                  
                });
                tweetArea.innerHTML = html;
            }
            
            
            
    
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

