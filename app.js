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
var board // represent the state of the squares on the board
var turn // track whose turn it is
var winner // represent if anyone has won yet
var tie // represent if the game has ended in a tie

board = ['', '', '', '', '', '', '', '', '']
turn = 'X'
winner = false
tie = false

/*------------------------ Cached Element References ------------------------*/
const squareElement = document.querySelectorAll('.sqr')
const messageElement = document.querySelector('#message')
const buttonElement = document.querySelector('#reset-btn')
/*-------------------------------- Functions --------------------------------*/
// the first function "the game initial state"
const init = () => {
  //no error
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false //
  tie = false
  render() //reset the board and the message
}

const updateBoard = () => {
  //no error
  board.forEach((square, inx) => {
    //the value in the html square will equal to the item in the board
    squareElement[inx].textContent = square
  })
}

const updateMessage = () => {
  //No error
  //create a message and put the output on the message element on html
  if (!tie && !winner) {
    messageElement.innerHTML = `Player ${turn}'s turn`
  } else if (!winner && tie) {
    messageElement.innerHTML = 'Game ended in a tie!'
  } else {
    messageElement.innerHTML = `Player ${turn} wins!`
  }
}

const render = () => {
  //no error
  //execute both update board and the message functions
  updateBoard()
  updateMessage()
}

const handleClick = (event) => {
  const squareIndex = event.target.id // Get the index from the clicked square
  if (board[squareIndex] !== '' || winner) return // Prevent click if square is filled or game is over

  placePiece(squareIndex) //place X or O when the player  click
  checkForWinner() //check if win or no
  checkForTie() // check if tie or no
  switchPlayerTurn() //switch players turn
  render()
}

const placePiece = (index) => {
  //no error
  board[index] = turn // Place the player's piece
}

const checkForWinner = () => {
  //option 2, no error
  winningCombos.forEach((combo) => {
    // [a,b,c] = winner compo, for example[0,1,2]
    const [a, b, c] = combo
    //     0, 1,, 3
    //    check if each position in the winning compo, have the same value, then return winner = true
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      winner = true
    }
  })
}

const checkForTie = () => {
  //no error
  tie = true

  if (winner) {
    tie = false
    return
  } else {
    board.forEach((square) => {
      if (square === '') {
        tie = false
        return
      }
    })
  }
}

const switchPlayerTurn = () => {
  //no error
  if (winner) {
    return
  } else {
    if (turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
  }
}

/*----------------------------- Event Listeners -----------------------------*/
squareElement.forEach((square, index) => {
  square.id = index

  square.addEventListener('click', handleClick) //activate handle-click function if player click
})
buttonElement.addEventListener('click', init)

// Starting the game
render()
