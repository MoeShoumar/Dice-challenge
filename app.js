
let result = document.getElementById('result')
let dice1 = document.getElementById('dice1')
let dice2 = document.getElementById('dice2')

let number_generated = 1
let number_generated_2 = Math.floor(Math.random() * 6) + 1;
let result_D1 = number_generated
let result_D2 = number_generated_2

if (result_D1 == 1) {
    dice1.innerHTML = '<img src= "assets/1.png">';
}
else if

// // Player 1 win
// if (dice1_result.innerHTML > dice2_result.innerHTML) {
//     result.innerHTML = 'Player-1 Win!'
// }


// // Player 2 win

// if (dice1_result.innerHTML < dice2_result.innerHTML) {
//     result.innerHTML = 'Player-2 Win!'
// }



// // Draw
// if (dice1_result.innerHTML == dice2_result.innerHTML) {
//     result.innerHTML = 'Draw!'
// }