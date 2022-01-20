const onlyList = document.querySelector("#only-list");
const mainPart = document.querySelector("#main");

const items = onlyList.querySelectorAll(".menu-item");

function handleActiveState(idx, fromLocalStorage, item) {
  if (idx === parseInt(fromLocalStorage, 10)) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
}

let fromLocalStorage = localStorage.getItem("selectedTab") || 0;

mainPart
  .querySelectorAll(".wrapper")
  .forEach((div) => div.classList.add("hidden"));

mainPart
  .querySelector(`[data-index="${fromLocalStorage}"`)
  .classList.remove("hidden");

items.forEach((item, idx) => {
  handleActiveState(idx, localStorage.getItem("selectedTab") || 0, item);

  item.addEventListener("click", () => {
    localStorage.setItem("selectedTab", idx);
    fromLocalStorage = localStorage.getItem("selectedTab") || 0;

    items.forEach((item, idx) => {
      handleActiveState(idx, fromLocalStorage, item);
    });
    mainPart
      .querySelectorAll(".wrapper")
      .forEach((div) => div.classList.add("hidden"));

    const activeDiv = mainPart.querySelector(
      `[data-index="${fromLocalStorage}"`
    );
    activeDiv.classList.remove("hidden");
    // activeDiv.classList.add("flex");
  });
});
