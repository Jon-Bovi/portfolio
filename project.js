var projects = [];

function Project(obj) {
  this.title = obj.title;
  this.imgsrc = obj.imgsrc;
  this.caption = obj.caption;
  this.date = obj.date;
};

Project.prototype.toHTML = function() {
  var $newProject = $('li.template').clone();
  $newProject.find('h3').text = this.title;
  $newProject.find('h6').text = 'Finished: ' + this.date;
  $newProject.find('img').attr('src', this.imgsrc);
  $newProject.find('figcaption').text = this.caption;

  $newProject.removeClass();
  return $newProject;
};

projectData.forEach(function(proj) {
  projects.push(new Project(proj));
});

projects.forEach(function(proj) {
  $('#projects ul').append(proj.toHTML());
});
