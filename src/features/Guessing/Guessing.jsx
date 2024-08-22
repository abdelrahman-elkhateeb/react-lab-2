import { useEffect, useState } from "react";

function Guessing() {
  const [secretNumber, setSecretNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(function () {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  function handleGuessInput(e) {
    setGuess(Number(e.target.value));
  }

  function handleGuessSubmit(e) {
    e.preventDefault();

    if (gameOver) {
      setMessage("Game over! Please refresh to play again.");
      return;
    }

    if (guess < 1 || guess > 100 || isNaN(guess)) {
      setMessage("Please enter a valid number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (guess === secretNumber) {
      setMessage("Congratulations! You guessed the correct number!");
      setGameOver(true);
    } else if (attempts + 1 >= 5) {
      setMessage(`You lose! The correct number was ${secretNumber}.`);
      setGameOver(true);
    } else if (guess < secretNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  }

  return (
    <div className="mb-5 rounded-xl bg-slate-900 p-2 text-center text-white">
      <h1>Guessing Game</h1>
      <h2>You tried {attempts} times</h2>
      <p>{message}</p>
      <p>Guess the number between 1 and 100</p>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleGuessSubmit}
      >
        <input
          type="number"
          value={guess}
          className="text-black"
          onChange={handleGuessInput}
          disabled={gameOver}
        />
        <button
          className="mt-2 rounded bg-sky-300 p-2"
          type="submit"
          disabled={gameOver}
        >
          Guess
        </button>
      </form>
      {gameOver && (
        <p className="mt-4">
          Game over! Please refresh the page to play again.
        </p>
      )}
    </div>
  );
}

export default Guessing;
