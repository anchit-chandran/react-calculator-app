import React from 'react';

const Screen = (props) => {

    const {screen_nums} = props;
    

    return (
        <div className='ScreenContainer'>
            <div className='screenText'>{screen_nums}</div>
        </div>
    )
}

export default Screen;