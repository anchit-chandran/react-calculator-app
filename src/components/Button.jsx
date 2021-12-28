import React from 'react';

const Button = (props) => {

    const { buttonText, handleOnClick } = props;
    let equalsClass = '';

    buttonText === '=' ? equalsClass = ' equals' : equalsClass = ''
    //console.log(handleOnClick)
    return (
            <button 
            className={`ButtonContainer ${equalsClass}`}
            onClick={() => handleOnClick(buttonText)}
            >
            
            {buttonText}
            
            </button>
    )
}

export default Button;