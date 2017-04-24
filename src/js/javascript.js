$( document ).ready(function() {
var height = $(".info").height();
   $(".hamburger").click( function (){
     $(".hamburger--elastic").toggleClass("is-active");
     $(".header").toggleClass("header-height");
        });

        $(".cta").click( function(e){
          var divInfo= $(this).parent();
          var width= $(window).width();

	             $(this).siblings().show();
               $(divInfo).css({
                 "max-height": "1090vh"
               }).addClass("height");

               if  (width > 800 ) {
               $(divInfo).find("img").show();
               $(divInfo).find(".info__wrapper").css({
                 "display": "flex"
               });

             } else {
               $(divInfo).find("img, div").show();
             }
              e.preventDefault();
             });
        $(".buttonTop").click( function(e){
          $("body, html").animate({
              "scrollTop" :0}, 800);
        });

        $(window).resize(function() {
          var width= $(window).width();

            if ($(".height").height() > height) {
              console.log(height);
                console.log(width);
              if  (width > 800) {
                console.log("bigger");
              $(".height").find("img").show();
              $(".height").find(".info__wrapper").css({
                "display": "flex"
              });

            } else {
              console.log("else");
              $(".height").find("img, div").css({
                "display": "block",
                "margin": "0 auto"
              });
            }
        }
});
 });
