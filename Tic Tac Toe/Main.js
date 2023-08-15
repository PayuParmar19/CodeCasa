const Display = document.querySelector('.status');

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const Message = () => `Player ${currentPlayer} has won!`;
const WriteMessage = () => `It's Tie!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

Display.innerHTML = currentPlayerTurn();

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {   
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('cell-index')
        );
    
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
   
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

    const Conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const Condition = Conditions[i];
            let a = gameState[Condition[0]];
            let b = gameState[Condition[1]];
            let c = gameState[Condition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }
    if (roundWon) {
        Display.innerHTML = Message();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        Display.innerHTML = WriteMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    Display.innerHTML = currentPlayerTurn();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    Display.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
}    
