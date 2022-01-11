document.querySelectorAll(".game-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.toggle("active");
  });
});
