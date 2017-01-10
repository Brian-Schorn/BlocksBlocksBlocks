$(document).ready(function() {

$('button').on('click',function(){
  // console.log('The button was clicked');
  // console.log('this= ', this )
  // console.log('$(this)= ', $(this));

  $('#boxspace').append('<div class = "box">x</div>');
});

$('#boxspace').on('click', '.box', function(){
  console.log('The mouse is in the box yo');
  $(this).css('background-color', 'black');
  $(this).css('color', 'white');
});

});
