const pokemonHome = document.querySelector('.pokemon-home');
const pokedexList = document.querySelector('.pokedex-list');

db_home.map((item, i) => {
  const div = document.createElement('div');
  div.setAttribute('class', `pokemon-${i + 1} pokemon`);
  const pokImg = document.createElement('img');
  pokImg.setAttribute('src', `${item.gambar}`);
  div.appendChild(pokImg);
  pokemonHome.appendChild(div);
});

function renderSearch() {
  pokedexList.innerHTML = '';

  dbSearch.map((item, i) => {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'pokedex');
    mainDiv.addEventListener('click', (e) => {
      dbSearch.splice(i, 1);
      renderSearch();
      if (dbSearch.length === 0) {
        console.log('akhireny');
        const buttonDex = document.createElement('button');
        buttonDex.innerText = 'refresh';
        pokedexList.appendChild(buttonDex);
        buttonDex.addEventListener('click', () => {
          window.location.reload();
        });
      }
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

const pokemonFilt = document.querySelector('.pokedex');
console.log(pokemonFilt);
