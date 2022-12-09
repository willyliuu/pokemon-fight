const pokemonHome = document.querySelector('.pokemon-home');
const pokedexList = document.querySelector('.pokedex-list');
const searchFav = document.getElementById('search');

db_home.map((item, i) => {
  const div = document.createElement('div');
  div.setAttribute('class', `pokemon-${i + 1} pokemon`);
  const pokImg = document.createElement('img');
  pokImg.setAttribute('src', `${item.gambar}`);
  div.appendChild(pokImg);
  pokemonHome.appendChild(div);
});

searchFav.addEventListener('input', (e) => {
  let userSearch = e.target.value.toLowerCase();
  const filteredSearch = dbSearch.filter((item, i) => {
    return item.nama.toLowerCase().includes(userSearch);
  });

  displayCharacters(filteredSearch);
});

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((characters) => {
      return `<div class="pokedex">
          <img src=${characters.gambar} alt=${characters.nama} />
          <div class="pokedex-name">
          <p>${characters.dex}</p>
          <h2>${characters.nama}</h2>
          </div>
          <div class="pokedex-element">
          ${characters.element.map((el) => {
            return `<p class=${el}>${el}</p>`;
          })}
          </div>
          </div>`;
    })
    .join('');
  pokedexList.innerHTML = htmlString;
};
displayCharacters(dbSearch);
// Modal
// >>>>>Rules
const modalRules = document.querySelector('.modal-rules');
document.getElementById('rules').addEventListener('click', (e) => {
  e.preventDefault();
  modalRules.classList.toggle('modal-active');
  document.querySelector('.rules-container').classList.add('rules-active');
});
modalRules.addEventListener('click', (e) => {
  if (e.target.className.includes('modal-rules')) {
    modalRules.classList.remove('modal-active');
  }
});
// >>>>Auth

const modalAuth = document.querySelector('.modal-auth');
document.querySelector('.btn-start').addEventListener('click', (e) => {
  modalAuth.classList.add('modal-auth-active');
});
modalAuth.addEventListener('click', (e) => {
  if (e.target.className.includes('modal-auth')) {
    modalAuth.classList.remove('modal-auth-active');
  }
});

// Navbar
const navEl = document.querySelector('.nav__center');
window.addEventListener('scroll', (e) => {
  let yOffest = Math.floor(window.pageYOffset);
  console.log(yOffest);
  if (yOffest > 100) {
    navEl.classList.add('nav__center-effect');
  } else {
    navEl.classList.remove('nav__center-effect');
  }
});

const el = document.querySelector('.modal-sign-up');
document.getElementById('go-signUp').addEventListener('click', (e) => {
  modalAuth.classList.remove('modal-auth-active');
  el.classList.add('modal-sign-up-active');
});
