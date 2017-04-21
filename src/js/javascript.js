$( document ).ready(function() {

   $(".hamburger").click( function (){
     $(".hamburger--elastic").toggleClass("is-active");
     $(".header").toggleClass("header-height");
        });
 });
