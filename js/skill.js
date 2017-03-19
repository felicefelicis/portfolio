/* fonction background aléatoire*/
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

$(document).ready(function () {
var portfolioImage = [  
    "images/portfolio/final_pad.gif" 
  ,  "images/portfolio/Lockhart_hogwarts_v1.gif" 
  ,  "images/portfolio/PA_elixir1.jpg"
  ,  "images/portfolio/equipe_elixir1.jpg" 
  ,  "images/portfolio/zoomcours_elixir1.jpg"
  ,  "images/portfolio/theEndBegins1.gif"
  ,  "images/portfolio/abistiel9.png"
  ,  "images/portfolio/NEW_BANN_MM_ENCOURS5.gif"
  ];

  for(var i=0; i< portfolioImage.length; i++){
    $( "#conteneurProjet" ).append( $('<div> <ul class="overItemPortfolio"> <li> <a class="www" href="">WWW</a></li> <li> <a class="zoom" href="">ZOOM</a></li><li> <p class="descriptionProjet">Description de l\'image</p></li> </ul> <img src="'+ portfolioImage[i] +'"/> </div>') );
  }
});
  
