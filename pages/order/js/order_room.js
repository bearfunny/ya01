let date = new Date().toLocaleDateString("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

let dateStart = document.querySelector("#date-start");
let dateEnd = document.querySelector("#date-end");

// 人頭數量的變數
// Adults
let adult = document.querySelector("#adult-people-number");
let adultNumber = adult.querySelector("#adult-number");
// let adultNumberMinus = adult.querySelector(".number-selector__count__minus");
// let adultNumberPlus = adult.querySelector(".number-selector__count__plus");

// Children
let children = document.querySelector("#child-people-number");
let childrenNumber = children.querySelector("#child-number");
// let childrenNumberMinus = adult.querySelector(".number-selector__count__minus");
// let childrenNumberPlus = adult.querySelector(".number-selector__count__plus");

// All Minus and Plus Add Number
let minusIcon = document.querySelectorAll(".number-selector__count__minus");
let plusIcon = document.querySelectorAll(".number-selector__count__plus");
let NumberIcon = document.querySelectorAll(".number-selector__count__number");

// People Number Litmited to Max '15' each!
let peopleGroup = document.querySelector(".people");
let peopleNumber = peopleGroup.querySelectorAll(
  ".number-selector__count__number"
);

// Room Number Limited to Max '5'!
let roomGroup = document.querySelector(".choose");
let roomNumber = roomGroup.querySelectorAll(".number-selector__count__number");

// Submit Button
let submitBtn = document.querySelector("#submit-button");

// 入住及退房日期的相關設定
dateStart.value = date;
dateEnd.value = date;

// Room Local Value use
let leaf = document.querySelector("#leaf-number");
let tree = document.querySelector("#tree-number");
let branch = document.querySelector("#branch-number");
let prime = document.querySelector("#prime-number");

//Shows how many people can be contain per room
let peoplePerRoom = {
  leaf: 2,
  tree: 2,
  branch: 4,
  prime: 4,
};

// Default Date (Today)
sessionStorage.setItem("date-start", dateStart.value);
sessionStorage.setItem("date-end", dateEnd.value);

// Default Poeple Number
sessionStorage.setItem("adult-number", adultNumber.value);
sessionStorage.setItem("child-number", childrenNumber.value);

// Default Room Number
sessionStorage.setItem("leaf-room-number", leaf.value);
sessionStorage.setItem("tree-room-number", tree.value);
sessionStorage.setItem("branch-room-number", branch.value);
sessionStorage.setItem("prime-room-number", prime.value);

dateStart.addEventListener("change", (event) => {
  let dateChange = Date.parse(dateStart.value);
  let dateRecent = Date.parse(date);
  if (dateChange < dateRecent) {
    dateStart.value = date;
    alert("入住時間最晚為今日");
  }
});

dateStart.addEventListener("change", (event) => {
  //入住日期
  let dateMin = Date.parse(dateStart.value);
  // 退房日期
  let dateMax = Date.parse(dateEnd.value);

  if (dateMax < dateMin) {
    dateEnd.value = dateStart.value;
  }
  sessionStorage.setItem("date-start", dateStart.value);
  sessionStorage.setItem("date-end", dateEnd.value);
  
});

dateEnd.addEventListener("change", (event) => {
  let dateChange = Date.parse(dateEnd.value);
  let dateMin = Date.parse(dateStart.value);
  if (dateChange <= dateMin) {
    dateEnd.value = dateStart.value;
  }
  sessionStorage.setItem("date-end", dateEnd.value);
});

////////////////////////////////////////////////////////////////////////////////
//                                    莫老師供養區                             //
////////////////////////////////////////////////////////////////////////////////
// 人頭數量的相關設定
// const useNumberRangeValidator = (min, max) => (n) => n >= min && n < max;
//
// const useValidatorCompose =
//   (...validators) =>
//   (...args) =>
//     [...validators].every((validator) => validator(...args));
//
//     useValidatorCompose(useNumberRangeValidator(100,1000))(566);
////////////////////////////////////////////////////////////////////////////////

//  Minus, Plus and Number

// Minus Button
for (let i = 0; i < minusIcon.length; i++) {
  minusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= 1;
    if (NumberIcon[i].value <= 0) {
      NumberIcon[i].value = 0;
    }
    sessionStorage.setItem("adult-number", adultNumber.value);
    sessionStorage.setItem("child-number", childrenNumber.value);
    sessionStorage.setItem("leaf-room-number", leaf.value);
    sessionStorage.setItem("tree-room-number", tree.value);
    sessionStorage.setItem("branch-room-number", branch.value);
    sessionStorage.setItem("prime-room-number", prime.value);
  });
}

