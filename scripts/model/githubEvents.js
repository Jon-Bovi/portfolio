(function(module) {
  var github = {};
  github.events = [];

  github.requestEvents = function(next) {
    $.get('/users/jon-bovi/events', function (data) {
      github.events = data;
      next();
    });
  };

  module.github = github;
})(window);
