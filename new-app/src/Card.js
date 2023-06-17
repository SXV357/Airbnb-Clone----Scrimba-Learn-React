import React from 'react';

export default function Card({openSpots, img, para1, para2, cost, para3}){
    return(
        <div className = "card-component">
            {openSpots === 0 && <div className = "card-component-badge">SOLD OUT</div>}
            <figure className = "card-component-image">
                <img className = "card-component-main-img" src = {img}></img>
            </figure>
            <div className = "card-component-text">
            <p className = "card-component-para1">{para1}</p>
            </div>
            <div className = "card-component-text2">
            <p className = "card-component-para2">{para2}</p>
            </div>
            <div className = "card-component-text3">
            <p className = "card-component-para3">From <span className = "bold">{cost}</span> {para3}</p>
            </div>
        </div>
    )
}