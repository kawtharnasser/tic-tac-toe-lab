/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
var board //represent the state of the squares on the board

var turn //track whose turn it is

var winner //represent if anyone has won yet

var tie //represent if the game has ended in a tie

/*------------------------ Cached Element References ------------------------*/
const squareElement = document.querySelectorAll('.sqr')
//output a list: [div 0, div 1, ..... , div 9 ]

const messageElement = document.querySelector('#message')
console.dir(messageElement)

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  //render()
}
/*----------------------------- Event Listeners -----------------------------*/
