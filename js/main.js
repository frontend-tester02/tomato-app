// TOMATO BTNS
const tomatoBtns = document.querySelectorAll('.tomato__btn');
const tomatoBtnItem = document.querySelectorAll('.tomato__btns-item');
const tomatoBodyItem = document.querySelectorAll('.tomato__body-item');

function deactiveBtnItem() {
  tomatoBtnItem.forEach((item) => {
    item.classList.remove('tomato__btns--active')
  })
}

function deactiveBodyItem() {
  tomatoBodyItem.forEach((item) => {
    item.classList.remove('tomato__body-item--active')
  })
}

tomatoBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    deactiveBtnItem()

    btn.parentElement.classList.add('tomato__btns--active');

    deactiveBodyItem()

    const showBodyItem =  document.querySelector(btn.dataset.tabTarget)
    showBodyItem.classList.add('tomato__body-item--active')

  })
})

// RUN TIMER

const tomatoTime = document.querySelectorAll('.tomato__item')
const startBtn = document.querySelectorAll('.tomato__item-start-btn')
const stopBtn = document.querySelectorAll('.tomato__item-stop-btn')
const resetBtn = document.querySelectorAll('.tomato__item-reset-btn')



let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`

  tomatoTime.forEach((time) => {
    time.innerHTML = formatedTime
  })
}

function startTime() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer()
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = 1500;
      updateTimer()
    }
  }, 1000)
}

function stopTime() {
  clearInterval(interval)
}

function resetTimer() {
  clearInterval(interval);
  timeLeft= 1500;
  updateTimer()
}

startBtn.forEach((btn) => {
  btn.addEventListener('click', startTime)
})

stopBtn.forEach((item) => {
  item.addEventListener('click', stopTime)
})

resetBtn.forEach((item) => {
  item.addEventListener('click', resetTimer)
})


tomatoTime.forEach((item) => {
  let newTime = parseFloat(item.textContent)
  console.log(newTime);
})