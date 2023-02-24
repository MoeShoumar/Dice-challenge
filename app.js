
let result = document.getElementById('result')
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')

let number_generated = Math.floor(Math.random() * 6) + 1;
let result_D1 = number_generated
// result generator for 2nd dice
let number_generated_2 = Math.floor(Math.random() * 6) + 1;
let result_D2 = number_generated_2

// Dice-1
if (result_D1 == 1) {
    dice1.innerHTML = '<img src= "assets/1.png">';
}
else if (result_D1 == 2) {
    dice1.innerHTML = '<img src= "assets/2.png">';
}
else if (result_D1 == 3) {
    dice1.innerHTML = '<img src= "assets/3.png">';
}
else if (result_D1 == 4) {
    dice1.innerHTML = '<img src= "assets/4.png">';
}
else if (result_D1 == 5) {
    dice1.innerHTML = '<img src= "assets/5.png">';
}
else {
    dice1.innerHTML = '<img src= "assets/6.png">';
}
// Dice-2
if (result_D2 == 1) {
    dice2.innerHTML = '<img src= "assets/1.png">';
}
else if (result_D2 == 2) {
    dice2.innerHTML = '<img src= "assets/2.png">';
}
else if (result_D2 == 3) {
    dice2.innerHTML = '<img src= "assets/3.png">';
}
else if (result_D2 == 4) {
    dice2.innerHTML = '<img src= "assets/4.png">';
}
else if (result_D2 == 5) {
    dice2.innerHTML = '<img src= "assets/5.png">';
}
else if (result_D2 == 6) {
    dice2.innerHTML = '<img src= "assets/6.png">';
}

// Player 1 win
if (result_D2 > result_D1) {
    result.innerHTML = '🤩Player-1 Win!'
}


// Player 2 win

if (result_D2 < result_D1) {
    result.innerHTML = 'Player-2 Win!🤩'
}



// Draw
if (result_D2 == result_D1) {
    result.innerHTML = 'Draw!'
}