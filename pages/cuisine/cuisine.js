const switchOne = document.querySelector("#set-icon-one");
const switchTwo = document.querySelector("#set-icon-two");

const setOneBox = document.getElementById("set-box-one");
const setTwoBox = document.getElementById("set-box-two");

// setOneBox.style.display = "none";
// setTwoBox.style.display = "none";
setOneBox.style.height = "0px";
setTwoBox.style.height = "0px";

switchOne.addEventListener("click", function () {

  let height = setOneBox.style.height;
  // console.log(height);
  if (height == "0px") {
    setOneBox.style.height = "100%";
    switchOne.classList.remove("rotate");
    console.log(height);
    // console.log(setOneBox.style.display);
  }else{
    setOneBox.style.height = "0px";
    switchOne.classList.add("rotate");
    console.log(height);
  }
});

switchTwo.addEventListener('click',function(e){
    let height = setTwoBox.style.height;
    if (height == "0px") {
        setTwoBox.style.height = "100%";
        switchTwo.classList.remove("rotate");
        console.log(height);
        // console.log(setOneBox.style.display);
      }else{
        setTwoBox.style.height = "0px";
        switchTwo.classList.add("rotate");
        console.log(height);
      }
});
