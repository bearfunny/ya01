// Personal Info
const lastName = document.querySelector("#last-name");
const firstName = document.querySelector("#first-name");
const mobileNum = document.querySelector("#mobile-number");
const phoneNum = document.querySelector("#phone");
const country = document.querySelector("#country");
const address = document.querySelector("#address");

// Card Info
const cardNumber = document.querySelector("#credit-number");
const cardExpired = document.querySelector("#credit-expired");
const cardCVV = document.querySelector("#credit-cvv");
const cardOwner = document.querySelector("#credit-owner");

// Sumbit Btn
const submitBtn = document.querySelector("#submit-button");

// Price of Rooms and Meal
const roomPrice = {
  leaf: 35000,
  tree: 39000,
  branch: 42500,
  prime: 52000,
};

const mealPrice = {
  breakfast: 500,
  lunch: 750,
  dinner: 800,
};

// Session Item

// Date Session Item
const sessionDateStart = sessionStorage.getItem("date-start");
const sessionDateEnd = sessionStorage.getItem("date-end");

// People Number
let adultNumber = sessionStorage.getItem("adult-number");
let childNumber = sessionStorage.getItem("child-number");

// Rooms Number
let leafNumber = Number(sessionStorage.getItem("leaf-room-number"));
let treeNumber = Number(sessionStorage.getItem("tree-room-number"));
let branchNumber = Number(sessionStorage.getItem("branch--room-number"));
let primeNumber = Number(sessionStorage.getItem("prime-room-number"));

const roomNumberList = [leafNumber, treeNumber, branchNumber, primeNumber] 

// Meal Number
let breakfastNumber = Number(sessionStorage.getItem("breakfast"));
let lunchNumber = Number(sessionStorage.getItem("lunch"));
let dinnerNumber = Number(sessionStorage.getItem("dinner"));

const mealNumberList = [breakfastNumber, lunchNumber, dinnerNumber] 

// All Dynamic
const dateStart = document.querySelector('#date-start');
const dateEnd = document.querySelector('#date-end');
const totalPriceResult = document.querySelector('#total-price');
const adultResult = document.querySelector("#adult-number");
const childResult = document.querySelector('#child-number');
const leafResult = document.querySelector('#leaf');
const treeResult = document.querySelector('#tree');
const branchResult = document.querySelector("#branch");
const primeResult = document.querySelector('#prime');
const breakfastResult = document.querySelector('#breakfast');
const lunchResult = document.querySelector('#lunch');
const dinnerResult = document.querySelector('#dinner');
const noMealResult = document.querySelector('#meal-none');

// Room Price List
let roomPriceList = [];

// Meal Price List
let mealPriceList = [];

// Total Price
let totalPrice = 0;

