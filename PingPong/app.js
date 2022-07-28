const p1 = {
    score: 0,
    button: document.querySelector('#playerOne'),
    display: document.querySelector('#firstScore')
}
const p2 = {
    score: 0,
    button: document.querySelector('#playerTwo'),
    display: document.querySelector('#secondScore')
}

const reset = document.querySelector('#reset')
const playingTo = document.querySelector('#playingTo')

let gameOver = false;

playingTo.addEventListener('change', function () {
    restart();
})
reset.addEventListener('click', function () {
    restart();
})

p1.button.addEventListener('click', function () {
    addScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    addScore(p2, p1)
})


function restart() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

};

function addScore(player, opponent) {
    if (!gameOver) {
        player.score++;
        if (player.score === parseInt(playingTo.value)) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.display = true;

        }
        player.display.textContent = player.score;
    }
}




