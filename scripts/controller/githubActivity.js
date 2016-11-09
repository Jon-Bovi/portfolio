(function(module) {
  var github = {};
  github.events = [];

  github.requestEvents = function(next) {
    $.ajax({
      url: 'https://api.github.com/users/jon-bovi/events/public',
      type: 'GET',
      headers: {'Authorization': 'token ' + 'ee258598469abfa282b8cf052c156df1461fdf04'},
      success: function(data) {
        console.log(data);
        github.events = [];
        next();
      }
    });
  };

  module.github = github;
})(window);
