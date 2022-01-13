const fruits = ["🥭", "🥑", "🍎", "🍌", "🍇", "🥭", "🥑", "🍎", "🍌", "🍇"];

// https://stackoverflow.com/a/2450976/606355
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const shuffledFruits = shuffle(fruits);
// const shuffledFruits = [
//   "🥑",
//   "🍎",
//   "🥑",
//   "🍌",
//   "🥭",
//   "🍌",
//   "🍇",
//   "🥭",
//   "🍎",
//   "🍇",
// ];

let flippedCards = [];
let flippedIndices = [];
let matchedCards = [];

let paused = true;

const pauseButton = document.querySelector("#pause-button");
const elapsedTimeSpan = document.querySelector("#elapsed-time");

function updatePauseButton() {
  pauseButton.innerText = paused ? "Play" : "Pause";

  if (!paused) {
    pauseButton.classList.remove("bg-lime-500");
    pauseButton.classList.add("bg-orange-500");
  } else {
    pauseButton.classList.add("bg-lime-500");
    pauseButton.classList.remove("bg-orange-500");
  }
}

pauseButton.addEventListener("click", () => {
  paused = !paused;
  updatePauseButton();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  resetGame();
});

const timer = setInterval(() => {
  if (!paused) {
    const text = elapsedTimeSpan.innerText;
    elapsedTimeSpan.innerText = parseInt(text, 10) + 1;
  }
}, 1000);

function checkMatch(arr) {
  if (arr.length === 2) {
    return arr.every((e) => e === arr[0]);
  }
  return false;
}

function resetGame() {
  flippedCards = [];
  flippedIndices = [];
  matchedCards = [];
  elapsedTimeSpan.innerText = "0";
  paused = true;
  updatePauseButton();

  document.querySelectorAll(".game-card").forEach((card) => {
    card.classList.remove("active");
  });
}

function resetState(soft) {
  flippedCards = [];
  flippedIndices = [];

  if (!soft) {
    document.querySelectorAll(".game-card").forEach((card, idx) => {
      if (!matchedCards.includes(idx)) {
        card.classList.remove("active");
      }
    });
  }
}

document.querySelectorAll(".game-card").forEach((card, idx) => {
  card.addEventListener("click", (e) => {
    if (
      !matchedCards.includes(idx) &&
      !flippedIndices.includes(idx) &&
      flippedCards.length < 2 &&
      matchedCards.length !== 10
    ) {
      if (paused && flippedCards.length === 0 && matchedCards.length === 0) {
        paused = false;
        pauseButton.innerText = "Pause";
        pauseButton.classList.add("bg-orange-500");
      }
      card.classList.toggle("active");
      const cardBack = card.querySelector(".game-card-back");
      if (cardBack) {
        flippedCards.push(cardBack.innerText);
        flippedIndices.push(idx);
      }
    }

    if (flippedCards.length === 2) {
      if (!checkMatch(flippedCards)) {
        setTimeout(() => {
          resetState();
        }, 700);
      } else if (matchedCards.length < 10) {
        matchedCards = matchedCards.concat(flippedIndices);
        resetState((soft = true));
      }
    }

    if (matchedCards.length === 10) {
      console.log("congrats!");
      clearInterval(timer);
    }
  });
});

// assigned random fruits
document.querySelectorAll(".game-card").forEach((card, idx) => {
  const cardBack = card.querySelector(".game-card-back");
  if (cardBack) {
    cardBack.innerText = shuffledFruits[idx];
  }
});
