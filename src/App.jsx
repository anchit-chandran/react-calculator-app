import './App.css';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Test from './components/Test';

import { useState } from 'react';
import CalcHistory from './components/CalcHistory';

const arithmetic_operators = ['+-', '%', '/', 'x', '-', '+'];


function App() {

  //STATE FOR NUMBERS ON SCREEN
  const [screen_nums, setScreen_Nums] = useState([0]);

  // state for x 
  const [x, setX] = useState(0);
  // state for arithmetic operator
  const [arithmetic_operator, set_arithmetic_operator] = useState('+');
  // state for y
  const [y, setY] = useState(0);

  // state for deciding if inputs are x or y
  const [inputtingX, toggleInputtingX] = useState(true);


  // STATE FOR PREVIOUS CALCULATIONS
  const [prevCals, addToPrevCalcs] = useState([
    {
      x: 0,
      y: 0,
      operator: '+',
      answer: 0,
      id: 0
    }
  ])



  // function which converts list of string nums into single int
  const convertStringListToInt = (string_list) => {
    return Number(string_list.join(''))
  }

  // function which saves screen nums to x wheb arithmetic operator was clicked
  const setMemoryForX = (text) => {
    set_arithmetic_operator(text)
    // save the current screen value into x
    setX(convertStringListToInt(screen_nums));
  }

  // function which saves screen nums to y if equals was clicked
  const setMemoryForY = (text) => {
    // save the current screen value into y
    setY(() => convertStringListToInt(screen_nums));

  }

  // function handling equals press
  const handleOnEquals = () => {

    const yAnswer = convertStringListToInt(screen_nums);

    setY(yAnswer);

    let answer;

    switch (arithmetic_operator) {
      case '+-':
        console.log('Unsure what to do')
        break;

      case '%':
        console.log('Unsure what to do')
        break;

      case '/':
        answer = x / yAnswer
        break;

      case 'x':
        answer = x * yAnswer
        break;

      case '-':
        answer = x - yAnswer
        break;

      case '+':
        answer = x + yAnswer
        break;
      default:
        console.log('Something has gone wrong with operator');
        break;
    }

    addToPrevCalcs(prev => [...prev, {
      x: x,
      y: yAnswer,
      operator: arithmetic_operator,
      answer: answer,
      id: prevCals.length,
    }])

    answer = answer.toString().split('')
    setScreen_Nums(answer)

    toggleInputtingX(true);
  }


  const handleClickForX = (text) => {
    // check if button press is an arithmetic operator
    if (arithmetic_operators.includes(text)) {

      setMemoryForX(text);
      // set toggle to inputting y
      toggleInputtingX(prev => !prev)
      // reset screen nums to 0
      setScreen_Nums([0])

    } else {
      switch (text) {
        case 'C':
          setScreen_Nums([0]);
          setX(0);
          setY(0);
          toggleInputtingX(true);
          break;

        case '=':
          handleOnEquals();
          break;

        default:
          if (screen_nums[0] === 0) {
            setScreen_Nums(screen_nums => {
              return [text]
            });
          } else {
            setScreen_Nums(screen_nums => {
              return [...screen_nums, text]
            });
          }
          break;
      }
    }
  }

  const handleClickForY = (text) => {

    setMemoryForY(screen_nums);


    switch (text) {
      case 'C':
        setScreen_Nums([0]);
        setX(0);
        setY(0);
        toggleInputtingX(true);
        break;

      case '=':
        handleOnEquals();
        break;

      default:
        if (screen_nums[0] === 0) {
          setScreen_Nums([text]);
        } else {
          setScreen_Nums(screen_nums => {
            return [...screen_nums, text]
          });
        }
        break;
    }

  }

  // handle button click function
  const handleOnClick = (text) => {
    inputtingX ? (handleClickForX(text)) : (handleClickForY(text));
  }

  // const handleSubmit = () => {

  //   console.log(prevCals)
  // }



  return (

    <>
      <h1>Anchit's Calculator App v1</h1>
      <div className='AppContainer'>

        <div className="App" >

          <Screen
            screen_nums={screen_nums}
          />
          <ButtonBox

            handleOnClick={handleOnClick}
          />

          {/* <button onClick={handleSubmit}>Test</button> */}

        </div>
        <CalcHistory prevCalcs={prevCals} />
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;