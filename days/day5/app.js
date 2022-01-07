const backdrop = document.getElementById("backdrop");
const formContainer = document.getElementById("form-container");
const searchBar = document.getElementById("search-bar");

const metaKeys = document.getElementsByClassName("meta-key");

const mac = navigator.userAgent.match(/(Mac)/i);

if (!mac) {
  Array.from(metaKeys).forEach((e) => (e.innerText = "Ctrl"));
}

function reRenderSearchbar() {
  if (showSearchPopup) {
    backdrop.classList.remove("hidden");
    // autofocus attribute doesn't work
    searchBar.focus();
  } else {
    backdrop.classList.add("hidden");
  }
}

backdrop.addEventListener("click", function (e) {
  showSearchPopup = false;
  reRenderSearchbar();
});

formContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

let showSearchPopup = false;
window.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey || e.metaKey) &&
    String.fromCharCode(e.keyCode).toLowerCase() === "k"
  ) {
    showSearchPopup = !showSearchPopup;
  }

  if (showSearchPopup && e.keyCode === 27) {
    showSearchPopup = false;
  }

  reRenderSearchbar();
});

// TODO: actual search
searchBar.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    console.log(searchBar.value);
    searchBar.value = "";
  }
});
