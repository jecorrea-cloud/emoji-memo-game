import './Card.css';

import React from 'react'

export default function Card({Card}) {
    return (
        <div className={`card-inner ${Card.flipped && 'card.flipped'}`}>
        <div className="card-front">
            
        </div>

        <div className="card-back">
            {Card.emoji}
        </div>
            
        </div>
    )
}