// Regexs
// Regex for only characters
const charRegex = /[/0-9^<>[\]{\}|\\\/^~%# @!:"';,.$%?&*()_+\-\0-\cZ]/g;
// Regex for number only
const numRegex = /[^0-9\.]+/g;

// Address Regex
const addressRegex = /[/^<>[\]{\}|\\\/^~%#@!:"';,.$%?&*()_+\0-\cZ]/g;

// Card Name Check
const cardNameRegex = /[/0-9^<>[\]{\}|\\\/^~%#@!:"';,.$%?&*()_+\-\0-\cZ]/g;

// Cash Check Box
const checkBoxGroup = document.querySelectorAll(".payment__cash-checkbox");

// Credit Div Group
// Credt Div QuerySelector
const creditGroup = document.querySelector(".payment__credit");
//
const creditGroupInput = creditGroup.querySelectorAll(".form-menu__input");

// CheckBox QuerySelector
const paymentCheckBoxs = document.querySelectorAll(".payment__cash-check");
const cashCheckbox = document.querySelector("#cash");
const creditCheckbox = document.querySelector("#credit");

// Credit Payment Full Div
const PaymentDiv = document.querySelector(".payment__credit");



for (let i = 0; i < creditGroupInput.length; i++) {
  creditGroupInput[i].removeAttribute("required");
  creditGroupInput[i].setAttribute("disabled", "");
  creditGroupInput[i].style.cursor = "not-allowed";
  PaymentDiv.style.backgroundColor = "rgb(228 228 228)";
}
/////////////////////////////////
function lettersOnly(input, regex) {
  input = input.replace(regex, "");
  console.log(input);
  return input;
}

lastName.addEventListener("keyup", () => {
  lastName.value = lettersOnly(lastName.value, charRegex);
});

firstName.addEventListener("keyup", () => {
  firstName.value = lettersOnly(firstName.value, charRegex);
});

mobileNum.addEventListener("keyup", () => {
  mobileNum.value = lettersOnly(mobileNum.value, numRegex);
  if (mobileNum.value.length >= 10) {
    mobileNum.value = mobileNum.value.substring(0, 10);
  }
});

mobileNum.addEventListener("change", () => {
  if (mobileNum.value.length != 10) {
    mobileNum.value = "";
    alert("手機號碼應為10碼，請重新輸入");
  }
});

phoneNum.addEventListener("keyup", () => {
  phoneNum.value = lettersOnly(phoneNum.value, numRegex);
  if (phoneNum.value.length >= 10) {
    phoneNum.value = phoneNum.value.substring(0, 10);
  }
});

phoneNum.addEventListener("change", () => {
  if (phoneNum.value.length != 10) {
    phoneNum.value = "";
    alert("家用電話號碼含區域碼應為10碼，請重新輸入");
  }
});

country.addEventListener("keyup", () => {
  country.value = lettersOnly(country.value, charRegex);
});

address.addEventListener("keyup", () => {
  address.value = lettersOnly(address.value, addressRegex);
});

// Credit Validation
cardNumber.addEventListener("keyup", () => {
  cardNumber.value = lettersOnly(cardNumber.value, numRegex);
  if (cardNumber.value.length >= 16) {
    cardNumber.value = cardNumber.value.substring(0, 16);
  }
});

// Format the Credit
cardNumber.addEventListener("change", () => {
  if (cardNumber.value.length != 16) {
    cardNumber.value = "";
    alert("卡號應為16碼，請重新輸入");
  } else {
    cardNumber.value =
      cardNumber.value.substring(0, 4) +
      "-" +
      cardNumber.value.substring(4, 8) +
      "-" +
      cardNumber.value.substring(8, 12) +
      "-" +
      cardNumber.value.substring(12, 16);
  }
});

// Expired Date Validation
cardExpired.addEventListener("keyup", () => {
  cardExpired.value = lettersOnly(cardExpired.value, numRegex);
  if (cardExpired.value.length >= 4) {
    cardExpired.value = cardExpired.value.substring(0, 4);
  }
});

// Format the Expired Date
cardExpired.addEventListener("change", () => {
  if (cardExpired.value.length != 4) {
    cardExpired.value = "";
    alert("月份加數字應為4碼，格式為MM/DD，請重新輸入");
  } else {
    cardExpired.value =
      cardExpired.value.substring(0, 2) +
      "/" +
      cardExpired.value.substring(2, 5);
  }
});

// CVV Check only needs Validation
cardCVV.addEventListener("keyup", () => {
  cardCVV.value = lettersOnly(cardCVV.value, numRegex);
  // cardCVV.value = cardCVV.value.substring(0, 4);
  if (cardCVV.value.length == 3) {
    cardCVV.value = cardCVV.value.substring(0, 3);
  }
  if (cardCVV.value.length >= 4) {
    cardCVV.value = cardCVV.value.substring(0, 4);
  }
});

cardCVV.addEventListener("change", () => {
  if (cardCVV.value.length < 3) {
    cardCVV.value = "";
    alert("CVV安全碼應為3碼或4碼，請重新輸入");
  }
});

// Card Owner Validation
cardOwner.addEventListener("keyup", () => {
  cardOwner.value = lettersOnly(cardOwner.value, cardNameRegex);
});

// Check Box select only one kind of payment
function selectOnlyThis(id) {
  let checkBoxs = document.querySelectorAll(".payment__cash-checkbox");

  for (let i = 0; i < checkBoxs.length; i++) {
    checkBoxs[i].checked = false;
  }
  document.getElementById(id).checked = true;
}

for (var i = 0; i < checkBoxGroup.length; i++) {
  checkBoxGroup[i].addEventListener("click", function () {
    selectOnlyThis(this.id);
  });
}

// Check to see which payment the customer wants to use, and disable meanwhile darken the backgroud color of credit section
cashCheckbox.addEventListener("click", () => {
  if (cashCheckbox.checked == true) {
    for (let i = 0; i < creditGroupInput.length; i++) {
      creditGroupInput[i].removeAttribute("required");
      creditGroupInput[i].setAttribute("disabled", "");
      creditGroupInput[i].style.cursor = "not-allowed";
      creditGroupInput[i].value = "";
      PaymentDiv.style.backgroundColor = "rgb(228 228 228)";
    }
  }
});

creditCheckbox.addEventListener("click", () => {
  if (creditCheckbox.checked == true) {
    for (let i = 0; i < creditGroupInput.length; i++) {
      creditGroupInput[i].removeAttribute("disabled");
      creditGroupInput[i].setAttribute("required", "");
      creditGroupInput[i].style.cursor = "auto";
      PaymentDiv.style.backgroundColor = "white";
    }
  }
});


for (let k in roomPrice) {
  if (roomPrice.hasOwnProperty(k)) {
    roomPriceList.push(roomPrice[k]);
  }
}

for (let k in mealPrice) {
  if (mealPrice.hasOwnProperty(k)) {
    mealPriceList.push(mealPrice[k]);
  }
}

for (let i = 0; i < roomPriceList.length; i++) {
  totalPrice += roomPriceList[i]*roomNumberList[i]
}

for (let i = 0; i < mealPriceList.length; i++) {
  totalPrice += mealPriceList[i]*mealNumberList[i]
  
}

// Show innerHtml
dateStart.innerHTML = `入住時間：${sessionDateStart}　15:30`;
dateEnd.innerHTML = `退房時間：${sessionDateEnd}　12:00`;

totalPriceResult.innerHTML = totalPrice

adultResult.innerHTML = `成人 ${adultNumber} 位`;
childResult.innerHTML = `兒童 ${childNumber} 位`;

// const leafResult = document.querySelector('#leaf');
// const treeResult = document.querySelector('#tree');
// const branchResult = document.querySelector("#branch");
// const primeResult = document.querySelector('#prime');

if (leafNumber != '0') {
  leafResult.innerHTML = `葉之蔭簡約套房(兩人房)　共 ${leafNumber} 間`;
  
}

if (treeNumber != '0') {
  treeResult.innerHTML = `木之花舒適套房(兩人房)　共 ${treeNumber} 間`;
  
}
if (branchNumber != '0') {
  branchResult.innerHTML = `梢之景悅享套房(四人房)　共 ${branchNumber} 間`;
}

if (primeNumber != '0') {
  primeResult.innerHTML = `常盤木尊貴套房(四人房)　共 ${primeNumber} 間`;
  
}

if (breakfastNumber != '0') {
  breakfastResult.innerHTML = `早餐 ${breakfastNumber} 份`
}

if (lunchNumber != '0') {
  lunchResult.innerHTML = `午餐 ${lunchNumber} 份`
}

if (dinnerNumber != '0') {
  dinnerResult.innerHTML = `晚餐 ${dinnerNumber} 份`
}

if (breakfastNumber == 0 && lunchNumber == 0 && dinnerNumber == 0) {
  noMealResult.innerHTML = `無`
}