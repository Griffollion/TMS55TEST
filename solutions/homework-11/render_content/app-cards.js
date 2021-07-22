const body = document.querySelector("body");
const ageLimit = 18;

window.addEventListener("storage", () => {
  let storageName = localStorage.getItem("user_name");
  let storageAge = localStorage.getItem("user_age");
  if (storageAge && storageName) {
    getContentByAge(storageAge, ageLimit, body);
  }
});

function getContentByAge(age, limit, container) {
  if (age > limit) {
    container.insertAdjacentHTML("beforeend", makeAdultsContent());
  } else {
    container.insertAdjacentHTML("beforeend", makeCildrenContent());
  }
}

function makeAdultsContent() {
  let section = document.createElement("section");
  section = `
      <div>18+</div>`;
  return section;
}

function makeCildrenContent() {
  let section = document.createElement("section");
  section = `
    <div>1+</div>`;
  return section;
}
