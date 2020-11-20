import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px 0;
`;

const numberArray = Array.from({ length: 10 }, (_, idx) => idx);
const operatorArray = ['+', '-', '*', '/'];

export default function Home() {
  const [baseNum, setBaseNum] = React.useState(0);
  const [current, setCurrent] = React.useState(null);
  const [operator, setOperator] = React.useState('+');

  const handleClear = React.useCallback(() => {
    setBaseNum(0);
    setCurrent(null);
    setOperator(null);
  }, [setBaseNum, setCurrent, setOperator]);

  const handleCalculate = React.useCallback(() => {
    switch (operator) {
      case '+': {
        setBaseNum(baseNum + current);
        break;
      }
      case '-': {
        setBaseNum(baseNum - current);
        break;
      }
      case '*': {
        setBaseNum(baseNum * current);
        break;
      }
      case '/': {
        setBaseNum(baseNum / current);
        break;
      }
      default: {
        setBaseNum(current ?? baseNum);
      }
    }
    setCurrent(null);
    setOperator(null);
  }, [current, operator, handleClear]);

  return (
    <Root>
      <div className="screen">{current ?? baseNum}</div>
      <div className="number-pad">
        {numberArray.map((num) => (
          <button
            key={num}
            onClick={() => {
              if (current) setCurrent(current * 10 + num);
              else setCurrent(num);
            }}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="operator-pad">
        {operatorArray.map((op) => (
          <button
            key={op}
            onClick={() => {
              if (current && !operator) {
                setBaseNum(current);
                setCurrent(null);
              }
              setOperator(op);
            }}
          >
            {op}
          </button>
        ))}
        <button onClick={() => handleCalculate()}>=</button>
        <button onClick={() => handleClear()}>clear</button>
      </div>
      <div>base: {baseNum}</div>
      <div>current: {current}</div>
      <div>operator: {operator}</div>
    </Root>
  );
}
