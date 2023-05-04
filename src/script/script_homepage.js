const body = document.querySelector('body');
const topBar = body.querySelector('.topBar');
const topBar_login = topBar.querySelector('#btn_topBar_login');
const topBar_logo = topBar.querySelector('#btn_topBar_smallLogo');
const main1 = body.querySelector('#sec_main1');
const main2 = body.querySelector('#sec_main2');

function moveToLoginPage(e){
    window.location.href = 'http://127.0.0.1:5500/login.html';
}
function moveToHomePage(e){
    window.location.href = 'http://127.0.0.1:5500/homepage.html';
}

topBar_login.addEventListener('click',moveToLoginPage);
topBar_logo.addEventListener('click',moveToHomePage);
console.log(main2.clientWidth);
console.log(main2.clientHeight);