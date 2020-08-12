import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.icone } />
            <img src={ props.icone1 } />
            <div>
                <h4>{ props.email }</h4>
                <h4>{ props.end }</h4>
            </div>
        </div>
    )
}

export default CardPequeno;
