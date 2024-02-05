let counterDisplay = document.querySelector("h3");
let counter = 0;

const bravoCard = document.createElement("div");
bravoCard.classList.add("bravo-card");

const h4 = document.createElement("h4");
h4.innerText = "Bravo ! Vous avez gagné !";
bravoCard.appendChild(h4);

const h5 = document.createElement("h5");
h5.innerText = "Félicitations !";
bravoCard.appendChild(h5);

function bubbleMaker() {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.floor(Math.random() * 200 + 100) + "px";

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.floor(Math.random() * 100) + 50 + "%";
  bubble.style.left = `${Math.floor(Math.random() * 100)}%`;

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    counter > 4 ? document.body.appendChild(bravoCard) : bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(bubbleMaker, 300);
