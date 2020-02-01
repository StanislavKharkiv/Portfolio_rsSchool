const state = {
  currentPage: 'Home',
}

const mainBlock = document.getElementById('main');
const menuBlock = document.getElementById('menu');
const gridText = document.querySelector('.grid-text');

let documentWidth = document.documentElement.clientWidth;
createTextScreen();
menuAnimation(documentWidth, bgAnimation);
  // events
window.addEventListener('resize', function() {
  documentWidth = document.documentElement.clientWidth;
  menuAnimation(documentWidth);
})
menuBlock.addEventListener('click', function(e) {
  if (e.target.closest('.menu__item')) {
    hideMenu();
    if (e.target.closest('.btn-contacts')) {
      addSectionContacts();
      state.currentPage = 'Contacts';
      gridAnime();
    }
    if (e.target.closest('.btn-about')) {
      addSectionAbout();
      state.currentPage = 'About';
      gridAnime();
    }
    if (e.target.closest('.btn-works')) {
      addSectionWorks();
      state.currentPage = 'Works';
      gridAnime();
    } 
  }
  if (e.target.closest('.menu__btn')) {
    const child = mainBlock.querySelector('.page');
    if (child) mainBlock.removeChild(child);
    showMenu();
    state.currentPage = 'Home';
    gridAnime();
  }
});

/* functions */

function createTextScreen() {
  const gridWrapper = document.getElementById('grid-wrapper');
  const grid = document.createElement('div');
  grid.className = 'grid';
  const gridChildrenAll = 100;
  for (let i = 0; i < gridChildrenAll; i++) {
    grid.innerHTML += '<div class="grid__child"><div>'
  }
  gridWrapper.appendChild(grid);
  // const prevGrid = gridWrapper.querySelector('.grid')
  // if (prevGrid) {
  //   gridWrapper.replaceChild(grid, prevGrid);
  // } else {
  //   gridWrapper.appendChild(grid);
  // }
  gridAnime();
  gridText.textContent = state.currentPage; 
}

function hideMenu() {
  menuAnimation(0, () => {
    const page = document.querySelector('.page');
    if (page) page.classList.remove('page-show');
    btnMenuAnimation(1);
  });
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

function addSectionToDom(node) {
  const page = document.querySelector('.page');
  if (!page) {
    mainBlock.appendChild(node);
  } else {
    mainBlock.replaceChild(node, page);
  }
}

/* animation */
function menuAnimation(range = documentWidth, cb = null) {
  anime({
    targets: '.menu__item',
    translateX: range,
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
      { value: .1, easing: 'easeOutSine', duration: 1500 },
      { value: 1, easing: 'easeInOutQuad', duration: 700 }
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
// Contacts
function addSectionContacts() {    
  const contacts = document.createElement('section');
  contacts.className = 'contacts page page-show';
  contacts.innerHTML = `
  <div class="contacts-wrapper">
    <div class="contacts__phone"><a href="tel:+380982231377">+380982231377</a></div>
    <div class="contacts__email"><a href="mailto:shtas89@gmail.com">shtas89@gmail.com</a></div>
    <div class="contacts__social">
      <div class="telegram">
        <a href="https://teleg.run/StanislavUaKh">Telegram</a>
      </div>
      <div class="viber">
        <a href="https://msng.link/o/?380982231377=vi">Viber</a>
      </div>
      <div class="skype">
        <a href="https://msng.link/o/?shtas89=sk">Skype</a>
      </div>
    </div>
  </div>
  `;

  addSectionToDom(contacts);
}
// About
function addSectionAbout() {
  const SKILLS = ['html', 'css', 'sass', 'js', 'git', 'gulp', 'webpack'];
  const skillsList = SKILLS.map( skill => {
    return '<li>' + skill + '</li>';
  })
  console.log(skillsList)
  const about = document.createElement('section');
  about.className = 'about page page-show';
  about.innerHTML = `
    <div class="about-wrapper">
      <h2 class="about__h2">Станислав Иосифов</h2>
      <p class="about__profession">Frontend developer</p>
      <p>experience</p>
      <div class="about__skills">
       <ul class="about__skills-list">
        ${skillsList.join('')}
       </ul>
      </div>
    </div>
  `
  addSectionToDom(about);
}

// Works
function addSectionWorks() {
  const works = document.createElement('section');
  works.className = 'works page page-show';
  works.innerHTML = `
    <div class="works-wrapper">
      <h2 class="works__h2">галлерея</h2>
      <div class="works__wrap">... здесь будут мои работы ...</div>
    </div>
  `
  addSectionToDom(works);
}