//= require jquery
//= require jquery_ujs
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $('.step-details').hide();
  $('.step-help').hover(function(){
    $('.step-details').fadeToggle();
  });
});
