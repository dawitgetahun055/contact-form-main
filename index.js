const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const queryType = document.querySelectorAll("#radio");
const message = document.getElementById("message");
const checkBox = document.querySelector("input[type=checkbox]");
const queryError = document.getElementById("errorDiv");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("clicked");
  console.log(checkBox);
  console.log(document.getElementById("checkboxError").textContent);

  queryValidator(queryType);

  validateInputs();
});

const setError = (element, message) => {
  const wrapper = element.parentElement;

  const errorDisplay = wrapper.querySelector(".error");

  errorDisplay.innerText = message;
  wrapper.classList.add("error");
  wrapper.classList.remove("success");
};

const setSuccess = (element) => {
  const wrapper = element.parentElement;
  const errorDisplay = wrapper.querySelector(".error");

  errorDisplay.innerText = "";
  wrapper.classList.add("success");
  wrapper.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const queryValidator = (radio) => {
  radio.forEach((button) => {
    button.parentElement.style.borderColor = "";
    button.parentElement.style.backgroundColor = "";
  });

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      const radioSelected = radio[i];

      radioSelected.parentElement.style.borderColor = "hsl(169, 82%, 27%)";
      radioSelected.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
      queryError.textContent = "";
      break;
    } else {
      queryError.textContent = "Please select a query type";
      queryError.style.color = "hsl(0, 66%, 54%)";
    }
  }
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "This field is required");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "This field is required");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    setError(email, "Email Address please");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "enter a valid email address");
  } else {
    setSuccess(email);
  }
  if (message.value.trim() === "") {
    setError(message, "This feild is required");
    message.style.borderColor = "hsl(0, 66%, 54%)";
  } else {
    setSuccess(message);
    message.style.borderColor = "hsl(169, 82%, 27%)";
  }
  if (!checkBox.checked) {
    document.getElementById("checkboxError").textContent =
      "To submit this form, please consent to be contacted";
  } else {
    document.getElementById("checkboxError").textContent = "";
  }
};
