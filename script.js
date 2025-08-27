//how to get tcurrent time in javascript
let clockDiv = document.getElementById("clock");

function updateTime() {
  let now = new Date();
  let currentTime = now.toLocaleTimeString();
  clockDiv.textContent = currentTime;
}
setInterval(updateTime, 1000);
