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
const scorePlayer1 = document.getElementById("score-player-1");
const scorePlayer2 = document.getElementById("score-player-2");
const scorePlayer3 = document.getElementById("score-player-3");
const scoreKomputer1 = document.getElementById("score-komputer-1");
const scoreKomputer2 = document.getElementById("score-komputer-2");
const scoreKomputer3 = document.getElementById("score-komputer-3");
const blackBackgroundMenang = document.querySelector(".black-background-menang");
const blackBackgroundKalah = document.querySelector(".black-background-kalah");
const playAgainImageMenang = document.querySelector(".play-again-image-menang");
const playAgainImageKalah = document.querySelector(".play-again-image-kalah");
const backToHomeButtonKalah = document.querySelector(".back-to-home-button-kalah");
const backToHomeButtonMenang = document.querySelector(".back-to-home-button-menang");
const pokemonInArena = document.querySelector(".pokemon-in-arena");

let pokemonKomputer = pilihanKomputer();
let scorePlayer = 0;
let scoreKomputer = 0;
let flagClick = false;

fuecoco.addEventListener("click", function () {

  if (flagClick === true) {
    flag = true;
    let pokemonPemain = "fuecoco";

    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);

    setTimeout(function () {
      whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
      if (whiteCircle.innerText === "W") {
        whiteCircle.style.backgroundColor = "yellow";
        scorePlayer++;
      } else if (whiteCircle.innerText === "L") {
        scoreKomputer++;
      }

      if (scorePlayer === 1) {
        scorePlayer1.style.backgroundColor = "yellow";
      } else if (scorePlayer === 2) {
        scorePlayer2.style.backgroundColor = "yellow";
      } else if (scorePlayer === 3) {
        scorePlayer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundMenang.style.visibility = "visible";
          playAgainImageMenang.setAttribute("class", "animation-fall");
          backToHomeButtonMenang.setAttribute("class", "animation-fall");
        }, 1000);
      }

      if (scoreKomputer === 1) {
        scoreKomputer1.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 2) {
        scoreKomputer2.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 3) {
        scoreKomputer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundKalah.style.visibility = "visible";
          playAgainImageKalah.setAttribute("class", "animation-fall");
          backToHomeButtonKalah.setAttribute("class", "animation-fall");
        }, 1000);
      }
    }, 1000);

    whiteArena.innerHTML = `<div>
        <img class="pokemon-in-arena scale-in" src="img/fuecoco.png" alt="fuecoco" />
        </div>`;

    fuecoco.classList.add("scale-out");
    fuecoco.classList.remove("scale-in");

    // fuecoco.style.visibility = "hidden";

    console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
    flagClick = false;
  } else {
    alert("Tekan Start Button untuk Mulai dan Next Round Button untuk lanjut ke Round selanjutnya");
  }
});

sprigatitto.addEventListener("click", function () {
  if (flagClick === true) {
    flag = true;
    let pokemonPemain = "sprigatitto";

    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);

    setTimeout(function () {
      whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
      if (whiteCircle.innerText === "W") {
        whiteCircle.style.backgroundColor = "yellow";
        scorePlayer++;
      } else if (whiteCircle.innerText === "L") {
        scoreKomputer++;
      }

      if (scorePlayer === 1) {
        scorePlayer1.style.backgroundColor = "yellow";
      } else if (scorePlayer === 2) {
        scorePlayer2.style.backgroundColor = "yellow";
      } else if (scorePlayer === 3) {
        scorePlayer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundMenang.style.visibility = "visible";
          playAgainImageMenang.setAttribute("class", "animation-fall");
          backToHomeButtonMenang.setAttribute("class", "animation-fall");
        }, 1000);
      }

      if (scoreKomputer === 1) {
        scoreKomputer1.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 2) {
        scoreKomputer2.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 3) {
        scoreKomputer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundKalah.style.visibility = "visible";
          playAgainImageKalah.setAttribute("class", "animation-fall");
          backToHomeButtonKalah.setAttribute("class", "animation-fall");
        }, 1000);
      }
    }, 1000);

    whiteArena.innerHTML = `<div>
          <img class="pokemon-in-arena scale-in" src="img/sprigatitto.png" alt="sprigatitto" />
          </div>`;

    sprigatitto.classList.add("scale-out");
    sprigatitto.classList.remove("scale-in");
    // sprigatitto.style.visibility = "hidden";

    console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
    flagClick = false;
  } else {
    alert("Tekan Start Button untuk Mulai dan Next Round Button untuk lanjut ke Round selanjutnya");
  }
});

