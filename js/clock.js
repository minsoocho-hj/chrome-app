const clockEl = document.querySelector("h2#clock")

function displayClock () {
  const date = new Date();
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const second = String(date.getUTCSeconds()).padStart(2, "0");
  clockEl.innerText =`${hour}:${minute}:${second}`;
}

displayClock();
setInterval(displayClock, 1000);
