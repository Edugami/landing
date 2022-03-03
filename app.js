window.addEventListener('load', function(){
  const glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  const glider2 = new Glider(document.querySelector('.glider2'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  function sliderAuto(slider, miliseconds) {
    const slidesCount = slider.track.childElementCount -1;
    let slideTimeout = null;
    let nextIndex = 1;
   
    function slide () {
      slideTimeout = setTimeout(
        function () {
          if (nextIndex >= slidesCount ) {
            nextIndex = 0;
          }
          slider.scrollItem(nextIndex++);
        },
        miliseconds
      );
    }
   
    slider.ele.addEventListener('glider-animated', function() {
      window.clearInterval(slideTimeout);
      slide();
    });
   
    slide();
   }
   
   sliderAuto(glider, 2000)
   sliderAuto(glider2, 2500)

});