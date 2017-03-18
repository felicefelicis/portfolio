(function() {
        var backgrounds = [
			"images/bg1.jpeg",
			"images/bg2.jpeg",
			"images/bg3.jpeg"];

 function changeBackground() {
        $('#entete').css('background-image', 'url('+backgrounds[Math.floor(Math.random()*backgrounds.length)]+')');
    }
    $(document).ready(changeBackground);
})();

/*fonction de codepen*/

$(document).ready(function () {
  $('.skill-icons').children('.active').each(function(i) {
    var row = $(this);
    setTimeout(function() {
      row.css('background','#f1c40f');
    }, 100*i);
  });
});