quaxly.addEventListener("click", function () {
  if (flagClick === true) {
    flag = true;
    let pokemonPemain = "quaxly";

    pokemonKomputerDiArena.setAttribute("src", `img/${pokemonKomputer}.png`);

    setTimeout(function () {
      whiteCircle.innerText = hasilBattle(pokemonKomputer, pokemonPemain);
      if (whiteCircle.innerText === "W") {
        whiteCircle.style.backgroundColor = "yellow";
        scorePlayer++;
      } else if (whiteCircle.innerText === "L") {
        scoreKomputer++;
      }

      if (scorePlayer === 1) {
        scorePlayer1.style.backgroundColor = "yellow";
      } else if (scorePlayer === 2) {
        scorePlayer2.style.backgroundColor = "yellow";
      } else if (scorePlayer === 3) {
        scorePlayer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundMenang.style.visibility = "visible";
          playAgainImageMenang.setAttribute("class", "animation-fall");
          backToHomeButtonMenang.setAttribute("class", "animation-fall");
        }, 1000);
      }

      if (scoreKomputer === 1) {
        scoreKomputer1.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 2) {
        scoreKomputer2.style.backgroundColor = "yellow";
      } else if (scoreKomputer === 3) {
        scoreKomputer3.style.backgroundColor = "yellow";
        setTimeout(function () {
          blackBackgroundKalah.style.visibility = "visible";
          playAgainImageKalah.setAttribute("class", "animation-fall");
          backToHomeButtonKalah.setAttribute("class", "animation-fall");
        }, 1000);
      }
    }, 1000);

    whiteArena.innerHTML = `<div>
          <img class="pokemon-in-arena scale-in" src="img/quaxly.png" alt="quaxly" />
          </div>`;

    
    quaxly.classList.add("scale-out");
    quaxly.classList.remove("scale-in");
    // quaxly.style.visibility = "hidden";

    console.log(pokemonKomputer, pokemonPemain, hasilBattle(pokemonKomputer, pokemonPemain));
    flagClick = false;
  } else {
    alert("Tekan Start Button untuk Mulai dan Next Round Button untuk lanjut ke Round selanjutnya");
  }
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

const nextRound = document.querySelector(".next-round");
const playButton = document.querySelector(".play-button");
const resetButton = document.querySelector(".reset-button");

let flagStart = false;

playButton.addEventListener("click", function () {
  if (flagStart === false) {
    myLoop(i);
    flagClick = true;
    flagStart = true;
  } else {
    alert("Kamu sedang dalam permainan, Klik Next Round Button untuk melanjutkan permainan");
  }
});

nextRound.addEventListener("click", function () {
  if (flagStart === true && flagClick === true) {
    alert("Kamu sedang dalam permainan");
  } else if (flagStart === true) {
    i = 0;
    flag = false;
    myLoop(i);
    whiteArena.innerHTML = "";
    whiteCircle.innerText = "";
    fuecoco.removeAttribute("style");
    sprigatitto.removeAttribute("style");
    quaxly.removeAttribute("style");
    pokemonKomputer = pilihanKomputer();
    whiteCircle.style.backgroundColor = "white";
    flagClick = true;

    if (fuecoco.classList.contains("scale-out")) {
      fuecoco.classList.add("scale-in");
    }
    if (sprigatitto.classList.contains("scale-out")) {
      sprigatitto.classList.add("scale-in");
    }
    if (quaxly.classList.contains("scale-out")) {
      quaxly.classList.add("scale-in");
    }

    if (pokemonInArena.classList.contains("scale-in")) {
      pokemonInArena.classList.add("scale-out");
    }

    fuecoco.classList.remove("scale-out");
    sprigatitto.classList.remove("scale-out");
    quaxly.classList.remove("scale-out");
    pokemonInArena.classList.remove("scale-in");
  } else {
    alert("Tekan Start Button untuk mulai");
  }
});

playAgainImageKalah.addEventListener("click", function () {
  i = 0;
  flag = false;
  whiteArena.innerHTML = "";
  whiteCircle.innerText = "";
  fuecoco.removeAttribute("style");
  sprigatitto.removeAttribute("style");
  quaxly.removeAttribute("style");
  pokemonKomputer = pilihanKomputer();
  whiteCircle.style.backgroundColor = "white";
  scorePlayer = 0;
  scoreKomputer = 0;
  blackBackgroundMenang.style.visibility = "hidden";
  blackBackgroundKalah.style.visibility = "hidden";
  scoreKomputer1.style.backgroundColor = "transparent";
  scoreKomputer2.style.backgroundColor = "transparent";
  scoreKomputer3.style.backgroundColor = "transparent";
  scorePlayer1.style.backgroundColor = "transparent";
  scorePlayer2.style.backgroundColor = "transparent";
  scorePlayer3.style.backgroundColor = "transparent";
  flagClick = false;
  flagStart = false;
  fuecoco.classList.remove("scale-in");
  fuecoco.classList.remove("scale-out");
  sprigatitto.classList.remove("scale-out");
  sprigatitto.classList.remove("scale-in");
  quaxly.classList.remove("scale-out");
  quaxly.classList.remove("scale-in");
  pokemonInArena.classList.remove("scale-in");
  pokemonInArena.classList.remove("scale-out");

  playAgainImageKalah.classList.remove("animation-fall")
    playAgainImageMenang.classList.remove("animation-fall")
    backToHomeButtonKalah.classList.remove("animation-fall")
    backToHomeButtonMenang.classList.remove("animation-fall")
});

