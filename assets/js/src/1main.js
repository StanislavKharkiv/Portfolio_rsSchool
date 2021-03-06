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
