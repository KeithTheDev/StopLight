$(document).ready(function () {


  function green() {
    // first = setInterval(green, 300);
    $('#redLight').css('opacity', 0.2)
    $('#yellowLight').css('opacity', 0.2)
    $('#greenLight').css('opacity', 1)
    // clearInterval(first);
  };

  function yellow() {
    // second = setInterval(yellow, 300);
    $('#yellowLight').css('opacity', 1)
    $('#greenLight').css('opacity', 0.2)
    clearInterval(greenOn);
  };

  function red() {
    $('#redLight').css('opacity', 1)
    $('#yellowLight').css('opacity', 0.2)
    clearInterval(yellowOn);
    greenOn = setInterval(green, 5000);
    yellowOn = setInterval(yellow, 10000);
  };
  var greenOn = setInterval(green, 5000);
  var yellowOn = setInterval(yellow, 10000);
  var redOn = setInterval(red, 18000);


// var stopLight = [greenFlash, yellowFlash, greenFlash]
//
// var redFlash = setInterval(function(){
//   $('#redLight').toggleClass('red')
// },500)
//
//
// var yellowFlash = setInterval(function(){
//   $('#yellowLight').toggleClass('yellow')
//
// },500)
//
// var greenFlash = setInterval(function(){
//   $('#greenLight').toggleClass('green')
//
// },500)
//
// var i = 0
// while( i < stopLight.length){
//    i++
//    console.log(i)
// }

})
