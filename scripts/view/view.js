(function(module) {

  var viewController = {};

  viewController.renderProjects = function() {
    $projects = $('.project-carousel');
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
    $projects.hide().fadeIn();
    $('#codestats').append(Project.toHTML(Project.linesOfCode(), '#codestats-template'));
    $events = $('#events');
    github.events.forEach(function (evenT) {
      $events.append(Project.toHTML(evenT, '#event-template'));
    });
  };

  module.viewController = viewController;

  Project.fetchAll();
})(window);
