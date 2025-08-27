const coinSpan = document.getElementById("coin-count");
const callHistoryContainer = document.getElementById("call-history-container");
const callButtons = document.querySelectorAll(".call-btn");

for (const callButton of callButtons) {
  callButton.addEventListener("click", () => {
    let coins = parseInt(coinSpan.innerText);
    if (coins <= 20) {
      alert("Not enough coins!");
    }
    coins = coins - 20;
    coinSpan.innerText = coins;
    console.log(coins);

    
  });
}
