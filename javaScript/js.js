const coinSpan = document.getElementById("coin-count");
const callHistoryContainer = document.getElementById("call-history-container");
const callButtons = document.querySelectorAll(".call-btn");
const heartCount = document.querySelector(".heartCount");
const heartIcons = document.querySelectorAll(".heartIcon");
const clearButton = document.getElementById("clearButton");

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
  callhistorybox.classList =
    "p-4 bg-white rounded-md border border-gray-200 my-3";

  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  const time = `${hours} : ${minutes} : ${seconds}`;

  callhistorybox.innerHTML = `
    <div class="flex justify-between items-center">
      <div>
        <h1 class="font-semibold text-lg my-1">${title}</h1>
        <p class="font-semibold text-sm my-1">${hotLineNumber}</p>
      </div>
      <p class="text-sm">${time}</div>
    </div>
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

clearButton.addEventListener("click", () => {
  callHistoryContainer.innerHTML = "";
});
