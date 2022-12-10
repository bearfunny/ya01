const email = document.querySelector("#email");
const password = document.querySelector("#password");

const loginBtn = document.querySelector("#login-button");

// loginBtn.addEventListener("click", {
//   function(e) {
//     e.preventDefault();
//     if (email.value != "user@email.com" && password.value != "1234") {
//       alert("帳號密碼錯誤，請重新輸入。");
//     } else {
//       location.href = "../order/order_room.html";
//     }
//     alert(135);
//   },
// });

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (email.value == "" && password.value == "") {
    alert("請輸入帳號與密碼");
  } else if (email.value != "user@email.com" && password.value != "1234") {
    alert("帳號密碼錯誤，請重新輸入。");
  } else if (email.value == "user@email.com" && password.value != "1234") {
    alert("密碼輸入錯誤，請重新輸入。");
  } else if (email.value != "user@email.com" && password.value == "1234") {
    alert("帳號密碼錯誤，請重新輸入。");
  } else {
    location.href = "../order/order_room.html";
  }
});

console.log(54);
