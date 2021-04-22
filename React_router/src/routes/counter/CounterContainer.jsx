import React from 'react';

const CounterContainer = ({showNumber, onClickMinusBtn, onClickPlusBtn, onClickResetBtn}) => {
  
  return (
    <div className="counterContainer">
      <div className="countNumber">{ showNumber }</div>
      <div className="buttonsBlock">
        <button
          onClick={onClickPlusBtn}
          type="button"
          className="plus button"
        >
          +
        </button>
        <button
          onClick={onClickResetBtn}
          type="button"
          className="reset button"
        >
          reset
        </button>
        <button
          onClick={onClickMinusBtn}
          type="button"
          className="minus button"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default CounterContainer;