Answer :- 1
getElementById("id") → একটাই element দেয়।
getElementsByClassName("class") → সব element দেয়।
querySelector("selector") → প্রথম j element ar sate milbe seta  দেয়।
querySelectorAll("selector") → সব element দেয়।

Answer :- 2
const div = document.createElement("div");
div.innerText = "Md Hasan Mahamud";                
document.body.appendChild(div);  

Answer :- 3
Event Bubbling হলো একটা event নিচের element থেকে উপরের parent element এর দিকে চলে।

Answer :- 3
Parent element দিয়ে child elements handle করা। নতুন element add হলেও কাজ করবে, আলাদা listener লাগবে না।

Answer :- 5 
preventDefault() event এর default action বন্ধ করে। যেমন link click হলে page reload না করা।
stopPropagation() event কে parent এর দিকে যেতে দেয় না। bubbling stop হয়ে যায়।