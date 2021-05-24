const buttons = document.getElementsByClassName("btn");

function fillColor(exception) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML != exception) {
      buttons[i].style.backgroundColor = "black";
    } else {
        buttons[i].style.backgroundColor = "blue";
    }
  }
}

document.addEventListener("keypress", (e) => {
  console.log(String.fromCharCode(e.keyCode));
  fillColor(String.fromCharCode(e.keyCode).toUpperCase());
});
