$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}

function switchTheme() {
  var theme = replaceMe.attr('replaceMe');
  console.log(theme);
  $('body').attr('class', replaceMe);
}

$(document).ready(function(){
  $('#replaceMe').on('click', switchTheme);
});
