import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    if (number1 === '' || number2 === '') {
      setErrorMessage('Please enter both numbers.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(number1) || !/^-?\d*\.?\d+$/.test(number2)) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }

    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      const sum = parseFloat(number1) + parseFloat(number2);
      setResult(sum);
      setErrorMessage('');
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      const difference = parseFloat(number1) - parseFloat(number2);
      setResult(difference);
      setErrorMessage('');
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      const product = parseFloat(number1) * parseFloat(number2);
      setResult(product);
      setErrorMessage('');
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(number2) === 0) {
        setErrorMessage('Cannot divide by zero.');
      } else {
        const quotient = parseFloat(number1) / parseFloat(number2);
        setResult(quotient);
        setErrorMessage('');
      }
    }
  };

  return (
    <div className="calculator-container">
      <input type="text" placeholder='NUM 1' value={number1} onChange={(e) => setNumber1(e.target.value)} /> <br />
      <input type="text" placeholder='Num 2' value={number2} onChange={(e) => setNumber2(e.target.value)} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <br />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {result && (
        <div>
          <div>Result = {result}</div>
          <div style={{ color: 'green' }}>Success: Your result is shown above!</div>
        </div>
      )}
    </div>
  );
};

export default Calculator;