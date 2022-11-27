// (() => {

//   function myFunction() {
//     this.classList.toggle("change");
//   }

//   document.getElementById("mobile-nav").addEventListener("click", myFunction);

// })();

// (() => {
//   let mobile_nav_toggle = document.getElementById("mobile-nav");
//   const mobile_nav = document.getElementsByClassName("mobile-nav");

//   function myFunction() {
//     if (mobile_nav_toggle.classList.contains("change") == false) {
//       this.classList.add("change");
//       mobile_nav[0].style.display = "block";
//     } else {
//       this.classList.remove("change");
//       mobile_nav[0].style.display = "none";
//     }

//     document.getElementById("mobile-nav").addEventListener("click", myFunction);

//     console.log(mobile_nav_toggle.classList.contains("change"));
//   }
// })();
const mobile_nav_toggle = document.getElementById("mobile-nav-toggle");
const mobile_nav = document.getElementsByClassName("mobile-nav");
const return_previous = document.getElementById("mobile-nav-previous");
const body_noscroll = document.getElementById("body-page");

function openMobileNav() {
  if (mobile_nav_toggle.classList.contains("change") == false) {
    this.classList.add("change");
    mobile_nav[0].style.display = "block";
    setTimeout(() => {
      mobile_nav[0].classList.add("active");
    }, 100);

    body_noscroll.classList.add("fixed-body");
  } else {
    this.classList.remove("change");
    mobile_nav[0].style.display = "none";
  }

  console.log(mobile_nav_toggle.classList.contains("change"));
}

function closeMobileNav() {
  if (mobile_nav[0].style.display == "block") {
    mobile_nav[0].classList.remove("active");
    setTimeout(() => {
      mobile_nav[0].style.display = "none";
    }, 600);
    mobile_nav_toggle.classList.remove("change");
    body_noscroll.classList.remove("fixed-body");
  }
}

mobile_nav_toggle.addEventListener("click", openMobileNav);

return_previous.addEventListener("click", closeMobileNav);
