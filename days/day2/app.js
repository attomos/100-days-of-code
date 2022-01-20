const profileImage = document.getElementById("profile-img");
const editButton = document.getElementById("edit-btn");
const nameText = document.getElementById("name-text");
const bioText = document.getElementById("bio-text");
const githubText = document.getElementById("github-text");

let editableState = false;

function updateProfileImage(githubUsername) {
  profileImage.setAttribute("src", `https://github.com/${githubUsername}.png`);
}

// local storage
function getBioFromLocalStorage() {
  const name = localStorage.getItem("name");
  const bio = localStorage.getItem("bio");
  const githubProfile = localStorage.getItem("githubProfile");

  return {
    name,
    bio,
    githubProfile,
  };
}

const initialData = getBioFromLocalStorage();

if (initialData.name && initialData.bio && initialData.githubProfile) {
  nameText.innerText = initialData.name;
  bioText.innerText = initialData.bio;
  githubText.innerText = initialData.githubProfile;
  updateProfileImage(initialData.githubProfile);
}

editButton.addEventListener("click", () => {
  editableState = !editableState;
  nameText.contentEditable = editableState;
  bioText.contentEditable = editableState;
  githubText.contentEditable = editableState;

  if (editableState) {
    editButton.innerText = "Save";
  } else {
    editButton.innerText = "Edit profile";
    // persist the state
    localStorage.setItem("name", nameText.innerText);
    localStorage.setItem("bio", bioText.innerText);
    localStorage.setItem("githubProfile", githubText.innerText);

    updateProfileImage(githubText.innerText);
    const data = getBioFromLocalStorage();
    console.log(data);
  }
});
