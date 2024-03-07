import { useState, useEffect } from 'react';
import './Antonyms.css';

function Antonyms() {
  const [tries, setTries] = useState(3);

  const handleAntonymCheck = (isCorrect) => {
    if (!isCorrect) {
      setTries(prev => prev - 1);
    }
    // Add more logic if needed, like resetting the game if tries reach 0
  };

  return (
    <div className="Antonyms">
      <div className="Title">
        <h1>Antonyms (alpha)</h1>
      </div>
      <Day />
      <MakeBoard />
      <div className="tries-indicator">
        {Array.from({ length: tries }).map((_, idx) => (
          <div key={idx} className="dot"></div>
        ))}
      </div>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>
    </div>
  );
}

function Day(){
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());  // Update the date/time every second
    }, 1000);

    return () => {
      clearInterval(timer);  // Clean up the interval when the component unmounts
    };
  }, []);


  //Extract components
  const day = now.getDate();
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  //Get Time Components
  let hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()


  let formattedSeconds = seconds.toString().padStart(2,'0')
  let formattedMinutes = minutes.toString().padStart(2,'0')

  return (
    <div>
      <p>{month}/{day}/{year} | Puzzle Number: 0</p>
      <p>{hours}:{formattedMinutes}:{formattedSeconds}</p>
    </div>
  )
}

const antonymsPairs = [
  ["frugal", "careless"],
  ["altruistic", "selfish"],
  ["practical", "foolish"],
  ["rebel", "complacent"],
  ["holy"],
];



function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const shuffledWords = shuffle(antonymsPairs.flat());



function MakeBoard() {
  const [selectedWords, setSelectedWords] = useState([]);
  const [makeGuess, setMakeGuess] = useState("");
  const [correctPairs, setCorrectPairs] = useState([]);

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(prevWords => prevWords.filter(w => w !== word));
    } else if (selectedWords.length < 2) {
      setSelectedWords(prevWords => [...prevWords, word]);
    }
  };

  const checkAntonyms = (selected) => {
    const isAntonym = antonymsPairs.some(
      (pair) =>
        (pair[0] === selected[0] && pair[1] === selected[1]) ||
        (pair[0] === selected[1] && pair[1] === selected[0])
    );

    if (isAntonym) {
      setMakeGuess("Correct! They are antonyms.");
      setCorrectPairs(prevPairs => [...prevPairs, selected]);
    } else {
      setMakeGuess("Incorrect. Try again.");
    }
    setSelectedWords([]);
  };

  const remainingWords = shuffledWords.filter(word => !correctPairs.flat().includes(word));

  return (
    <div>
      <div className="grid">
        {remainingWords.map((word, idx) => (
          <button
            key={idx}
            className={`button ${selectedWords.includes(word) ? 'selected' : ''}`}
            onClick={() => handleWordClick(word)}
          >
            {word}
          </button>
        ))}
      </div>
      <div className="correct-incorrect">
        <p>{makeGuess}</p>
      </div>
      <div className="submit-button-div">
        <button className='Submit' onClick={() => checkAntonyms(selectedWords)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Antonyms;
