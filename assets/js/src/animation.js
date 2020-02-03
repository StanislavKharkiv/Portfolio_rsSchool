/* animation */
function menuAnimation(range = documentWidth, cb = null) {
  anime({
    targets: '.menu__item',
    translateX: range,
    skew: '-10deg, -1deg',
    direction: 'normal',
    delay: function (el, i, l) {
      return i * 200;
    },
    duration: 1200,
    complete: cb,
  });
}

function btnMenuAnimation(translate) {
  anime({
    targets: '.menu__btn',
    translateX: translate,
    translateY: '-50%',
  });
}

function bgAnimation() {
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
// gridAnime
function gridAnime() {
  gridText.classList.toggle('opacity');
  anime({
    targets: '.grid__child',
    scale: [
      { value: .1, easing: 'easeOutSine', duration: 1000 },
      { value: 1, easing: 'easeInOutQuad', duration: 200 }
    ],
    delay: anime.stagger(100, { grid: [20, 5], from: 'first' }),
    complete: function() {
      // const page = document.querySelector('.page');
      // if (page) page.classList.remove('page-show');
      gridText.textContent = state.currentPage;
      gridText.classList.toggle('opacity');
    }
  });
}