playAgainImageMenang.addEventListener("click", function () {
  i = 0;
  flag = false;
  whiteArena.innerHTML = "";
  whiteCircle.innerText = "";
  fuecoco.removeAttribute("style");
  sprigatitto.removeAttribute("style");
  quaxly.removeAttribute("style");
  pokemonKomputer = pilihanKomputer();
  whiteCircle.style.backgroundColor = "white";
  scorePlayer = 0;
  scoreKomputer = 0;
  blackBackgroundMenang.style.visibility = "hidden";
  blackBackgroundKalah.style.visibility = "hidden";
  scoreKomputer1.style.backgroundColor = "transparent";
  scoreKomputer2.style.backgroundColor = "transparent";
  scoreKomputer3.style.backgroundColor = "transparent";
  scorePlayer1.style.backgroundColor = "transparent";
  scorePlayer2.style.backgroundColor = "transparent";
  scorePlayer3.style.backgroundColor = "transparent";
  flagClick = false;
  flagStart = false;
  fuecoco.classList.remove("scale-in");
  fuecoco.classList.remove("scale-out");
  sprigatitto.classList.remove("scale-out");
  sprigatitto.classList.remove("scale-in");
  quaxly.classList.remove("scale-out");
  quaxly.classList.remove("scale-in");
  pokemonInArena.classList.remove("scale-in");
  pokemonInArena.classList.remove("scale-out");

  playAgainImageKalah.classList.remove("animation-fall")
    playAgainImageMenang.classList.remove("animation-fall")
    backToHomeButtonKalah.classList.remove("animation-fall")
    backToHomeButtonMenang.classList.remove("animation-fall")
});

resetButton.addEventListener("click", function () {
  if (flagStart === true) {
    i = 0;
    flag = false;
    whiteArena.innerHTML = "";
    whiteCircle.innerText = "";
    fuecoco.removeAttribute("style");
    sprigatitto.removeAttribute("style");
    quaxly.removeAttribute("style");
    pokemonKomputer = pilihanKomputer();
    whiteCircle.style.backgroundColor = "white";
    scorePlayer = 0;
    scoreKomputer = 0;
    blackBackgroundMenang.style.visibility = "hidden";
    blackBackgroundKalah.style.visibility = "hidden";
    scoreKomputer1.style.backgroundColor = "transparent";
    scoreKomputer2.style.backgroundColor = "transparent";
    scoreKomputer3.style.backgroundColor = "transparent";
    scorePlayer1.style.backgroundColor = "transparent";
    scorePlayer2.style.backgroundColor = "transparent";
    scorePlayer3.style.backgroundColor = "transparent";
    flagClick = false;

    playAgainImageKalah.classList.remove("animation-fall")
    playAgainImageMenang.classList.remove("animation-fall")
    backToHomeButtonKalah.classList.remove("animation-fall")
    backToHomeButtonMenang.classList.remove("animation-fall")

    if (fuecoco.classList.contains("scale-out")) {
      fuecoco.classList.add("scale-in");
    }
    if (sprigatitto.classList.contains("scale-out")) {
      sprigatitto.classList.add("scale-in");
    }
    if (quaxly.classList.contains("scale-out")) {
      quaxly.classList.add("scale-in");
    }

    if (pokemonInArena.classList.contains("scale-in")) {
      pokemonInArena.classList.add("scale-out");
    }

    setTimeout(function () {
      quaxly.classList.remove("scale-in");
      fuecoco.classList.remove("scale-in");
      sprigatitto.classList.remove("scale-in");
      pokemonInArena.classList.remove("scale-out");
    }, 1001);

    pokemonInArena.classList.remove("scale-in");
    fuecoco.classList.remove("scale-out");
    sprigatitto.classList.remove("scale-out");
    quaxly.classList.remove("scale-out");

    myLoop(i);
    flagClick = true;
  } else {
    alert("Anda belum memulai permainan, klik Start Button untuk memulai");
  }
});
