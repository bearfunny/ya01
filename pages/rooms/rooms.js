// Button Const
const modalBtnOne = document.getElementById("room-button-one");
const modalBtnTwo = document.getElementById("room-button-two");
const modalBtnThree = document.getElementById("room-button-three");
const modalBtnFour = document.getElementById("room-button-four");

// Modal Const
const modalOne = document.getElementById("modal-one");
const modalTwo = document.getElementById("modal-two");
const modalThree = document.getElementById("modal-three");
const modalFour = document.getElementById("modal-four");

// Select All Close Button and Close Text
const closeBtn = document.querySelectorAll(".close-text");
const closeIcon = document.querySelectorAll(".close-btn");

// Select All Modals
const modals = document.querySelectorAll(".hotel-modal-pop");

function displayModal(modalName) {
  modalName.style.display = "flex";

  setTimeout(() => {
    modalName.style.opacity = "1";
  }, 100);
}

function HideModal() {
  // modalName.style.opacity = "0";

  for (let i = 0; i < modals.length; i++) {
    if (modals[i].style.display != "none" && modals[i].style.opacity != "0") {
      modals[i].style.opacity = "0";
      body_noscroll.classList.remove("fixed-body");
      setTimeout(() => {
        modals[i].style.display = "none";
      }, 1500);
    }
  }

  console.log(modals[1]);
}

modalBtnOne.addEventListener("click", function (e) {
  e.preventDefault();
  displayModal(modalOne);
  setTimeout(() => {
    body_noscroll.classList.add("fixed-body");
  }, 1300);
});

modalBtnTwo.addEventListener("click", function (e) {
  e.preventDefault();
  displayModal(modalTwo);
  setTimeout(() => {
    body_noscroll.classList.add("fixed-body");
  }, 1300);
});

modalBtnThree.addEventListener("click", function (e) {
  e.preventDefault();
  displayModal(modalThree);
  setTimeout(() => {
    body_noscroll.classList.add("fixed-body");
  }, 1300);
});

modalBtnFour.addEventListener("click", function (e) {
  e.preventDefault();
  displayModal(modalFour);
  setTimeout(() => {
    body_noscroll.classList.add("fixed-body");
  }, 1300);
});

console.log(closeBtn.length);

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function (e) {
    HideModal();
  });
}

for (var i = 0; i < closeIcon.length; i++) {
  closeIcon[i].addEventListener("click", function (e) {
    HideModal();
  });
}
