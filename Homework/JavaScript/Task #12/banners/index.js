const img = document.getElementById("img");
const stop_btn = document.getElementById("stop");
const resume_btn = document.getElementById("resume");

let counter = 1;
let interval = setInterval(function () {
  changeImage();
}, 1000);

function changeImage() {
  if (counter > 4) {
    counter = 1;
  }

  img.src = `img/${counter}.jpg`;
  counter++;
}

resume_btn.addEventListener("click", () => {
    setInterval(function () {
        changeImage()
    }, 1000)
});

stop_btn.addEventListener("click", () => {
    clearInterval(interval); interval
});

interval