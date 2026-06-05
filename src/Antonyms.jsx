import { useEffect, useState } from 'react';
import './Antonyms.css';

const PUZZLE_PAIRS = [
  ['frugal', 'wasteful'],
  ['altruistic', 'selfish'],
  ['practical', 'foolish'],
  ['rebel', 'conformist'],
  ['holy', 'secular'],
];

function shuffleWords(pairs) {
  const words = pairs.flat();

  for (let index = words.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [words[index], words[randomIndex]] = [words[randomIndex], words[index]];
  }

  return words;
}

function Antonyms() {
  return (
    <div className="Antonyms">
      <div className="Title">
        <h1>Antonyms</h1>
      </div>
      <Day />
      <MakeBoard />
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>
    </div>
  );
}

function Day() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <p>
        {month}/{day}/{year} | Puzzle Number: 1
      </p>
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}

function MakeBoard() {
  const [words] = useState(() => shuffleWords(PUZZLE_PAIRS));
  const [selectedWords, setSelectedWords] = useState([]);
  const [message, setMessage] = useState('Select two words to make a match.');
  const [correctPairs, setCorrectPairs] = useState([]);
  const [tries, setTries] = useState(3);

  const matchedWords = correctPairs.flat();
  const remainingWords = words.filter((word) => !matchedWords.includes(word));
  const hasWon = correctPairs.length === PUZZLE_PAIRS.length;
  const hasLost = tries === 0 && !hasWon;
  const canSubmit = selectedWords.length === 2 && !hasWon && !hasLost;

  const handleWordClick = (word) => {
    if (hasWon || hasLost) {
      return;
    }

    if (selectedWords.includes(word)) {
      setSelectedWords((current) => current.filter((selected) => selected !== word));
      return;
    }

    if (selectedWords.length < 2) {
      setSelectedWords((current) => [...current, word]);
    }
  };

  const checkAntonyms = () => {
    if (!canSubmit) {
      return;
    }

    const isAntonym = PUZZLE_PAIRS.some(
      ([first, second]) =>
        (first === selectedWords[0] && second === selectedWords[1]) ||
        (first === selectedWords[1] && second === selectedWords[0]),
    );

    if (isAntonym) {
      setCorrectPairs((current) => [...current, selectedWords]);
      setMessage('Correct. Keep going.');
    } else {
      setTries((current) => Math.max(current - 1, 0));
      setMessage('Not a pair. Try another match.');
    }

    setSelectedWords([]);
  };

  return (
    <div>
      <div className="grid">
        {remainingWords.map((word) => (
          <button
            key={word}
            className={`button ${selectedWords.includes(word) ? 'selected' : ''}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="correct-incorrect">
        <p>{hasWon ? 'Puzzle complete.' : hasLost ? 'No tries left.' : message}</p>
      </div>
      <div className="tries-indicator" aria-label={`${tries} tries remaining`}>
        {Array.from({ length: tries }).map((_, index) => (
          <div key={index} className="dot" />
        ))}
      </div>
      <div className="submit-button-div">
        <button className="Submit" disabled={!canSubmit} onClick={checkAntonyms}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Antonyms;
