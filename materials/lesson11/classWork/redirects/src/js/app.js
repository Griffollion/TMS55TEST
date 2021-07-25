const PATH_TO_REDIRECT = "/pages/sales/index.html";


const makeStorageKey = (name, value, callback) => {
  if (localStorage.getItem(name)) {
    callback();
  } else {
    localStorage.setItem(name, value);
  }
};

const resetStorage = (key1, key2) => {
  if (localStorage.getItem(key1) > 2) {
    localStorage.removeItem(key2);
    localStorage.setItem(key1, 0);
  }
};

makeStorageKey("counter", 0, () => {
  let counter = localStorage.getItem("counter");
  localStorage.setItem("counter", ++counter);
});

resetStorage("counter", "isVisited");

makeStorageKey("isVisited", true, () => {
  location.assign(PATH_TO_REDIRECT);
});
