let counter = 10;
let launchTimer = null;
function changeState(state) {
  document.body.className = "body-state" + state;
  clearInterval(launchTimer);
  document.querySelector(".popup").style.display = "none";
  document.querySelector(".state2 .status").textContent = counter;
  if (state == 1 || state == 4) counter = 10;
  else if (state == 2) {
    launchTimer = setInterval(() => {
      document.querySelector(".state2 .status").textContent = --counter;
      if (counter === 0) changeState(3);
    }, 1000);
  } else if (state == 3) {
    setTimeout(() => {
      changeState(4);
    }, 5000);
  }
}

function abort() {
  document.querySelector(".popup").style.display = "block";
  clearInterval(launchTimer);
}
