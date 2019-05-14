(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$("#divCheck").click(function() {
    $('.transform').toggleClass('oculto');
    $('.transform').toggleClass('transform-active');

});
