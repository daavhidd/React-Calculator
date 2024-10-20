import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const CalculatorComponent = ({ closeCalc }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
  if (value === '=') {
    try {
      const evalResult = evaluate(input).toString();
      setResult(evalResult.length > 9 ? evalResult.slice(0, 9) : evalResult);
    } catch {
      setResult('Error');
    }
  } else if (value === 'C') {
    setInput('');
    setResult('');
  } else if (value === 'DEL') {
    setInput((prevInput) => prevInput.slice(0, -1));
  } else {
    if (input.length < 9) {
      setInput((prevInput) => prevInput + value);
    }
  }
};

  const buttons = [
    '+', '-', '*', '/', 
    '7', '8', '9', 'C', 
    '4', '5', '6', 'DEL', 
    '1', '2', '3', '=', 
    '0', '.'
  ];

  return (
    <div className='modal-overlay'>
        <div className='calcmodal zoomsin'>
            <div className="calculator">
              <div className="calculator-display">
                  <div>{input || '0'}</div>
                  <div>{result}</div>
              </div>
              <div className="calculator-buttons">
                  {buttons.map((button) => (
                  <button 
                      key={button} 
                      onClick={() => handleButtonClick(button)} 
                      className={`calculator-button ${isNaN(button) && button !== '.' ? 'operation' : ''}`}
                  >
                      {button}
                  </button>
                  ))}
              </div>
            </div>
            {/* <button type="button" className="btn text-white form-control mt-3 py-1"  
              style={{
                  backgroundColor:"#57A9F4",
                  border: "1px solid #2C66A2",
                  borderBottom:"5px solid #2C66A2",
                  fontWeight: "600"
              }} 
              onClick={closeCalc}
            >
                Close
            </button> */}
        </div>
    </div>
    

  );
};

export default CalculatorComponent;