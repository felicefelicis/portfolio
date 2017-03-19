/* fonction background aléatoire*/
(function() {
        var backgrounds = [
      "images/bg4.gif"];

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

var portfolioImage = [  
  { thumbnail: "images/portfolio/final_pad.gif", 
    href: "http://mimbulusmimbletonia.forumetoile.com/", 
    zoom: "", 
    desc: "Bannière d'entête du forum Mimbulus Mimbletonia.  Suite de 14 bannières <br>2016" 
  }, 
  { thumbnail: "images/portfolio/Lockhart_hogwarts_v1.gif", 
    zoom: "", 
    desc: "Journal intéractif et animé dans le cadre du journal Lockharts & Hogwarts sur MM <br><br>2016"  
  }, 
  { thumbnail: "images/portfolio/PA_elixir1.jpg", 
    zoom: "", 
    desc: "Page d'accueil du projet scolaire sur la refonte du site du TIM maisonneuve. <br><br>2016"  
  },
  { thumbnail: "images/portfolio/equipe_elixir1.jpg", 
    zoom: "", 
    desc: "Page description de l'équipe du projet scolaire sur la refonte du site du TIM maisonneuve. <br><br>2016"  
  }, 
  { thumbnail: "images/portfolio/zoomcours_elixir1.jpg", 
    zoom: "", 
    desc: "Page description d'un cours sélectionné du projet scolaire sur la refonte du site du TIM maisonneuve. <br><br>2016"  
  },
  { thumbnail: "images/portfolio/theEndBegins1.gif", 
    zoom: "", 
    desc: "Bannière d'entête du forum The End Begins.  Suite de 4 bannières <br><br>2016"
  },
  { thumbnail: "images/portfolio/abistiel9.png", 
    href: "http://theabistielshow.goodforum.net/", 
    zoom: "", 
    desc: "Bannière d'entête du forum The Abistiel Show.  Suite de 8 bannières <br><br>2016"  
  },
  { thumbnail: "images/portfolio/NEW_BANN_MM_ENCOURS5.gif", 
    zoom: "", 
    desc: "Test d'une bannière d'entête du forum Mimbulus Mimbletonia. <br><br>2015"
  }
];

$(document).ready(function () {
  for(var i=0; i< portfolioImage.length; i++){
      console.log(portfolioImage.href)
    if(portfolioImage[i].href == undefined){    
        $( "#conteneurProjet" ).append( $('<div> <ul class="overItemPortfolio"> <li> <a class="zoom" href="">ZOOM</a></li><li> <p class="descriptionProjet">'+ portfolioImage[i].desc +'</p></li> </ul> <img src="'+ portfolioImage[i].thumbnail +'"/> </div>') );
    } else {
        $( "#conteneurProjet" ).append( $('<div> <ul class="overItemPortfolio"> <li> <a class="www" href="'+ portfolioImage[i].href +'">WWW</a><a class="zoom" href="">ZOOM</a></li><li> <p class="descriptionProjet">'+ portfolioImage[i].desc +'</p></li> </ul> <img src="'+ portfolioImage[i].thumbnail +'"/> </div>') );
    }
  }

  $(".menu-opener").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
  });

  $(".menu-link").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
  });

});





  
