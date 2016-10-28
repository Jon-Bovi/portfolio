var projects = [];

function Project(projObj) {
  this.title = projObj.title;
  this.imgsrc = projObj.imgsrc;
  this.caption = projObj.caption;
  this.date = projObj.date;
};

Project.prototype.toHTML = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectData.forEach(function(proj) {
  projects.push(new Project(proj));
});

$projects = $('.project-carousel');

projects.forEach(function(proj) {
  $projects.append(proj.toHTML());
});

$projects.find('.template').remove();

$projects.slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 6000,
});
