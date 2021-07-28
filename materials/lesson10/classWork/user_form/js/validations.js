function validateName() {
  this.className = "";
  if (this.value) {
    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
  }
}

function validateForm(form) {
  const conditions = Array.from(form).reduce((arr, el) => {
    if (
      (el.classList.contains("invalid") || el.value == "") &&
      el.hasAttribute("data-requied")
    ) {
      arr.push(false);
    }

    return arr;
  }, []);

  if (conditions.length != 0) {
    isValidForm = false;
  } else {
    isValidForm = true;
  }
}
