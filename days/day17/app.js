const onlyList = document.querySelector("#only-list");
const contentDiv = document.querySelector("#content");

const links = onlyList.querySelectorAll("a");

function handleActiveState(selectedTab, fromLocalStorage, item) {
  if (selectedTab === fromLocalStorage) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
}

// const SELECTED_TAB_KEY = "day17_selectedTab";
// let fromLocalStorage = localStorage.getItem(SELECTED_TAB_KEY) || 0;

window.addEventListener(
  "hashchange",
  function () {
    hideAll();
    updateActiveTab();
  },
  false
);

function updateActiveTab() {
  let hash = window.location.hash;
  if (hash.length === 0) {
    hash = "#intro";
  }
  links.forEach((item) => {
    const itemHash = item.getAttribute("href");
    if (itemHash === hash) {
      item.firstChild.classList.add("active");
    } else {
      item.firstChild.classList.remove("active");
    }
  });
  const activeDiv = contentDiv.querySelector(`[id="${hash.replace("#", "")}"]`);
  if (activeDiv) {
    activeDiv.classList.remove("hidden");
  }
}

function hideAll() {
  contentDiv
    .querySelectorAll("[id]")
    .forEach((div) => div.classList.add("hidden"));
}

hideAll();
updateActiveTab();

/*
contentDiv
  .querySelectorAll("[id]")
  .forEach((div) => div.classList.add("hidden"));

// contentDiv
//   .querySelector(`[id="${fromLocalStorage}"`)
//   .classList.remove("hidden");

items.forEach((item, idx) => {
  handleActiveState(idx, localStorage.getItem(SELECTED_TAB_KEY) || 0, item);

  item.addEventListener("click", (e) => {
    const selectedTab = e.target.parentElement
      .getAttribute("href")
      .replace("#", "");
    localStorage.setItem(SELECTED_TAB_KEY, selectedTab);
    fromLocalStorage = localStorage.getItem(SELECTED_TAB_KEY);

    items.forEach((item) => {
      debugger;
      handleActiveState(selectedTab, fromLocalStorage, item);
    });
    contentDiv
      .querySelectorAll("[id]")
      .forEach((div) => div.classList.add("hidden"));

    const activeDiv = contentDiv.querySelector(`[id="${fromLocalStorage}"`);
    activeDiv.classList.remove("hidden");
    // activeDiv.classList.add("flex");
  });
});

*/
