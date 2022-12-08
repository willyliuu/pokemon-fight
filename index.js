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

/*
function renderSearch() {
  pokedexList.innerHTML = '';
  dbSearch.map((item, i) => {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'pokedex');
    mainDiv.addEventListener('click', (e) => {
      dbSearch.splice(i, 1);
      renderSearch();
    });

    // Image
    const imgPoke = document.createElement('img');
    imgPoke.setAttribute('src', `${item.gambar}`);
    mainDiv.appendChild(imgPoke);
    // Name
    const divName = document.createElement('div');
    divName.setAttribute('class', 'pokedex-name');
    const dex = document.createElement('p');
    dex.innerText = `${item.dex}`;
    divName.appendChild(dex);
    const name = document.createElement('h2');
    name.innerText = `${item.nama}`;
    divName.appendChild(name);
    mainDiv.appendChild(divName);

    // Element
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'pokedex-element');
    item.element.map((el, i) => {
      const pElement = document.createElement('p');
      pElement.setAttribute('class', el);
      pElement.innerText = el;
      divElement.appendChild(pElement);
    });
    mainDiv.appendChild(divElement);

    pokedexList.appendChild(mainDiv);
  });
}
renderSearch();
*/

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
let flagCount = 0;
if (authVal.length > 0) {
  flagCount = 1;
}
function authVal() {
  const modalAuth = document.querySelectorAll('.modal-auth')[flagCount];
  document.querySelector('.btn-start').addEventListener('click', (e) => {
    modalAuth.classList.add('modal-auth-active');
  });
  modalAuth.addEventListener('click', (e) => {
    if (e.target.className.includes('modal-auth')) {
      modalAuth.classList.remove('modal-auth-active');
    }
  });
}
authVal();

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
