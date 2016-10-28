var eventController = {};

eventController.handleNav = function() {
  $('.navtab').click(function() {
    $('.navtab-content').hide();
    which = $(this).attr('data-content');
    $('#' + which).fadeIn();
  });
};

eventController.handleNav();
