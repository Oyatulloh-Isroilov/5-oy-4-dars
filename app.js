const rnb = document.getElementsByClassName("randomNumberBlock");
const ranNum = document.getElementById("ranNum");
const btn = document.getElementById("btn");
function rn() {
  console.log(Math.floor(Math.random() * 21));
}
rn();

btn.addEventListener("click", function () {
  if (ranNum == rn) {
    alert("Kiritgan soningiz tog'ri");
  } else {
    alert("Bot o'ylagan soni kiritmadingiz");
  }
});
