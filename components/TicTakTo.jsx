import React, { useState, useEffect } from 'react';
import Image from "next/image"
import X from "../images/X.png"; // Import the X image
import O from "../images/O5.png"; 

const PLAYER_X = 'X'; // Define the player marker
const PLAYER_O = 'O'; // Define the system marker
const GameState = {
  inProgress: 'inProgress',
  playerXWins: 'playerXWins',
  playerOWins: 'playerOWins',
  draw: 'draw'
};

function TicTacToe() {
  const winningCombinations = [
    // Rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  
    // Columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  
    // Diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

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
    if (!tiles[index] && gameState === GameState.inProgress && isPlayerTurn) {
      const newTiles = [...tiles];
      newTiles[index] = PLAYER_X;
      setTiles(newTiles);
      setIsPlayerTurn(false);
    }
  };

  const getRandomMove = (tiles) => {
    const availableMoves = tiles
      .map((tile, index) => (tile === null ? index : null))
      .filter(index => index !== null);
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const findWinningMove = (tiles, player) => {
    for (const { combo } of winningCombinations) {
      const [a, b, c] = combo;
      const values = [tiles[a], tiles[b], tiles[c]];
      if (values.filter(value => value === player).length === 2 && values.includes(null)) {
        return combo[values.indexOf(null)];
      }
    }
    return null;
  };

  const findBlockingMove = (tiles) => findWinningMove(tiles, PLAYER_X);

  const findSetupMove = (tiles) => {
    for (const { combo } of winningCombinations) {
      const [a, b, c] = combo;
      const values = [tiles[a], tiles[b], tiles[c]];
      if (values.filter(value => value === PLAYER_O).length === 1 && values.filter(value => value === null).length === 2) {
        return combo[values.indexOf(null)];
      }
    }
    return null;
  };

  const getSystemMove = (tiles) => {
    const winningMove = findWinningMove(tiles, PLAYER_O);
    if (winningMove !== null) return winningMove;

    const blockingMove = findBlockingMove(tiles);
    if (blockingMove !== null) return blockingMove;

    const setupMove = findSetupMove(tiles);
    if (setupMove !== null) return setupMove;

    return getRandomMove(tiles);
  };

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setGameState(GameState.inProgress);
    setIsPlayerTurn(true);
  };

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      if (winner === GameState.draw) {
        setGameState(GameState.draw);
      } else {
        setGameState(winner === PLAYER_X ? GameState.playerXWins : GameState.playerOWins);
      }
    } else if (!isPlayerTurn) {
      const systemMove = getSystemMove(tiles);
      if (systemMove !== null) {
        const newTiles = [...tiles];
        newTiles[systemMove] = PLAYER_O;
        setTiles(newTiles);
        setIsPlayerTurn(true);
      }
    }
  }, [tiles, isPlayerTurn]);

  return (
    <div className="bg-transparent w-full p-3 flex items-center justify-center flex-col">
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
                  {tiles[index] === PLAYER_X ? (
    <Image src={X} alt="x" className="" />
  ) : tiles[index] === PLAYER_O ? (
    <Image src={O} alt="ocrf" className="h-10 w-10 text-black"  />
  ) : (
    tiles[index]
  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {gameState !== GameState.inProgress && (
        <div className="mt-4 flex gap-2 items-center justify-center">
          {gameState === GameState.draw
            ? "It's a draw!"
            : gameState === GameState.playerXWins
              ? "You won!"
              : "Better luck next time!"}
          <button className="bg-gray-700 text-white px-4 py-2 mt-2" onClick={handleReset}>
            Play Again
          </button>
        </div>
      )}
      
    </div>
  );
}

export default TicTacToe;
