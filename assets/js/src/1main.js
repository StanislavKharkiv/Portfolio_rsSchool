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
