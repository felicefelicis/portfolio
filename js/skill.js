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
  { src: "images/portfolio/final_pad.gif", 
    href: "http://mimbulusmimbletonia.forumetoile.com/", 
    desc: "Bannière d'entête du forum Mimbulus Mimbletonia.  Suite de 14 bannières <br><br>2016" 
  }, 
  { src: "images/portfolio/Lockhart_hogwarts_v1.gif", 
    desc: "Journal intéractif et animé dans le cadre du journal Lockharts & Hogwarts sur MM<br><br>2016"  
  }, 
  { src: "images/portfolio/kpoprequest.gif", 
    desc: "Trois commandes de lockscreen/background pour téléphone mobile<br><br>2017"  
  }, 
  { src: "images/portfolio/PA_elixir1.jpg", 
    desc: "Page d'accueil du projet scolaire sur la refonte du site du TIM Maisonneuve. <br><br>2016"  
  },
  { src: "images/portfolio/equipe_elixir1.jpg", 
    desc: "Page de description de l'équipe du projet scolaire sur la refonte du site du TIM Maisonneuve. <br><br>2016"  
  }, 
  { src: "images/portfolio/zoomcours_elixir1.jpg", 
    desc: "Page de description d'un cours sélectionné du projet scolaire sur la refonte du site du TIM Maisonneuve. <br><br>2016"  
  },
  { src: "images/portfolio/theEndBegins1.gif", 
    desc: "Bannière d'entête du forum The End Begins.  Suite de 4 bannières <br><br>2016"
  },
  { src: "images/portfolio/abistiel9.png", 
    href: "http://theabistielshow.goodforum.net/", 
    desc: "Bannière d'entête du forum The Abistiel Show.  Suite de 8 bannières <br><br>2016"  
  },
];

$(document).ready(function () {
  for(var i=0; i< portfolioImage.length; i++){
      console.log(portfolioImage.href)
    if(portfolioImage[i].href == undefined){    
        $( "#conteneurProjet" ).append( $('<div> <ul class="overItemPortfolio"> <li> <a class="zoom" onclick="showLightbox(portfolioImage['+i+']);">ZOOM</a></li><li> <p class="descriptionProjet">'+ portfolioImage[i].desc +'</p></li> </ul> <img src="'+ portfolioImage[i].src +'"/> </div>') );
    } else {
        $( "#conteneurProjet" ).append( $('<div> <ul class="overItemPortfolio"> <li> <a class="www" href="'+ portfolioImage[i].href +'">WWW</a><a class="zoom" onclick="showLightbox(portfolioImage['+i+']);">ZOOM</a></li><li> <p class="descriptionProjet">'+ portfolioImage[i].desc +'</p></li> </ul> <img src="'+ portfolioImage[i].src +'"/> </div>') );
    }
  }

  $(".menu-opener").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
  });

  $(".menu-link").click(function(){
    $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
  });

  $("#zoomProjet>i").click( function(){
    this.parentElement.style.display = "none";
  });
});
var lbel;

function showLightbox(item){
  var lightbox = document.getElementById("zoomProjet");  
  var image = lightbox.children[1];
  image.src = item.src;
  lightbox.style.display = "flex"; 
}





  
