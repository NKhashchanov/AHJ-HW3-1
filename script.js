"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, [{
    key: "startGame",
    value: function startGame() {
      var hole = document.querySelectorAll('.hole');
      var tempArray = [];

      for (var i = 0; i < 16; i++) {
        if (!hole[i].classList.contains('active')) {
          tempArray.push(i);
        } else {
          hole[i].classList.remove('active');
          hole[i].innerHTML = '';
        }
      }

      var index = Math.floor(Math.random() * 15),
          imageHole = tempArray[index];
      hole[imageHole].classList.add('active');
      hole[imageHole].innerHTML = '<img src=./img/goblin.png>';
    }
  }]);

  return Game;
}();

var Play =
/*#__PURE__*/
function () {
  function Play() {
    _classCallCheck(this, Play);
  }

  _createClass(Play, [{
    key: "playGame",
    value: function playGame(arg) {
      var hole = document.querySelectorAll('.hole');
      var dead = document.querySelector('.dead');
      var lost = document.querySelector('.lost');
      var kill = 0;
      var miss = 0;
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
        });
      });
    }
  }]);

  return Play;
}();

var startGame = new Game();
var gamePlay = new Play();
var start = setInterval(startGame.startGame, 1000);
var game = gamePlay.playGame(start);