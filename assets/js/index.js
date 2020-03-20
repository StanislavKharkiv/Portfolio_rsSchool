const state = {
  currentPage: 'главная',
}
const pagesName = ['главная', 'контакты', 'о себе', 'работы'];
const mainBlock = document.getElementById('main');
const menuBlock = document.getElementById('menu');
const gridText = document.querySelector('.grid-text');

let documentWidth = document.documentElement.clientWidth;

console.log('document width', documentWidth)
createTextScreen();
menuAnimation(documentWidth, bgAnimation);
  // events
window.addEventListener('resize', function() {
  documentWidth = document.documentElement.clientWidth;
  if (state.currentPage.toLowerCase() === pagesName[0]) {
  
  menuAnimation(documentWidth);
  }
})
menuBlock.addEventListener('click', function(e) {
  if (e.target.closest('.menu__item')) {
    hideMenu();
    if (e.target.closest('.btn-contacts')) {
      addSectionContacts();
      state.currentPage = pagesName[1];
      gridAnime();
    }
    if (e.target.closest('.btn-about')) {
      addSectionAbout();
      state.currentPage = pagesName[2];
      gridAnime();
    }
    if (e.target.closest('.btn-works')) {
      addSectionWorks();
      state.currentPage = pagesName[3];
      gridAnime();
    } 
  }
  if (e.target.closest('.menu__btn')) {
    const child = mainBlock.querySelector('.page');
    if (child) mainBlock.removeChild(child);
    showMenu();
    state.currentPage = pagesName[0];
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
  gridAnime();
  gridText.textContent = state.currentPage; 
}

function hideMenu() {
  const mobile = documentWidth < 621 ? true : false;
  menuAnimation(-20, () => {
    const page = document.querySelector('.page');
    if (page) page.classList.remove('page-show');
    btnMenuAnimation(1, mobile);
  });
}

function showMenu() {
  const btnMenuPositionX = '-730%';
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
    skew: '-10deg, -1deg',
    direction: 'normal',
    delay: function (el, i, l) {
      return i * 200;
    },
    duration: 1200,
    complete: cb,
  });
}

function btnMenuAnimation(x = 1, mobile = false) {
  if (mobile) {
    anime({
      targets: '.menu__btn',
      translateX: "-51%",
      translateY: '0',
      left: '49%',
      top: '90%',
      
    });
  } else {
    anime({
      targets: '.menu__btn',
      translateX: x,
      translateY: '-50%',
    });
  }
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
// Contacts
function addSectionContacts() {    
  const _SOCIAL = [
    {
      name: 'telegram',
      link: 'https://teleg.run/StanislavUaKh',
      icon: 'assets/image/telegram.svg',
    },
    {
      name: 'viber',
      link: 'https://msng.link/o/?380982231377=vi',
      icon: 'assets/image/viber.svg',
    },
    {
      name: 'skype',
      link: 'https://msng.link/o/?shtas89=sk',
      icon: 'assets/image/skype.svg',
    },
  ]
  const socialElements = _SOCIAL.map( el => {
    return `<div class="${el.name}">\
              <a href="${el.link}" target="_blank" title="${el.name}"><img src="${el.icon}" alt="${el.name}" /></a>\
            </div>`
  });
  const contacts = document.createElement('section');
  contacts.className = 'contacts page page-show';
  contacts.innerHTML = `
  <div class="contacts-wrapper page-wrap">
    <div class="contacts__phone">
      <span>Телефон: </span>
      <a href="tel:+380982231377">+380982231377</a>
    </div>
    <div class="contacts__email">
      <span>Email: </span>
      <a href="mailto:shtas89@gmail.com">shtas89@gmail.com</a>
    </div>
    <div class="contacts__social">
     ${socialElements.join('')}
    </div>
  </div>
  `;

  addSectionToDom(contacts);
}
// About
function addSectionAbout() {
  const _SKILLS = ['html', 'css (sass)', 'js', 'react.js', 'git', 'gulp', 'webpack'];
  const skillsList = _SKILLS.map( skill => {
    return '<li>' + skill + '</li>';
  })
  const about = document.createElement('section');
  about.className = 'about page page-show';
  about.innerHTML = `
    <div class="about-wrapper page-wrap">
      <img class="about__photo" src="assets/image/author.jpg" alt="author" width="100" />
      <h2 class="about__h2">Станислав Иосифов</h2>
      <p class="about__profession">Frontend developer</p>
      <div class="about__education">
        <h3 class="about__education-header">Образование:</h3>
        <ul class="about__education-list">
          <li>Средне-техническое</li>
          <li>Самообучение</li>
          <li>Онлайн курсы (RS School)</li>
          <li>Стажировка в офисе</li>
        </ul>
        <a class="about__certificate" href="https://app.rs.school/certificate/qflqorit" target="_blank" title="Посмотреть сертификат">
          <img src="assets/image/logo_rs.svg" alt="rsschool logo" />
          <span class="about__certificate-caption">сертификат</span>
        </a>
      </div>
      <div class="about__skills">
        <h3 class="about__skills-header">Технологии которыми владею:</h3>
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
  const _WORKS = [
    {
      name: 'Lamp studio',
      image: 'assets/image/works/lampstudio-min.png',
      link: 'https://portfolio-max.netlify.com/',
      description: 'Сайт портфолио. Сделан для дизайнера, под заказ.',
    },
    {
      name: 'Weather',
      image: 'assets/image/works/weather-min.png',
      link: 'https://fancy-weather-rsshool.netlify.com/',
      description: 'Сайт погоды. Авто определение места положения клиента, поиск по городам, загрузка изображения и погоды(на 3 дня) для найденного города.',
    },
    {
      name: 'Cultural portal',
      image: 'assets/image/works/cultural-portal-min.png',
      link: 'https://cultural-portal-rs.netlify.com/',
      description: 'Культурный портал на тему: режиссеры Белоруси. Работа выполнена на React.js группой из 6 разработчиков.',
    },
    {
      name: 'Chart',
      image: 'assets/image/works/telegram.png',
      link: 'https://telegram-contest.netlify.com/',
      description: 'Отображения графиков в canvas. Делал для конкурса в telegram. Функционал: изменение временной шкалы вывода данных, вкл./выкл. каждого графика, вывод подробной информации при клике на график.',
    },
    {
      name: 'Paint',
      image: 'assets/image/works/paint.png',
      link: 'https://piskel-clone-rs.netlify.com/',
      description: 'Небольшая программа для рисования. Возможность добавления кадров и отображение анимации.',
    },
    {
      name: 'Data grid',
      image: 'assets/image/works/data-grid.png',
      link: 'https://data-grid-rs.netlify.com/',
      description: 'Таблица с пользователями на React.js. Реализована сортировка по колонкам, поиск, вкл/выкл колонок.',
    },
  ];
  const allWorks = _WORKS.map( ({name, image, link, description}) => {
    return `<div class="card">
      <h3 class="card__header">${name}</h3>
      <a class="card__link" href="${link}" alt="${name}" target="_blank"><img class="card__img" src="${image}" /></a>
      <p class="card__description">${description}</p>
    </div>`
  });
  const works = document.createElement('section');
  works.className = 'works page page-show';
  works.innerHTML = `
    <div class="works-wrapper page-wrap">
      <h2 class="works__h2">галлерея</h2>
      <div class="works__wrap">
        ${allWorks.join('')}
      </div>
    </div>
  `
  addSectionToDom(works);
}