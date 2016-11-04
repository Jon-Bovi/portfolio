(function(module) {

  var viewController = {};

  viewController.handleNav = function() {
    $('.navtab').click(function() {
      $('.navtab-content').hide();
      which = $(this).attr('data-content');
      $('#' + which).fadeIn();
    });
  };

  viewController.renderProjects = function() {
    $projects = $('.project-carousel');
    $projects.hide();
    Project.projects.forEach(function(proj) {
      $projects.append(Project.toHTML(proj, '#project-template'));
    });
    $projects.slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 6000,
    });
    $('#codestats').append(Project.toHTML(Project.linesOfCode(), '#codestats-template'));
    $projects.fadeIn();
  };

  module.viewController = viewController;

  viewController.handleNav();
  Project.fetchAll();

})(window);
