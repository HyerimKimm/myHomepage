const body = document.querySelector('body');
const topBar = body.querySelector('.topBar');
const topBar_login = topBar.querySelector('#btn_topBar_login');
const topBar_logo = topBar.querySelector('#btn_topBar_smallLogo');

function moveToLoginPage(e){
    window.location.href = 'http://127.0.0.1:5500/login.html';
}
function moveToHomePage(e){
    window.location.href = 'http://127.0.0.1:5500/homepage.html';
}

topBar_login.addEventListener('click',moveToLoginPage);
topBar_logo.addEventListener('click',moveToHomePage);

