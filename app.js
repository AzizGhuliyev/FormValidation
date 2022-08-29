const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
const checkInputs = () => {
  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstName === "") {
    const error = document.querySelector(".err1");
    error.innerText = "First name cannot be empty";
    fname.className = "error-icon";

  } else {
    const error = document.querySelector(".err1");
    error.innerText = "";
    fname.className = "";
  }
  
  if (lastName === "") {
    const error = document.querySelector(".err2");
    error.innerText = "Last name cannot be empty";
    lname.className = "error-icon";
  } else {
    const error = document.querySelector(".err2");
    error.innerText = "";
    lname.className = "";
  }

  if (emailValue === "") {
    const error = document.querySelector(".err3");
    error.innerText = "Email cannot be empty";
    email.className = "error-icon";
  } else {
    const error = document.querySelector(".err3");
    error.innerText = "";
    email.className = "";
  }

  if (passwordValue === "") {
    const error = document.querySelector(".err4");
    error.innerText = "Password cannot be empty";
    password.className = "error-icon";
  } else {
    const error = document.querySelector(".err4");
    error.innerText = "";
    password.className = "";
  }
};
