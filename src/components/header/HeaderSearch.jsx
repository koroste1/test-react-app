import React, {useState} from 'react';

const HeaderSearch = () => {
    const [label, setLabel] = useState('Search');
    const [value, setValue] = useState('Find');

    function addLabel(event) {
        setValue(event.target.value);
        setLabel(event.target.value);
    }

    return (
        <form className="header__form form">
            <div className="form__search">
                <label htmlFor="search" className="form__label">{label}</label>
                <input type="text" id="search" value={value} className="form__input" onChange={addLabel}/>
            </div>
        </form>
    );
};

export default HeaderSearch;