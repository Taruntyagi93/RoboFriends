import React from 'react';
import 'tachyons';
import './Cards.css';

const Card = ({name, email, id} ) => {
return(
    <div className = 'cards tc bg-light-green dib br3 pa3 ma2 grow  bw2 shadow-5' >
        <img alt = 'robots' src={`https://robohash.org/${id}?size=250x250`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);
}
export default Card;
