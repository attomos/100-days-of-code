document.querySelectorAll(".game-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.toggle("blur-md");
  });

  // card.addEventListener("mouseleave", (e) => {
  //   card.classList.remove("blur-lg");
  // });
});
