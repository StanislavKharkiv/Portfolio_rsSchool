const range = document.documentElement.clientWidth;

    anime({
      targets: '.menu__item',
      translateX: range,
      direction: 'alternate',
      loop: false,
      delay: function (el, i, l) {
        return i * 200;
      },
      duration: 1300,
      endDelay: function (el, i, l) {
        return (l - i) * 500;
      },
      complete: function(anim) {
        document.getElementById('main-bg-svg').style.display = 'block';
        anime({
          targets: '.svg__path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 4000,
          delay: function (el, i) { return i * 800 },
          direction: 'alternate',
          loop: false
        });
      }
    });
    anime({
      targets: '.el',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 1000},
        {value: 1, easing: 'easeInOutQuad', duration: 500}
      ],
      delay: anime.stagger(100, {grid: [14, 5], from: 'first'}),
    });
    

   