/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
/*---------------------------- Variables (state) ----------------------------*/
var board //represent the state of the squares on the board

var turn //track whose turn it is

var winner //represent if anyone has won yet

var tie //represent if the game has ended in a tie

board = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
turn = 'X'
winner = false
tie = false

/*------------------------ Cached Element References ------------------------*/
const squareElement = document.querySelectorAll('.sqr')
//output a list: [div 0, div 1, ..... , div 9 ]
console.dir(squareElement)
const messageElement = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
const render = () => {
  updateBoard()
  updateMessage()
} //end of render()

const updateBoard = () => {
  board.forEach((square, inx) => {
    squareElement[inx].innerHTML = square
    //change the square color depending on the value
    let squareItem = squareElement[inx].innerHTML
    if (squareItem === 'X') {
      squareElement[inx].style.backgroundColor = 'red'
      squareElement[inx].style.color = 'white'
    } else if (squareItem === 'O') {
      squareElement[inx].style.backgroundColor = 'blue'
      squareElement[inx].style.color = 'white'
    } else {
      squareElement[inx].style.backgroundColor = 'darkgrey'
      squareElement[inx].style.color = 'black'
    }
  }) //foreach end
} //end updateBoard()
const updateMessage = () => {
  if (winner === false && tie === false) {
    render()
  } else if (winner === false && tie === true) {
    render()
  } else {
    render
  }
} // end updateMessage()

const init = () => {
  render()
  updateBoard()
} //end of init()
/*----------------------------- Event Listeners -----------------------------*/
updateBoard()
