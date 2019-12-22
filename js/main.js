$(document).ready(function(){
    


    // change between girls and boys
        
        $('.btn2').on('click',function(){
            $('.rest .inputf').css('display', 'none');
            $('.btn1 hr').css('display', 'none');
            $('.inputs').css('display', 'block');
            $('.btn2 hr').css('display', 'block');
            $(this).css('background-color', 'rgb(216, 64, 64)');
            $('.btn1').css('background-color', 'rgba(154, 94, 94, 0.4)');

        });
        $('.btn1').on('click',function(){
          $('.rest .inputf').css('display', 'block');
          $('.btn1 hr').css('display', 'block');
          $('.inputs').css('display', 'none');
          $('.btn2  hr').css('display', 'none');
          $(this).css('background-color', 'rgb(216, 64, 64)');
          $('.btn2').css('background-color', 'rgba(154, 94, 94, 0.4)');
      })

      // Min And Max Value ____________________________________________________________;
      
      $('.rentbtn').click(function () {
        $('#dialog').toggleClass('showitem');
      })
      window.onclick = function(event){
        if(!event.target.matches('.rentbtn') && !event.target.matches('ul li')
         && !event.target.matches('#dialog .bottommaxmin input')
         && !event.target.matches('#dialog .bottommaxmin ul')
         && !event.target.matches('#dialog .topmaxmin')){
          $('#dialog').removeClass('showitem');
        }   
      };

      


      //______________________________________________________________________________________
      // Show Items in Animites
      $('.showmore').click(function() {
          $('.hideitem').slideDown();
          $(this).css('display','none')
          $('.showless').css('display','inline-block')
      });
      $('.showless').click(function() {
        $('.hideitem').slideUp();
        $(this).css('display','none')
        $('.showmore').css('display','inline-block')
    });

    // slide down butoon
    $('.open-icon').click(function(){
      $('.theright').css({
        'position':'relative',
        'width':'100%'
        
        
      }).slideToggle();
    });
    $(window).resize(function() {
      if($(window).width() < 992) {
        $('.menusection').css('display','block');
        $('.theright').css('display','none');
        $('.theleft').css('width','100%')
      } 
      if($(window).width() > 992) {
        $('.menusection').css('display','none');
        $('.theright').css('display','block');
        $('.theleft').css('width','78%');
        $('.theright').css('width','22%');
        
        
      }
    });
    /*****************************   avilable goods   ****************************** */

    $('#single').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.single').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    $('#share1').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.share1').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    $('#share2').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.share2').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    $('#share3').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.share3').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    $('#gm').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.gm').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    $('#lm').click(function () {
      $(this).find('a').addClass('active');
      $(this).siblings().find('a').removeClass('active');
      $('.lm').removeClass('hidavilable').siblings().addClass('hidavilable');     
    });
    
    /*****************************   avilable goods   ****************************** */


    /* Nab bar of details */

    $('.theright a').click(function () {
      $(this).addClass('colactive').siblings().removeClass('colactive');
    })
    $('.theright a').click(function () {
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top
      }, 1000);
  });

    



    // Slider 
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      // Student's number
      var a = 0;
      $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 7000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
          a = 1;
        }

      });

      //  fancy box
      $('[data-fancybox="gallery"]').fancybox();
    

    
});
