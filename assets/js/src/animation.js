/* animation */
function menuAnimation(range = documentWidth, cb = null) {
  anime({
    targets: '.menu__item',
    translateX: range,
    direction: 'normal',
    delay: function (el, i, l) {
      return i * 200;
    },
    duration: 1300,
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