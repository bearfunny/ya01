// All Minus and Plus Add Number
let minusIcon = document.querySelectorAll(".number-selector__count__minus");
let plusIcon = document.querySelectorAll(".number-selector__count__plus");
let NumberIcon = document.querySelectorAll(".number-selector__count__number");

let breakfast = document.querySelector("#breakfast");
let lunch = document.querySelector("#lunch");
let dinner = document.querySelector("#dinner");

let totaLPeopleNum = Number(sessionStorage["adult-number"])+Number(sessionStorage["child-number"])

// Default Meal Number



if (sessionStorage.getItem("breakfast") == null) {
  sessionStorage.setItem("breakfast", breakfast.value);
}
if (sessionStorage.getItem("lunch") == null) {
  sessionStorage.setItem("lunch", lunch.value);
}
if (sessionStorage.getItem("dinner") == null) {
  sessionStorage.setItem("dinner", dinner.value);
}

// Minus Button
for (let i = 0; i < minusIcon.length; i++) {
  minusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= 1;
    if (NumberIcon[i].value <= 0) {
      NumberIcon[i].value = 0;
    }
    sessionStorage.setItem("breakfast", breakfast.value);
    sessionStorage.setItem("lunch", lunch.value);
    sessionStorage.setItem("dinner", dinner.value);
  });
}

//Plus Button
for (let i = 0; i < plusIcon.length; i++) {
  plusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= -1;
    if (NumberIcon[i].value >= totaLPeopleNum) {
      NumberIcon[i].value = totaLPeopleNum;
    }
    sessionStorage.setItem("breakfast", breakfast.value);
    sessionStorage.setItem("lunch", lunch.value);
    sessionStorage.setItem("dinner", dinner.value);
  });
}

// Number Limited
for (let i = 0; i < NumberIcon.length; i++) {
  NumberIcon[i].addEventListener("keyup", (event) => {
    if (NumberIcon[i].value < 0) {
      NumberIcon[i].value = 0;
      // console.log(123);
    }
    if (NumberIcon[i].value > totaLPeopleNum) {
      NumberIcon[i].value = totaLPeopleNum;
      // console.log(123);
    }
    if (!Number.isInteger(NumberIcon[i].value)) {
      NumberIcon[i].value = Math.floor(NumberIcon[i].value);
    }
    sessionStorage.setItem("breakfast", breakfast.value);
    sessionStorage.setItem("lunch", lunch.value);
    sessionStorage.setItem("dinner", dinner.value);
  });
}

// People Number Litmited

// for (let i = 0; i < peopleNumber.length; i++) {
//   peopleNumber[i].addEventListener("change", (event) => {
// if (peopleNumber[i].value > 15) {
//   peopleNumber[i].value = 15;
//   // console.log(123);
// }
//     for (let i = 0; i < peopleNumber.length; i++) {
//       if (peopleNumber[i].value >= 15) {
//         peopleGroup[i].value = 15;
//       }
//     }
//   });
// }

// submitBtn.addEventListener("click", (event) => {});
