import React, { useState } from 'react';
import "./App.css"
export default function App(props) {
  const [carrierDisplay, setCarrierDisplay] = useState('');
  const [mainDisplay, setMainDisplay] = useState('');
  const [operator, setOperator] = useState('');
  const handleNumberClick = e => {
    setMainDisplay(mainDisplay.concat(e.target.name));
  };
  const handleOperatorClick = e => {
    if (carrierDisplay === '' && mainDisplay === '') {
      return;
    }
    let val = mainDisplay;

    if (operator !== '' && mainDisplay !== '') {
      calculate();
      setCarrierDisplay(val.concat(e.target.name));
      setMainDisplay('');
      setOperator(e.target.name);
      return;
    } else if (operator !== '') {
    }
    if (mainDisplay === '') {
      val = carrierDisplay.slice(0, -1);
    }

    setOperator(e.target.name);
    setCarrierDisplay(val.concat(e.target.name));
    setMainDisplay('');
  };
  const deleteNum = e => {
    setMainDisplay(mainDisplay.slice(0, -1));
  };
  const clear = () => {
    setCarrierDisplay('');
    setMainDisplay('');
    setOperator('');
  };

  const calculate = () => {
    try {
      let val = eval(carrierDisplay.concat(mainDisplay)).toString();
      setMainDisplay('');
      setCarrierDisplay(val);
      setOperator('');
    } catch (err) {
      setMainDisplay('Error');
    }
  };

  return (
      <div>
        <div className='display'>
          <input
              type='text'
              value={carrierDisplay}
              className='mini-display handler-display'
              disabled
          />
          <input
              type='text'
              value={mainDisplay}
              className='mini-display result-display'
              disabled
          />
        </div>

        <div className='main-grid'>
          <div className='keypad'>
            <button name='7' onClick={handleNumberClick}>
              7
            </button>
            <button name='8' onClick={handleNumberClick}>
              8
            </button>
            <button name='9' onClick={handleNumberClick}>
              9
            </button>
            <button className='highlight' name='*' onClick={handleOperatorClick}>
              *
            </button>
            <button name='4' onClick={handleNumberClick}>
              4
            </button>
            <button name='5' onClick={handleNumberClick}>
              5
            </button>
            <button name='6' onClick={handleNumberClick}>
              6
            </button>
            <button className='highlight' name='-' onClick={handleOperatorClick}>
              -
            </button>
            <button name='1' onClick={handleNumberClick}>
              1
            </button>
            <button name='2' onClick={handleNumberClick}>
              2
            </button>
            <button name='3' onClick={handleNumberClick}>
              3
            </button>
            <button className='highlight' name='+' onClick={handleOperatorClick}>
              +
            </button>
            <button className='clear' onClick={deleteNum}>
              {'<='}
            </button>
            <button name='.' onClick={handleNumberClick}>
              .
            </button>
            <button name='0' onClick={handleNumberClick}>
              0
            </button>

            <button className='highlight' name='/' onClick={handleOperatorClick}>
              /
            </button>
          </div>
          <div className='last-row-grid'>
            <button className='clear last-row' onClick={clear} id='clear'>
              C
            </button>
            <button className='equal last-row' onClick={calculate} id='result'>
              =
            </button>
          </div>
        </div>
      </div>
  );
}
