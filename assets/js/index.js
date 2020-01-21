const state = {
  currentPage: ':-)',
}

const mainBlock = document.getElementById('main');
const menuBlock = document.getElementById('menu');
const documentWidth = document.documentElement.clientWidth;
createTextScreen();
menuAnimation(documentWidth, bgAnimation);

menuBlock.addEventListener('click', function(e) {
  if (e.target.closest('.menu__item')) {
    hideMenu();
  }
  if (e.target.closest('.menu__btn')) {
    showMenu();
  }
});

anime({
  targets: '.grid__child',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 1000 },
    { value: 1, easing: 'easeInOutQuad', duration: 500 }
  ],
  delay: anime.stagger(100, { grid: [14, 5], from: 'first' }),
});

/* functions */

function createTextScreen() {
  const gridWrapper = document.getElementById('grid-wrapper');
  const grid = document.createElement('div');
  grid.className = 'grid';
  const gridChildrenAll = 70;
  for (let i = 0; i < gridChildrenAll; i++) {
    grid.innerHTML += '<div class="grid__child"><div>'
  }
  gridWrapper.appendChild(grid);
  gridWrapper.querySelector('.grid-text').textContent = state.currentPage;
}

function hideMenu() {
  menuAnimation(0, () => {btnMenuAnimation(1);});
}

function showMenu() {
  const btnMenuPositionX = '-140%';
  anime({
    targets: '.menu__item',
    translateX: documentWidth,
    direction: 'normal',
    delay: function (el, i, l) {
      return i * 200;
    },
    duration: 1300,
  });
  btnMenuAnimation(btnMenuPositionX);
}

// Contacts
function addSectionContact() {    
  const contact = document.createElement('section');
  contact.className = 'contact';
  contact.innerHTML = `
  <div class="contact__phone"><a href="tel:+380982231377">+380982231377</a></div>
  <div class="contact__email"><a href="mailto:shtas89@gmail.com">shtas89@gmail.com</a></div>
  <div class="contact__social">
    <div class="telegram">telegram</div>
    <div class="viber">viber</div>
    <div class="skype">skype</div>
  </div>
  `;
}
// About


// Works

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