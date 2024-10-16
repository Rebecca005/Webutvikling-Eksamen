import React, { useState } from "react";

const GuessingGame = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 20) + 1
  );
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const messages = [
    "You guessed it! Fun Fact: Formula 1 racers must have a super licensce to compete in the championship. ",
    "Amazing! Fun Fact: Formula 1 is one of the most expensive sports in the world! In fact, each vehicle has an estimated value of over $7 million. ",
    "Great job! Fun Fact: In 2019, the Red Bull team of Max Verstappen set the record for the fastest pit stop in history, at 1.82 seconds.",
  ];

  const handleChange = (e) => {
    setGuess(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (+guess === secretNumber) {
      setMessage(messages[correctGuesses % messages.length]);
      setCorrectGuesses(correctGuesses + 1);
      setSecretNumber(Math.floor(Math.random() * 20) + 1);
    } else if (+guess < secretNumber) {
      setMessage("Too low. Keep trying!");
    } else {
      setMessage("Too high. Try again!");
    }
  };
  return (
    <section className="shadow p-2 m-1 rounded text-center bg-light text-danger texts">
      <div>
        <h2>Guess the secret number and recive a fun fact in return!</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" value={guess} onChange={handleChange} />
          <br />
          <input class="button" type="submit" value="Guess" />
        </form>
        <p>{message}</p>
      </div>
    </section>
  );
};
export default GuessingGame;
