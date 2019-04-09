class Game {
  constructor() {
  }

  startGame() {
    const hole = document.querySelectorAll('.hole');
    let tempArray = [];
    for (let i = 0; i < 16; i++) {
      if (!hole[i].classList.contains('active')) {
        tempArray.push(i);
      } else {
        hole[i].classList.remove('active');
        hole[i].innerHTML = '';
      }
    }
    let index = Math.floor(Math.random() * 15),
        imageHole = tempArray[index];
    hole[imageHole].classList.add('active');
    hole[imageHole].innerHTML = '<img src=./img/goblin.png>';
  }
}

class Play {
  constructor() {
  }

  playGame(arg) {
    let hole = document.querySelectorAll('.hole');
    let dead = document.querySelector('.dead');
    let lost = document.querySelector('.lost');
    let kill = 0;
    let miss = 0;
    hole.forEach(function (el) {
      el.addEventListener('click', function () {
        if (el.className === 'hole active') {
          kill++;
          dead.innerHTML = kill;
        } else {
          miss++;
          lost.innerHTML = miss;
        }
        if (kill === 10) {
          alert('Вы победили');
          kill = 0;
          miss = 0;
          clearInterval(arg);
        }
        if (miss === 5) {
          alert('Вы проиграли');
          kill = 0;
          miss = 0;
          clearInterval(arg);
        }
      })
    });
  }
}

let startGame = new Game();
let gamePlay = new Play();
let start = setInterval(startGame.startGame, 1000);
let game = gamePlay.playGame(start);

