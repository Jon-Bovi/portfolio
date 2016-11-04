(function(module) {

  function Project(projObj) {
    for (var key in projObj) {
      this[key] = projObj[key];
    }
    for (var key in this.code) {
      this.codehtml = this.codehtml + '<p>'+ key + ': ' + this.code[key] + ' lines</p>';
    }
  };

  Project.projects = [];

  Project.prototype.toHTML = function() {
    var template = $('#project-template').html();
    var templateRender = Handlebars.compile(template);
    return templateRender(this);
  };

  Project.loadAll = function(inputData) {
    inputData.forEach(function(proj) {
      Project.projects.push(new Project(proj));
    });
  };

  Project.fetchAll = function() {
    $.ajax({
      type: 'HEAD',
      url: '../projects.json',
      success: function(data, message, xhr) {
        if (!localStorage.eTag || localStorage.eTag !== xhr.getResponseHeader('ETag')) {
          console.log('load new data');
          $.getJSON('../projects.json', function(data) {
            localStorage.setItem('eTag', xhr.getResponseHeader('ETag'));
            localStorage.setItem('projectData', JSON.stringify(data));
            Project.loadAll(data);
            viewController.renderProjects();
          });
        } else {
          console.log('load from local');
          Project.loadAll(JSON.parse(localStorage.getItem('projectData')));
          viewController.renderProjects();
        }
      }
    });
  };

  module.Project = Project;

})(window);
