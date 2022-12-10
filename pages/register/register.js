let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordCheck = document.querySelector("#password-check");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let signBtn = document.querySelector("#sign-button");

// Regexs
// Regex for only characters
const charRegex = /[/0-9^<>[\]{\}|\\\/^~%# @!:"';,.$%?&*()_+\-\0-\cZ]/g;
// Regex for number only
const numRegex = /[^0-9\.]+/g;

// Address Regex
const addressRegex = /[/^<>[\]{\}|\\\/^~%#@!:"';,.$%?&*()_+\0-\cZ]/g;

// Name Check
const cardNameRegex = /[/0-9^<>[\]{\}|\\\/^~%#@!:"';,.$%?&*()_+\-\0-\cZ]/g;

function lettersOnly(input, regex) {
  input = input.replace(regex, "");
  console.log(input);
  return input;
}

function selectOnlyThis(id) {
  let checkBoxs = document.querySelectorAll(".form-menu__checkbox__input");

  for (let i = 0; i < checkBoxs.length; i++) {
    checkBoxs[i].checked = false;
  }
  document.getElementById(id).checked = true;
}

const checkBoxGroup = document.querySelectorAll(".form-menu__checkbox__input");

for (var i = 0; i < checkBoxGroup.length; i++) {
  checkBoxGroup[i].addEventListener("click", function () {
    selectOnlyThis(this.id);
  });
}

lastName.addEventListener("keyup", () => {
  lastName.value = lettersOnly(lastName.value, charRegex);
});

firstName.addEventListener("keyup", () => {
  firstName.value = lettersOnly(firstName.value, charRegex);
});

phone.addEventListener("keyup", () => {
  phone.value = lettersOnly(phone.value, numRegex);
  if (phone.value.length >= 10) {
    phone.value = phone.value.substring(0, 10);
  }
});

phone.addEventListener("change", () => {
  if (phone.value.length != 10) {
    phone.value = "";
    alert("手機號碼應為10碼，請重新輸入");
  }
});

address.addEventListener("keyup", () => {
  address.value = lettersOnly(address.value, addressRegex);
});

// signBtn.addEventListener('click',(e)=>{
//   e.preventDefault();
//    if (password.value != passwordCheck.value) {
//      alert('tes')
//    }
// });

passwordCheck.addEventListener("change", () => {

  if (passwordCheck.value !=  password.value) {
    passwordCheck.value = '';
    alert("密碼不相符，請重新輸入")
  }
});