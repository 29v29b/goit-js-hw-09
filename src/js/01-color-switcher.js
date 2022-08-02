const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function interval() {
  timerId = setInterval(() => {
    changeBgColor();
  }, 1000);
}

startBtn.addEventListener('click', () => {
  interval();
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', stop);

function stop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function changeBgColor() {
  body.setAttribute('style', `background-color: ${getRandomHexColor()}`);
}
