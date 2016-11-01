var viewController = {};

viewController.handleNav = function() {
  $('.navtab').click(function() {
    $('.navtab-content').hide();
    which = $(this).attr('data-content');
    $('#' + which).fadeIn();
  });
};

viewController.handleNav();

viewController.render = function() {
  $projects = $('.project-carousel');
  Project.projects.forEach(function(proj) {
    $projects.append(proj.toHTML());
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
};

Project.fetchAll();