//Plus Button
for (let i = 0; i < plusIcon.length; i++) {
  plusIcon[i].addEventListener("click", (event) => {
    NumberIcon[i].value -= -1;

    for (let i = 0; i < peopleNumber.length; i++) {
      if (peopleNumber[i].value >= 15) {
        peopleNumber[i].value = 15;
      }
    }
    for (let i = 0; i < roomNumber.length; i++) {
      if (roomNumber[i].value >= 5) {
        roomNumber[i].value = 5;
      }
    }
    sessionStorage.setItem("adult-number", adultNumber.value);
    sessionStorage.setItem("child-number", childrenNumber.value);
    sessionStorage.setItem("leaf-room-number", leaf.value);
    sessionStorage.setItem("tree-room-number", tree.value);
    sessionStorage.setItem("branch-room-number", branch.value);
    sessionStorage.setItem("prime-room-number", prime.value);
  });
}

// People Number Litmited
for (let i = 0; i < peopleNumber.length; i++) {
  peopleNumber[i].addEventListener("change", (event) => {
    // if (peopleNumber[i].value > 15) {
    //   peopleNumber[i].value = 15;
    //   // console.log(123);
    // }
    for (let i = 0; i < peopleNumber.length; i++) {
      if (Number(peopleNumber[i].value) >= 15) {
        peopleNumber[i].value = "15";
      }
    }
    sessionStorage.setItem("adult-number", adultNumber.value);
    sessionStorage.setItem("child-number", childrenNumber.value);
  });
}

// Room Number Limited
for (let i = 0; i < roomNumber.length; i++) {
  roomNumber[i].addEventListener("keyup", (event) => {
    if (roomNumber[i].value > 5) {
      roomNumber[i].value = 5;
    }
    sessionStorage.setItem("leaf-room-number", leaf.value);
    sessionStorage.setItem("tree-room-number", tree.value);
    sessionStorage.setItem("branch-room-number", branch.value);
    sessionStorage.setItem("prime-room-number", prime.value);
  });
}

// Number Limited
for (let i = 0; i < NumberIcon.length; i++) {
  NumberIcon[i].addEventListener("keyup", (event) => {
    if (NumberIcon[i].value < 0) {
      NumberIcon[i].value = 0;
      // console.log(123);
    }

    if (!Number.isInteger(NumberIcon[i].value)) {
      NumberIcon[i].value = Math.floor(NumberIcon[i].value);
    }
  });
}

submitBtn.addEventListener("click", (event) => {
  let poepleTotal = 0;
  let peopleAllow = 0;
  let roomNum = [];
  let roomAllow = [];
  // console.log('test')
  for (var k in peoplePerRoom) {
    if (peoplePerRoom.hasOwnProperty(k)) {
      roomAllow.push(peoplePerRoom[k]);
    }
  }
  for (const value of roomNumber.values()) {
    roomNum.push(Number(value.value));
  }

  for (const value of peopleNumber.values()) {
    poepleTotal += Number(value.value);
  }
  // console.log(roomNum.length);
  // console.log(roomAllow);

  for (let i = 0; i < roomAllow.length; i++) {
    peopleAllow += roomAllow[i] * roomNum[i];
    // console.log(peopleAllow);
  }

  // console.log(poepleTotal);
  // console.log(peopleAllow);

  if (peopleAllow == 0 && poepleTotal == 0) {
    alert("請選擇人數與房型");
  } else if (peopleAllow == 0 && poepleTotal != 0) {
    alert("請選擇房型");
  } else if (peopleAllow != 0 && poepleTotal == 0) {
    alert("請選擇人數");
  } else if (peopleAllow < poepleTotal) {
    alert(
      `套房空間不足，您所選擇的人數為${poepleTotal}，套房容納人數為${peopleAllow}`
    );
  } else {
    location.href = "./order_meal.html";
  }
});

// for (var k in peoplePerRoom) {
//   if (peoplePerRoom.hasOwnProperty(k)) {

//   }
// }
