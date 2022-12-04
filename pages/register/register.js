
// function selectOnlyThis(id) {
//     for (var i = 1;i <= 2; i++)
//     {
//         document.getElementById("gender" + i).checked = false;
//     }
//     document.getElementById(id).checked = true;
// }
function selectOnlyThis(id){
    let checkBoxs = document.querySelectorAll(".form-menu__checkbox__input");

    for (let i = 0; i < checkBoxs.length; i++) {
        checkBoxs[i].checked = false;
    }
    document.getElementById(id).checked = true;

}
