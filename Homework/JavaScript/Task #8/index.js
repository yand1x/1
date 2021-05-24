const input = document.getElementById("priceInput");

const price_container = document.getElementById("price-container");
const error_container = document.getElementById("error-container");

input.addEventListener("focus", () => {
  input.style.borderColor = "green";
});

input.addEventListener("focusout", () => {
  if (!document.querySelector("span")) {
    if (input.value < 0) {
      input.style.borderColor = "red";
      let spanContainer = document.createElement("span");
      let textContainer = document.createElement("p");

      textContainer.innerHTML = "Please enter correct price span";
      spanContainer.appendChild(textContainer);
      error_container.appendChild(spanContainer);
    } else {
      let spanContainer = document.createElement("span");
      let textContainer = document.createElement("p");
      let closeButton = document.createElement("p");

      closeButton.id = "close-button";
      closeButton.innerHTML = "✕";

      textContainer.innerHTML = `Текущая цена: ${input.value}`;
      spanContainer.appendChild(textContainer);
      spanContainer.appendChild(closeButton);
      price_container.appendChild(spanContainer);

      closeButton.addEventListener("click", () => {
        document.querySelector("span").remove();
        input.value = "";
      });
    }
  }
});
