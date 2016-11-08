(function(module) {
  var navController = {};

  navController.reveal = function(section) {
    if (section === 'home') {
      $('main').hide();
      $('main').fadeIn('slow');
    } else {
      $('.navtab-content').hide();
      $('#' + section).fadeIn('slow');
    }
  };

  module.navController = navController;
})(window);
