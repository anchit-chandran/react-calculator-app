import React from 'react';
import Button from './Button';

const ButtonBox = (props) => {

    const { handleOnClick } = props;

    // console.log(props)

    return (
        <div className='ButtonBoxContainer'>

            <Button
                buttonText='C'
                className='button'
                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='+-'
                className='button'
                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='%'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='/'
                className='button'

                handleOnClick={handleOnClick}
            />

            <Button
                buttonText='7'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='8'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='9'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='x'
                className='button'

                handleOnClick={handleOnClick}
            />

            <Button
                buttonText='4'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='5'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='6'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='-'
                className='button'

                handleOnClick={handleOnClick}
            />

            <Button
                buttonText='1'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='2'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='3'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='+'
                className='button'

                handleOnClick={handleOnClick}
            />

            <Button
                buttonText='0'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='.'
                className='button'

                handleOnClick={handleOnClick}
            />
            <Button
                buttonText='='
                className='button equals'

                handleOnClick={handleOnClick}
            />

        </div>
    )
}

export default ButtonBox;