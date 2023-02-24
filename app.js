
let result = document.getElementById('result')
let dice1_result = document.getElementById('dice1_result')
let dice2_result = document.getElementById('dice2_result')
dice1_result.innerHTML = Math.floor(Math.random() * 6) + 1;

dice2_result.innerHTML = Math.floor(Math.random() * 6) + 1;

// Player 1 win
if (dice1_result.innerHTML > dice2_result.innerHTML) {
    result.innerHTML = 'Player-1 Win!'
}


// Player 2 win

if (dice1_result.innerHTML < dice2_result.innerHTML) {
    result.innerHTML = 'Player-2 Win!'
}



// Draw
if (dice1_result.innerHTML == dice2_result.innerHTML) {
    result.innerHTML = 'Draw!'
}