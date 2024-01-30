

var dice = document.getElementById("dice");
var result = document.getElementById("result");

dice.addEventListener("click", roll);

function roll() {
    var randomNum = Math.floor(Math.random() * 6) + 1;
    var diceImg = document.querySelector("#dice img");
    diceImg.src = "IMG/" + randomNum + ".png";

    result.innerHTML = randomNum;
}


