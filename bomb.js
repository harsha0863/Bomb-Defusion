let inputEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countdown = 10;
let containerEl = document.getElementById("timer-container");

let timerId = setInterval(function () {
  countdown--;
  timerEl.textContent = countdown;

  if (countdown === 0) {
    clearInterval(timerId);

    // Play explosion sound
    let explosionSound = new Audio("explosionSound.mp3");
    explosionSound.play().catch((err) => {
      console.log("Sound error", err);
    });

    // Clear the page and show explosion
    document.body.innerHTML = "";
    document.body.style.backgroundImage = "url('explosion.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";

    const boomText = document.createElement("h1");
    boomText.textContent = "💥 You exploded! 💀";
    boomText.style.color = "red";
    boomText.style.fontSize = "60px";
    boomText.style.fontWeight = "bold";
    boomText.style.textShadow = "2px 2px 10px black";

    document.body.appendChild(boomText);
  }
}, 1000);

inputEl.addEventListener("keydown", function (event) {
  let bomberDefuser = inputEl.value;

  if (event.key === "Enter" && bomberDefuser === "defuse" && countdown !== 0) {
    clearInterval(timerId);

    // Change background to green lightning
    document.body.innerHTML = "";
    document.body.style.backgroundImage = "url('green.gif')"; // use your green gif here
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";

    const successText = document.createElement("h1");
    successText.textContent = "✅ Bomb Defused! You're a hero! ⚡";
    successText.style.color = "#00ff00";
    successText.style.fontSize = "50px";
    successText.style.fontWeight = "bold";
    successText.style.textShadow = "2px 2px 10px black";

    document.body.appendChild(successText);
  }
});
