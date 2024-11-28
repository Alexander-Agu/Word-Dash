import React, { useState } from 'react'
import './game.css'
import Countdown from './Countdown';
import { words } from './words';

function Game() {
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState("");
    const [match, setMatch] = useState(words[0]);

    // Changes the match word randomly
    const changeMatch = () => {
        let x = Math.floor((Math.random() * 99) + 1)

        let randomWord = words[x]
        setMatch(randomWord)
    };
        if (match == word)  {
            changeMatch()
            setPoints(points + 1)
            setWord("")
        }
    const matchWords = () => {

    };
  return <>
        <article className='gameContainer'>
            <div className="pointContainer">
                {<Countdown />}
                <h2>{points}</h2>
            </div>

            <div className="gamePlayContainer">
                <h1>{match}</h1>
                <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
            </div>

            <div className="gameOverContainer">

            </div>
        </article>
    </>
}

export default Game