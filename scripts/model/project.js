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

  Project.toHTML = function(whichStuff, whichTemplate) {
    var template = $(whichTemplate).html();
    var templateRender = Handlebars.compile(template);
    return templateRender(whichStuff);
  };

  Project.loadAll = function(inputData) {
    inputData.forEach(function(proj) {
      Project.projects.push(new Project(proj));
    });
  };

  Project.fetchAll = function() {
    $.ajax({
      type: 'HEAD',
      url: '../../data/projects.json',
      success: function(data, message, xhr) {
        if (!localStorage.eTag || localStorage.eTag !== xhr.getResponseHeader('ETag')) {
          console.log('load new data');
          $.getJSON('../../data/projects.json', function(data) {
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

  Project.makeCodeStatsArray = function(project) {
    var array = [];
    for (var lang in project.code) {
      array.push(project.code[lang]);
    }
    return array;
  };

  Project.totalLinesOfCode = function() {
    return Project.projects.map(function(project) {
      return Project.makeCodeStatsArray(project).reduce(function(sum,cur,idx,array) {
        return cur + sum;
      });
    })
    .reduce(function(sum,cur,idx,array) {
      return cur + sum;
    });
  };

  Project.linesOfCode = function() {
    var obj = {html:0,js:0,css:0};
    Project.projects.forEach(function(proj) {
      for (var key in proj.code) {
        obj[key] += proj.code[key];
      }
    });
    obj.total = Project.totalLinesOfCode();
    return obj;
  };

  module.Project = Project;

})(window);
