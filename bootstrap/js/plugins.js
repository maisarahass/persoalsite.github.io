$(document).ready(function(){
    
    //nice scroll code
    
    
    $("html").niceScroll();
    
    
    
    $('.carousel').carousel({
        interval:5000
    });
    
    
    // Show Color Option Div When Click On The Gear
    
    $(".gear-check").click(function()
     {
       $(".color-option").fadeToggle();                  
                                             
      });
    
    // change Theame color on click
    
       var colorLi =  $(".color-option ul li")
    
       colorLi
      .eq(0).css("backgroundColor","crimson").end()
      .eq(1).css("backgroundColor","#e00db5").end()
      .eq(2).css("backgroundColor","#587ee2").end()
      .eq(3).css("backgroundColor","#e6d73c").end()
      .eq(4).css("backgroundColor","#8aea9e");
    
      colorLi.click(function()
                    
      {
          
         $("link[href*='theam']").attr("href",$(this).attr("data-value")); 
         
      });
    
    
    // زر السكرول لبطلعك لفوق
    
    var scrollButton = $("#scrol-top");
    
    $(window).scroll(function(){
       if ($(this).scrollTop() >= 700 )
           {
               scrollButton.show();
           }
        else
            {
                scrollButton.hide();
            }
        
    });
      
     // عند الضغط على الزر
         scrollButton.click(function(){
             
             $("html,body").animate({scrollTop : 0}, 600);
         });
    
    
        
});

$(window).on('load',function(){
    
                
    
                $(".loading-overlay .spinner").fadeOut(2000,
                function()
                  {
                    $("body").css("overflow","auto");
                    $(this).parent().fadeOut(2000,
                      function()
                     {
                        
                        $(this).remove(); 
              });
        });
});

