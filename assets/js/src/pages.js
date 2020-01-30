// Contacts
function addSectionContacts() {    
  const contacts = document.createElement('section');
  contacts.className = 'contacts page';
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
  const about = document.createElement('section');
  about.className = 'about page';
  about.innerHTML = `
    <div class="about-wrapper">
      <h2 class="about__h2">Станислав Иосифов</h2>
      <p class="about__profession">Frontend developer</p>
    </div>
  `
  addSectionToDom(about);
}

// Works
function addSectionWorks() {
  const works = document.createElement('section');
  works.className = 'works page';
  works.innerHTML = `
    <div class="works-wrapper">
      <h2 class="works__h2">галлерея</h2>
      <div class="works__wrap">... здесь будут мои работы ...</div>
    </div>
  `
  addSectionToDom(works);
}