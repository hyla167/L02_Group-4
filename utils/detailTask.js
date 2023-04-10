const btnSendingRoute = document.getElementById('btn-sending-route');
const btnBackRoute = document.getElementById('btn-back-route');
const btnConfirmRoute = document.getElementById('btn-confirm-route');
const saveNotice = document.querySelector('.successful-save');
const saveNoticeText = document.querySelector('.successful-save p');
const saveNotice1 = document.querySelector('.successful-save1');
const saveNoticeText1 = document.querySelector('.successful-save1 p');


/* function setOpacity(opacity) {
    saveNotice.style.opacity = opacity / 100;
    saveNotice.style.filter = 'alpha(opacity=' + opacity + ')';
}

function fadeOut(opacity) {
    setOpacity(opacity);
    if (opacity == 1) {
        saveNotice.style.display = 'none';
        done = true;
    }
} */
btnSendingRoute.addEventListener('click', () => {
    btnConfirmRoute.style.display = "block";
    btnSendingRoute.style.display = "none";
    saveNotice.style.display = "block";
    saveNoticeText.textContent = "Gửi thành công";
    saveNotice.className += " transition";
    console.log(saveNotice);
    /* setTimeout(function() {

    }, 3000); */
})

btnConfirmRoute.addEventListener('click', () => {
    // btnBackRoute.style.display = "none";
    saveNotice1.style.display = "block";
    saveNoticeText1.textContent = "Xác nhận thành công";
    saveNotice1.className += " transition1";
    console.log(saveNotice1);
    // autoClose();
})

function autoClose(){
    timeout = setTimeout(() => {
        saveNotice.style.display = "none";
        location.replace('/home-page');
    }, 5000);
}