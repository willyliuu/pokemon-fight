function pilihanKomputer() {
  let komputer = Math.floor(Math.random() * 3) + 1;
  let pokemonKomputer = "";
  if (komputer === 1) {
    pokemonKomputer = "fuecoco";
  } else if (komputer === 2) {
    pokemonKomputer = "sprigatitto";
  } else {
    pokemonKomputer = "quaxly";
  }

  return pokemonKomputer;
}

function hasilBattle(komputer, user) {
  if (komputer === user) {
    return "D";
  } else {
    if (komputer === "fuecoco" && user === "quaxly") {
      return "W";
    } else if (komputer === "quaxly" && user === "sprigatitto") {
      return "W";
    } else if (komputer === "sprigatitto" && user === "fuecoco") {
      return "W";
    } else {
      return "L";
    }
  }
}

const fuecoco = document.getElementById("fuecoco");
const sprigatitto = document.getElementById("sprigatitto");
const quaxly = document.getElementById("quaxly");
const whiteCircle = document.querySelector(".white-circle");
const whiteArena = document.querySelector(".white-arena");
const pokemonKomputerDiArena = document.getElementById("pokemon-komputer");
const scorePlayer1 = document.getElementById("score-player-1")
const scorePlayer2 = document.getElementById("score-player-2")
const scorePlayer3 = document.getElementById("score-player-3")
const scoreKomputer1 = document.getElementById("score-komputer-1")
const scoreKomputer2 = document.getElementById("score-komputer-2")
const scoreKomputer3 = document.getElementById("score-komputer-3")

let pokemonKomputer = pilihanKomputer();

let scorePlayer = 0;
let scoreKomputer = 0;

fuecoco.addEventListener("click", function () {
  flag = true;
  let pokemonPemain = "fuecoco";

  pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);

  setTimeout(function () {
    whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
    if (whiteCircle.innerText === "W") {
      whiteCircle.style.backgroundColor = "yellow";
      scorePlayer++
    } else if (whiteCircle.innerText === "L") {
        scoreKomputer++
    }

    if (scorePlayer === 1) {
        scorePlayer1.style.backgroundColor = "yellow";
    } else if (scorePlayer === 2) {
        scorePlayer2.style.backgroundColor = "yellow";
    } else if (scorePlayer === 3) {
        scorePlayer3.style.backgroundColor = "yellow";
    }

    if (scoreKomputer === 1) {
        scoreKomputer1.style.backgroundColor = "yellow";
    } else if (scoreKomputer === 2) {
        scoreKomputer2.style.backgroundColor = "yellow";
    } else if (scoreKomputer === 3) {
        scoreKomputer3.style.backgroundColor = "yellow";
    }

  }, 1000);

  whiteArena.innerHTML = `<div>
    <img class="pokemon-in-arena" src="img/fuecoco.png" alt="fuecoco" />
    </div>`;

  fuecoco.style.visibility = "hidden";

  console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
});

sprigatitto.addEventListener("click", function () {
    flag = true;
    let pokemonPemain = "sprigatitto";
  
    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);
  
    setTimeout(function () {
      whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
      if (whiteCircle.innerText === "W") {
        whiteCircle.style.backgroundColor = "yellow";
        scorePlayer++
      } else if (whiteCircle.innerText === "L") {
          scoreKomputer++
      }
  
      if (scorePlayer === 1) {
          scorePlayer1.style.backgroundColor = "yellow";
      } else if (scorePlayer === 2) {
          scorePlayer2.style.backgroundColor = "yellow";
      } else if (scorePlayer === 3) {
          scorePlayer3.style.backgroundColor = "yellow";
      }
  
      if (scoreKomputer === 1) {
          scoreKomputer1.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 2) {
          scoreKomputer2.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 3) {
          scoreKomputer3.style.backgroundColor = "yellow";
      }
      
    }, 1000);
  
    whiteArena.innerHTML = `<div>
      <img class="pokemon-in-arena" src="img/sprigatitto.png" alt="sprigatitto" />
      </div>`;
  
    sprigatitto.style.visibility = "hidden";
  
    console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
  });

  quaxly.addEventListener("click", function () {
    flag = true;
    let pokemonPemain = "quaxly";
  
    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);
  
    setTimeout(function () {
      whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
      if (whiteCircle.innerText === "W") {
        whiteCircle.style.backgroundColor = "yellow";
        scorePlayer++
      } else if (whiteCircle.innerText === "L") {
          scoreKomputer++
      }
  
      if (scorePlayer === 1) {
          scorePlayer1.style.backgroundColor = "yellow";
      } else if (scorePlayer === 2) {
          scorePlayer2.style.backgroundColor = "yellow";
      } else if (scorePlayer === 3) {
          scorePlayer3.style.backgroundColor = "yellow";
      }
  
      if (scoreKomputer === 1) {
          scoreKomputer1.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 2) {
          scoreKomputer2.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 3) {
          scoreKomputer3.style.backgroundColor = "yellow";
      }
      
    }, 1000);
  
    whiteArena.innerHTML = `<div>
      <img class="pokemon-in-arena" src="img/quaxly.png" alt="quaxly" />
      </div>`;
  
    quaxly.style.visibility = "hidden";
  
    console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
  });

const pokemonArr = ["fuecoco", "quaxly", "sprigatitto"];
let i = 0;
let flag = false;
function myLoop(i) {
  if (flag === true) {
    return pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);
  }
  if (i === 3) {
    i = 0;
  }
  setTimeout(function () {
    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonArr[i]}.png`);
    i++;
    if (i < 4) {
      myLoop(i);
    }
  }, 100);
}
myLoop(i);

let resetImage = document.querySelector(".reset-image");

resetImage.addEventListener("click", function () {
  i = 0;
  flag = false;
  myLoop(i);
  whiteArena.innerHTML = "";
  whiteCircle.innerText = "";
  fuecoco.removeAttribute("style");
  sprigatitto.removeAttribute("style")
  quaxly.removeAttribute("style")
  pokemonKomputer = pilihanKomputer();
  whiteCircle.style.backgroundColor = "white";
});
