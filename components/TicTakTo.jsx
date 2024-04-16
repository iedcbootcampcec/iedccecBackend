import React, { useState, useEffect } from 'react';

const PLAYER_X = 'X'; // Define the player markers
const GameState = {
  inProgress: 'inProgress',
  playerXWins: 'playerXWins',
  playerOWins: 'playerOWins',
  draw: 'draw'
};

function TicTacToe() {
  const winningCombinations = [
    //Rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  
    //Columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  
    //Diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [gameState, setGameState] = useState(GameState.inProgress);

  const checkWinner = () => {
    for (const { combo } of winningCombinations) {
      const [a, b, c] = combo;
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        return tiles[a]; // Return the winner ('X' or 'O')
      }
    }

    // Check for draw
    if (tiles.every(tile => tile !== null)) {
      return GameState.draw;
    }

    return null; // No winner yet
  };

  const handleTileClick = (index) => {
    if (!tiles[index] && gameState === GameState.inProgress) {
      const newTiles = [...tiles];
      newTiles[index] = getPlayerMarker();
      setTiles(newTiles);
    }
  };

  const getPlayerMarker = () => {
    return tiles.filter(tile => tile === PLAYER_X).length === tiles.filter(tile => tile === 'O').length
      ? PLAYER_X
      : 'O';
  };

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setGameState(GameState.inProgress);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      if (winner === GameState.draw) {
        setGameState(GameState.draw);
      } else {
        setGameState(winner === PLAYER_X ? GameState.playerXWins : GameState.playerOWins);
      }
    }
  }, [tiles]);

  return (
    <div className="bg-transparent w-full p-3  flex items-center justify-center flex-col">
      <span className='mb-4 text-3xl'>Tic Tac Toe</span>
      <div className="flex">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex flex-col">
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col;
              const borderStyle = {
                borderRight: row !== 2 ? '5px solid black' : 'none',
                borderBottom: col !== 2 ? '5px solid black' : 'none'
              };
              return (
                <div
                  key={index}
                  className="h-28 w-28 bg-transparent flex items-center justify-center"
                  style={borderStyle}
                  onClick={() => handleTileClick(index)}
                >
                  {tiles[index]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {gameState !== GameState.inProgress && (
        <div className=" mt-4 flex gap-2 items-center justify-center">
          {gameState === GameState.draw
            ? "It's a draw!"
            : `Player ${gameState === GameState.playerXWins ? 'X' : 'O'} wins!`}
          <button className="bg-gray-700 text-white px-4 py-2 mt-2" onClick={handleReset}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
