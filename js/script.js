$(function(){

    // About Item Slider Initialization
    $('.about-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        pauseOnHover: false,
        focusOnSelect: true,
        speed: 1000,
        touchThreshold: 100,
        responsive: [

          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2
            }
          }
        ]
      });

    // About Item Slider Initialization
    $('.feedback-slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        speed: 1500,
        touchThreshold: 100,
        arrows: true,
        prevArrow: '.prevArrow svg',
        nextArrow: '.nextArrow svg',
      });

    // team Item Slider Initialization
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        speed: 1500,
        touchThreshold: 100,
        responsive: [

          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });

      //portfolio item Slider Initialization
      $('.project-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        speed: 1500,
        touchThreshold: 100,
        pauseOnHover: false,
        responsive: [

          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3
            }
          }
        ]
      });

      //blog item Slider Initialization
      $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        mobileFirst: true,
        speed: 1500,
        vertical: true,
        autoplaySpeed: 5000,
        touchThreshold: 100,
        pauseOnHover: false,
        verticalSwiping: true,
      });

    // Counter Initialization
    $('.counter').counterUp({
        time: 5000
    });

    // sticky navbar
    $(window).scroll(function(){
      var scrollCount = $(this).scrollTop();
      if(scrollCount >200) {
        $('.navbar').addClass('navbar-sticky-menu');
      }
      else {
        $('.navbar').removeClass('navbar-sticky-menu');
      }
    });

    //navbar toggler animation
    $('.navbar-toggler').click(function(){
      $('.toggle-icon').toggleClass('toggle-animation');
    });

    //venobox initialization 
    $('.venobox-portfolio').venobox({
      infinigall : true,
      share      : ['facebook', 'twitter', 'download'],
      spinner    : 'three-bounce',
      spinColor  : '#95E1D3',
      closeColor : '#95E1D3',
      arrowsColor: '#95E1D3'
  });
});