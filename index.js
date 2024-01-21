let timerId; // переменная, которая будет хранить ID таймера
//const startButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
   !timerId ? timerId = setInterval(updateClock, 1000) : '';
    console.log(timerId);
    // запускаем  updateClock() каждую секунду
});
//const stopButton = ДОКУМЕНТ.ГЕТэЛЕМЕНТбАЙаЙДИ(КАКОЙ - ТО);
const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId);
    timerId = '';
    console.log(timerId);
    // останавливаем таймер
});

function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    //    const now = НОВАЯдАТА();
    const now = new Date();
    //    const hours = now.ДАЙчАСЫ();
    const hours = now.getHours();
    //    const minutes = now.ДАЙмИНУТЫ();
    const minutes = now.getMinutes();
    //    const seconds = now.ДАЙсЕКУНДЫ();
    const seconds = now.getSeconds();
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
