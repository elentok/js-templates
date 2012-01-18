(function() {
  var single_template;
  single_template = Handlebars.compile($('#turtles-single-template').html());
  $('#single').html(single_template(data));
}).call(this);
