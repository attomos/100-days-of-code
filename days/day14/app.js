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

const SELECTED_TAB_KEY = "day14_selectedTab";

let fromLocalStorage = localStorage.getItem(SELECTED_TAB_KEY) || 0;

mainPart
  .querySelectorAll(".wrapper")
  .forEach((div) => div.classList.add("hidden"));

mainPart
  .querySelector(`[data-index="${fromLocalStorage}"`)
  .classList.remove("hidden");

items.forEach((item, idx) => {
  handleActiveState(idx, localStorage.getItem(SELECTED_TAB_KEY) || 0, item);

  item.addEventListener("click", () => {
    localStorage.setItem(SELECTED_TAB_KEY, idx);
    fromLocalStorage = localStorage.getItem(SELECTED_TAB_KEY) || 0;

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
