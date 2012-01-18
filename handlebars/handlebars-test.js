(function() {
  var master_template, single_template;
  single_template = Handlebars.compile($('#turtles-single-template').html());
  $('#single').html(single_template(data));
  master_template = Handlebars.compile($('#turtles-master-template').html());
  Handlebars.registerPartial('turtle', $('#turtle-partial-template').html());
  $('#master-and-partial').html(master_template(data));
  Handlebars.registerHelper('weaponOfChoice', function(weapon) {
    return "<p>Weapon of choice: <span class='weapon'>" + weapon + "</span></p>";
  });
  Handlebars.registerPartial('turtle', $('#turtle-partial-template-with-helpers').html());
  $('#helpers').html(master_template(data));
}).call(this);
