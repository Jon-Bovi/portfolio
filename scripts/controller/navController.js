(function(module) {
  var navController = {};

  navController.revealAll = function() {
    $('.navtab-content').hide();
    $('.navtab-content').fadeIn('slow');
  };

  navController.revealProjects = function() {
    $('.navtab-content').hide();
    $('#projects').fadeIn('slow');
  };

  navController.revealAbout = function() {
    $('.navtab-content').hide();
    $('#about').fadeIn('slow');
  };

  navController.revealContact = function() {
    $('.navtab-content').hide();
    $('#contact').fadeIn('slow');
  };

  module.navController = navController;
})(window);
