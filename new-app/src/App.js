import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import CardData from './Data';

export default function App(){
    const cardData = CardData.map(card => {
        return <Card key = {card} {...card}/>
    })
    return(
        <div>
            <Navbar />
            <Hero />
            <div className = "card-container">
               {cardData}
            </div>
        </div>
    )
}
