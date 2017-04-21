$( document ).ready(function() {

   $(".hamburger").click( function (){
     $(".hamburger--elastic").toggleClass("is-active");
     $(".header").toggleClass("header-height");
        });

        $(".cta").click( function(){
          var divInfo= $(this).parent();
	             $(this).siblings().show();
               $(divInfo).css({
                 "height": "auto"
               });
               $(divInfo).find("img, div").show();

             });
 });
