(function() {
  var master_template, single_template;
  single_template = Handlebars.compile($('#turtles-single-template').html());
  $('#single').html(single_template(data));
  master_template = Handlebars.compile($('#turtles-master-template').html());
  Handlebars.registerPartial('turtle', $('#turtle-partial-template').html());
  $('#master-and-partial').html(master_template(data));
}).call(this);
