const coinSpan = document.getElementById("coin-count");
const callHistoryContainer = document.getElementById("call-history-container");
const callButtons = document.querySelectorAll(".call-btn");
const heartCount = document.querySelector(".heartCount");
const heartIcons = document.querySelectorAll(".heartIcon");

function handleCall(e) {
  let coins = parseInt(coinSpan.innerText);

  if (coins < 20) {
    alert("Not enough coins!");
    return;
  }

  coins -= 20;
  coinSpan.innerText = coins;

  const card = e.target.closest(".bg-white");
  const title = card.querySelector(".cart-title").innerText;
  const hotLineNumber = card.querySelector(".cart-hotline").innerText;

  const callhistorybox = document.createElement("div");
  callhistorybox.innerHTML = `
      <h1>${title}</h1>
      <p>${hotLineNumber}</p>
  `;

  callHistoryContainer.appendChild(callhistorybox);
}

callButtons.forEach((btn) => btn.addEventListener("click", handleCall));

const increaseHeartCount = () => {
  let primaryNumber = parseInt(heartCount.innerText);
  primaryNumber++;
  heartCount.innerText = primaryNumber;
};

heartIcons.forEach((icon) =>
  icon.addEventListener("click", increaseHeartCount)
);
