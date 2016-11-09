(function(module) {

  var viewController = {};

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
    $projects.hide().fadeIn();
  };

  module.viewController = viewController;

  Project.fetchAll();
})(window);
