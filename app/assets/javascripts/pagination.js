$(document).ready(function(){
  // only run for 'photos#index'
  if ($('meta[name=psj]').attr('controller') == 'photos' && $('meta[name=psj]').attr('action') == 'index') 
  {    
    // initial values
    var n = 0

    // slide up animation
    function imageFadeIn() {  
      $('.image-box').eq(n).fadeTo(600, 0.6);
      n++;
    };

    // finished loading page
    function finishedLoadPage() {
      $('#footer').fadeTo(2000, 1);
    }

    // infinite scroll stuff
    var loadNextPage = setInterval(function() {
      if ($('#next_link').data('loading')){ return }  // prevent multiple loading
      var wBottom  = $(window).scrollTop() + $(window).height() + 170;
      var elBottom = $('#diamond-grid').offset().top + $('#diamond-grid').height();
        if (wBottom > elBottom){
          setTimeout(imageFadeIn, 50)
          if ($('#next_link')[0] == undefined) {  // when there is no next page 
            clearInterval(loadNextPage);
            finishedLoadPage();
            return
            }
          $('#next_link')[0].click();
          $('#next_link').data('loading', true);    
        }
      }, 200);
  }
})
