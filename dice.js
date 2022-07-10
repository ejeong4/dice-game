//Initialize Variables
const h1 = document.querySelector('h1');
const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');

//Get Random Number
function getNum() {
    let rand = Math.floor((Math.random() * 6) + 1);
    return rand;
}

//Display winner and images
function refresh(a, b) {
    //Initialize variables
    let num1 = getNum();
    let num2 = getNum();

    //Compare Numbers to display winner
    if (num1 > num2) {
        h1.textContent = "Player 1 Wins!";
    } else if (num2 > num1) {
        h1.textContent = "Player 2 Wins!";
    }

    //Get image url
    let image1 = `images/dice${num1}.png`;
    let image2 = `images/dice${num2}.png`;

    //Set src attribute for parameters
    a.setAttribute('src', image1);
    b.setAttribute('src', image2);
}

//Enter parameters
refresh(dice1, dice2);