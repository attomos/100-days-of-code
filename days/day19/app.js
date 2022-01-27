class PinnedRepo extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("pinned-repo-template");
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
    this._data = {};
  }

  get data() {
    return this._data;
  }

  set data(newVal) {
    const newData = Object.assign(this._data, newVal);
    this._data = newData;
    this.updateContent(this);
  }

  updateContent(elem) {
    const shadow = elem.shadowRoot;
    const repoName = shadow.querySelector("#repo-name");
    repoName.innerText = this.data.name;
    const repoDescription = shadow.querySelector("#repo-description");
    repoDescription.innerText = this.data.description;
  }

  connectedCallback() {
    // console.log(this.repoName);
  }
}

customElements.define("pinned-repo", PinnedRepo);

const template = document.getElementById("pinned-repo-template");
const templateContent = template.content;

const onlyList = document.getElementById("only-list");
const repo1 = document.createElement("pinned-repo");
repo1.classList.add("w-1/2", "h-full");
// TODO: set data here
repo1.data = {
  name: "100-days-of-code",
  html_url: "https://github.com/attomos/100-days-of-code",
  visibility: "public",
  description:
    "Fork this template for the 100 days journal - to keep yourself accountable (multiple languages available)",
  language: "HTML",
  stargazers_count: 0,
  forks_count: 0,
};

const repo2 = document.createElement("pinned-repo");
repo2.classList.add("w-1/2", "h-full");
const repo3 = document.createElement("pinned-repo");
repo3.classList.add("w-1/2", "h-full");
const repo4 = document.createElement("pinned-repo");
repo4.classList.add("w-1/2", "h-full");

onlyList.appendChild(repo1);
onlyList.appendChild(repo2);
onlyList.appendChild(repo3);
onlyList.appendChild(repo4);
