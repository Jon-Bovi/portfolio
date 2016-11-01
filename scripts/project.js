function Project(projObj) {
  this.title = projObj.title;
  this.imgsrc = projObj.imgsrc;
  this.caption = projObj.caption;
  this.date = projObj.date;
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
  // TODO
    /* When our data is already in localStorage:
    1. We can process and load it,
    2. Then we can render the index page.  */
    /* Without our localStorage in memory, we need to:
    1. Retrieve our JSON file with $.getJSON
    1.a Load our json data
    1.b Store that data in localStorage so that we can skip the server call next time,
    1.c And then render the index page.*/
  console.log('Try fetch');
  $.get('../projects.json', function(data, message, xhr) {
    console.log('FETCHING');
    Project.loadAll(data);
    viewController.render();
  });
};
