import React from 'react';
import '../../styles/Card.scss';

const Card = ({title, price, description}) => {
    return (
        <div className="cards__container">
            <div className="cards__item">
                <h2 className="cards__title">{title}</h2>
                <p className="cards__price">{price} rub</p>
                <p className="cards__description">
                    {description}
                </p>
                <button className="cards__button">Add</button>
            </div>
        </div>
    )
        ;
};

export default Card;