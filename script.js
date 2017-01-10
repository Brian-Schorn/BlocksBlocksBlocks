$(document).ready(function() {

$('button').on('click',function(){
  // console.log('The button was clicked');
  // console.log('this= ', this )
  // console.log('$(this)= ', $(this));

  $('#boxspace').append('<div class = "box"><div class = "exit">x</div></div>');
});

$('#boxspace').on('click', '.box', function(){
  console.log('The mouse is in the box yo');
  $(this).css('background-color', randomColor());
  $(this).css('color', 'white');
});

$('#boxspace').on('click', '.exit', function(){
  console.log('Clicked the X');
  $(this).closest ('.box').remove ();

});
});

function randomColor () {
  var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
