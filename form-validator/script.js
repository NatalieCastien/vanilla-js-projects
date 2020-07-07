const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  formControl.querySelector("small").innerText = message;
};

// Show success
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

const checkEmail = (input) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

const checkRequired = (inputArray) => {
  inputArray.forEach((input) => {
    console.log(input);
    // Trim is to exclude white spaces
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

const checkPattern = (input) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/;
  if (regex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(
      input,
      "Password requires 6-25 characters and at least one number, uppercase and lowercase letter."
    );
  }
};

const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
};

const getFieldName = (input) => {
  if (input.id == "password2") {
    return "Password";
  } else {
    return input.id[0].toUpperCase() + input.id.slice(1);
  }
};

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPattern(password);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
