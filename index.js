var random1 = Math.floor(Math.random() * 6) + 1; // generates no. from 1-6

var ranadomImage = "dice" + random1 + ".png"; // selects image according to random1 in randomImage

var randomImageSource = "images/" + ranadomImage; // Images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var random2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (random1 > random2) {
    document.querySelector("h1").textContent = "Player 1 Won"
} else if(random2 > random1) {
    document.querySelector("h1").textContent = "Player 2 Won"
} else {
    document.querySelector("h1").textContent = "Its a tie"
}
