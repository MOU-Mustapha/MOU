let nums = document.querySelectorAll(".stats .box .number");
let sectionSt = document.querySelector(".stats");
let started = false;

let sectionOur = document.querySelector(".our-skills");
let spans = document.querySelectorAll(
  ".our-skills .container .skills .skill .progress span"
);
let specialSpans = document.querySelectorAll(
  ".our-skills .container .skills .skill h3 span"
);
let scroller = document.querySelector(".to-top");

window.onscroll = function () {
  if (window.scrollY >= sectionSt.offsetTop - 130) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= sectionOur.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    specialSpans.forEach((span) => {
      span.style.opacity = 1;
    });
  }
  if (window.scrollY >= 700) {
    scroller.classList.add("show");
  } else {
    scroller.classList.remove("show");
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

let countDownDate = new Date(2022, 11, 31, 23, 59, 59).getTime();
let daysSpan = document.querySelector(".events .container .time .unit .days");
let hoursSpan = document.querySelector(".events .container .time .unit .hours");
let minutesSpan = document.querySelector(
  ".events .container .time .unit .minutes"
);
let secondsSpan = document.querySelector(
  ".events .container .time .unit .seconds"
);
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  daysSpan.innerHTML = days;
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hoursSpan.innerHTML = hours;
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  minutesSpan.innerHTML = minutes;
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  secondsSpan.innerHTML = seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressOne = document.querySelector(".form form div .progress-one");
let inputOne = document.querySelector('.form form div input[name="Name"]');
let maxLenghOne = inputOne.getAttribute("maxlength");

inputOne.oninput = function () {
  progressOne.style.width = `${(this.value.length * 100) / maxLenghOne}%`;
  progressOne.style.width == `100%`
    ? (progressOne.style.backgroundColor = "red")
    : (progressOne.style.backgroundColor = "#2196f3");
};

let progressTwo = document.querySelector(".form form div .progress-two");
let inputTwo = document.querySelector('.form form div input[name="Mobile"]');
let maxLengthTwo = inputTwo.getAttribute("maxlength");

inputTwo.oninput = function () {
  progressTwo.style.width = `${(this.value.length * 100) / maxLengthTwo}%`;
  progressTwo.style.width == `100%`
    ? (progressTwo.style.backgroundColor = "red")
    : (progressTwo.style.backgroundColor = "#2196f3");
};

scroller.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
