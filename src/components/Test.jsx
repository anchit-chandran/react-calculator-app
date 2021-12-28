import React, {useState} from 'react'

const Test = (props) => {

    const [testX, setTestX] = useState(0)
    const [testY, setTestY] = useState(0)

    const [buttonClicked, setButtonClick] = useState(false);

    const handleClick = () => {
        setButtonClick(prev => !prev);
        setTestX(prev => prev+1)
        setTestY(prev=>prev+1)

        console.log(setButtonClick)
        console.log(testX, testY)
    }


    console.log(buttonClicked)

    return (
        <div>
            <button onClick={handleClick} style={{width: "200px", height: '200px'}}>Equals</button>
        </div>
    )
}

export default Test;