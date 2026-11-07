const revealButton = document.querySelector("#reveal-button");
const revealCard = document.querySelector("#reveal-card");

revealButton.addEventListener("click", () => {
  const isHidden = revealCard.hasAttribute("hidden");
  if (isHidden) {
    revealCard.removeAttribute("hidden");
    revealButton.innerHTML = 'Superpower revealed <span>✦</span>';
  } else {
    revealCard.setAttribute("hidden", "");
    revealButton.innerHTML = 'Reveal my superpower <span>✦</span>';
  }
});
