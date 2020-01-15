const range = document.documentElement.clientWidth / 2;
    var myPath = anime.path('svg path');
    anime({
      targets: '.menu__item',
      translateX: range,
      direction: 'alternate',
      loop: false,
      delay: function (el, i, l) {
        return i * 300;
      },
      duration: 2000,
      endDelay: function (el, i, l) {
        return (l - i) * 500;
      },
      complete: function(anim) {
        console.log('complete')
        anime({
          targets: '.svg__path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 3000,
          delay: function (el, i) { return i * 2000 },
          direction: 'alternate',
          loop: true
        });
      }
    });

   