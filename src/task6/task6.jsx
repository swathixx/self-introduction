
import { useState } from 'react';
import './Task6.css';

function App() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = (currentBoard) => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }

        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';

        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);

        if (gameWinner) {
            setWinner(gameWinner);
        } else if (newBoard.every(cell => cell !== '')) {
            setWinner('Draw');
        } else {
            setIsXTurn(!isXTurn);
        }
    };

    const restartGame = () => {
        setBoard(Array(9).fill(''));
        setIsXTurn(true);
        setWinner(null);
    };

    return (
        <div className="game-container">
            <div className="game-card">
                <h1>XO Game</h1>
                <p className="subtitle">Tic-Tac-Toe Challenge</p>

                <h2 className="game-status">
                    {winner
                        ? winner === 'Draw'
                            ? "It's a Draw!"
                            : `Player ${winner} Wins!`
                        : `Player ${isXTurn ? 'X' : 'O'}'s Turn`}
                </h2>

                <div className="game-board">
                    {board.map((cell, index) => (
                        <button
                            key={index}
                            className={`square ${cell ? cell.toLowerCase() : ''}`}
                            onClick={() => handleClick(index)}
                            disabled={Boolean(cell) || Boolean(winner)}
                        >
                            {cell}
                        </button>
                    ))}
                </div>

                <button className="restart-btn" onClick={restartGame}>
                    Restart Game
                </button>
            </div>
        </div>
    );
}

export default App;
