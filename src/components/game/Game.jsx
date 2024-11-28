import React, { useEffect, useRef, useState } from 'react'
import './game.css'
import Countdown from './Countdown';
import { words } from './words';

function Game() {
    // HOOKS
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState("");
    const [match, setMatch] = useState(words[0]);
    const [timer, setTimer] = useState("00");
    const ref = useRef(null)

    // Changes the match word randomly
    const changeMatch = () => {
        let x = Math.floor((Math.random() * 98) + 1);

        setMatch(words[x])
    };



    // Set the seconds 
    const getRemainingTime = (deadline) => {
        let total = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60); // Correctly calculate seconds
        return { total, seconds };
    };

    const startTimer = (deadline) => {
        let { total, seconds } = getRemainingTime(deadline);

        if (total >= 0) {
        // Format seconds to always have two digits
        setTimer(seconds > 9 ? seconds : "0" + seconds);
        } else {
        clearInterval(ref.current); // Clear timer when deadline is reached
        }
    };

    const clearTime = (deadline) => {
    setTimer("10");

    if (ref.current) clearInterval(ref.current); // Clear any existing intervals
    const id = setInterval(() => {
        startTimer(deadline);
    }, 1000);
    ref.current = id;
    };

    const getDeadLine = () => {
    let deadLine = new Date();
    deadLine.setSeconds(deadLine.getSeconds() + 10);
    return deadLine; // Ensure this returns the deadline
    };

    useEffect(() => {
    clearTime(getDeadLine());

    }, []);

    // If the player inserts the matching word
    if (match == word)  {
        changeMatch()
        setPoints(points + 1)
        setWord("")
        clearTime(getDeadLine());
    }

    else if (timer == "00") {
        changeMatch()
        clearTime(getDeadLine());
    }
  return <>
        <article className='gameContainer'>
            <div className="pointContainer">
                <h2>{timer}</h2>
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