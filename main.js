const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const optionsWrapper = document.createElement("div");
optionsWrapper.setAttribute("class", "options-wrapper");
header.appendChild(optionsWrapper);

const currentDate = document.createElement("p");
currentDate.setAttribute("class", "current-date");
optionsWrapper.appendChild(currentDate);

const modeBtn = document.createElement("button");
modeBtn.setAttribute("class", "mode-btn");
modeBtn.classList.add("btn");
modeBtn.innerText = "* Change Mode *";
optionsWrapper.appendChild(modeBtn);

const greeting = document.createElement("p");
greeting.setAttribute("class", "greeting");
header.appendChild(greeting);

let counter = document.createElement("div");
counter.setAttribute("class", "counter");
main.appendChild(counter);

const btnsWrapper = document.createElement("div");
btnsWrapper.setAttribute("class", "btns-wrapper");
main.appendChild(btnsWrapper);

const downBtn = document.createElement("button");
downBtn.setAttribute("class", "btn");
downBtn.innerText = "< DOWN >";
btnsWrapper.appendChild(downBtn);

const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "btn");
resetBtn.innerText = "< RESET >";
btnsWrapper.appendChild(resetBtn);

const upBtn = document.createElement("button");
upBtn.setAttribute("class", "btn");
upBtn.innerText = "< UP >";
btnsWrapper.appendChild(upBtn);

//date
const generateCurrentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let fullDate = new Date();
  let date = fullDate.getDate().toString().padStart(2, "0");
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();

  let hour = fullDate.getHours().toString().padStart(2, "0");
  let minutes = fullDate.getMinutes().toString().padStart(2, "0");
  let seconds = fullDate.getSeconds().toString().padStart(2, "0");

  return `${date} ${months[month]} ${year} -- ${hour}:${minutes}:${seconds}`;
};

const assignCurrentDate = () => {
  currentDate.innerText = generateCurrentDate();
};

setInterval(assignCurrentDate, 1000);

//greeting

let generateGreeting = () => {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 5 && hour < 13) greeting.innerText = "- Good Morning -";
  else if (hour >= 13 && hour < 18) greeting.innerText = "- Good Afternoon -";
  else if (hour >= 18 && hour < 22) greeting.innerText = "- Good Evening -";
  else if (hour >= 22 && hour < 5) greeting.innerText = "- Good Night -";
  else greeting.innerText = "- Good Day -";
};

generateGreeting();

//mode
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//counter

let counterValue = 0;
counter.innerText = counterValue;

downBtn.addEventListener("click", () => {
  counterValue--;
  counter.innerText = counterValue;
});

upBtn.addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
});

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counter.innerText = counterValue;
});
