const startButton = document.getElementById("startButton");
const time = document.getElementById("time");
const video = document.getElementById("video");
let countdownValue = 59;
let interval;

const countdown = () => {
    startButton.classList.add("hidden");
    interval = setInterval(updateCountdown, 1000);
};

const updateCountdown = () => {
    if (countdownValue > 0) {
        time.textContent = `${countdownValue} sec`;
        countdownValue--;
    } else {
        clearInterval(interval);
        video.play();
        time.textContent = "¡Despegue!";
        countdownValue = 59;
        setTimeout(() => {
            startButton.classList.remove("hidden");
            time.textContent = "60 sec";
        }, 2000)
    }
};

startButton.addEventListener("click", countdown);