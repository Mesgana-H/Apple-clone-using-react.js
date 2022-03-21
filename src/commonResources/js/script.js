

$(document).ready(function () {
        
    if ($(window).width() <= 768) {
        $(".links-wrapper-1 h3").click(function () {
            $(".links-wrapper-1 ul").slideToggle("slow");
            $(this).toggleClass('change');
     
        });
    
        $(".links-wrapper-2 h3").click(function () {
            $(".links-wrapper-2 ul").slideToggle("slow");
            $(this).toggleClass('change');
     
        });
        $(".links-wrapper-3 h3").click(function () {
            $(".links-wrapper-3 ul").slideToggle("slow");
            $(this).toggleClass('change');
     
        });
        $(".for-buss").click(function () {
            $(".for-buss").next().slideToggle("slow");
            $(this).toggleClass('change');
     
        });

        $(".for-educa").click(function () {
            $(".for-educa").next().slideToggle("slow");
            $(this).toggleClass('change');
        
        }); $(".for-health").click(function () {
            $(".for-health").next().slideToggle("slow");
            $(this).toggleClass('change');
        
        }); $(".for-gov").click(function () {
            $(".for-gov").next().slideToggle("slow");
            $(this).toggleClass('change');
        
        }); $(".for-values").click(function () {
            $(".for-values").next().slideToggle("slow");
            $(this).toggleClass('change');
        
        }); $(".for-about").click(function () {
            $(".for-about").next().slideToggle("slow");
            $(this).toggleClass('change');
        
        });
        }
        
       $(window).resize(function() { location.reload();});
    
});

// $(document).ready(function () {

//     if ($(window).width() <= 768) {
//         $('.footer-links-wrapper').addClass("thisClass");
//     } else { $('.footer-links-wrapper').removeClass("thisClass"); }
    
//     // $(window).on('resize')

    
// });
// $(document).on("click", ".thisClass h3", function () {
//     console.log(this);
//     $(this).next('ul').slideToggle();
//     $(this).toggleClass("change");

// });



