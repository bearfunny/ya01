let logoutBtn = document.querySelector('#logout-button');

logoutBtn.addEventListener('click', ()=>{
    sessionStorage.clear();
});