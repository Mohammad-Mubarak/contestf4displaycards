import React from 'react'
import './App.css'
function Card({ name, id, symbol, i, image, current, volume }) {
    return (
            <div className="card">
                <img src={image} />
                <h2>{name}</h2>
                <p>Symbol: {symbol}</p>
                <p>Current Price: ${current}</p>
                <p>Total Volume: {volume} USDT</p>
            </div >
    )
}

export default Card