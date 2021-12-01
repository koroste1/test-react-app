import React, {useState} from 'react';

const HeaderCart = () => {
    const [count, setCount] = useState(null);

    function addToCart() {
        setCount(prevState => prevState + 1);
    }

    function removeFromCart() {
        setCount(prevState => prevState - 1)
        if (count <= 1) setCount(null);

    }

    return (
        <div className="cart">
            <h1 className="cart__count">{count}</h1>
            <button className="cart__button" onClick={addToCart}>+</button>
            <button className="cart__button" onClick={removeFromCart}>-</button>
        </div>
    );
};

export default HeaderCart;