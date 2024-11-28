import React, { useState } from 'react'
import './game.css'

function Game() {
    const [points, setPoints] = useState(0);
    const [word, setWord] = useState("");
    
  return <>
        <article className='gameContainer'>
            <div className="pointContainer">
                <h2>{points}</h2>
            </div>

            <div className="gamePlayContainer">
                <h1>WORD</h1>
                <input type="text" onChange={(e) => setWord(e.target.value)} value={word} />
            </div>

            <div className="gameOverContainer">

            </div>
        </article>
    </>
}

export default Game