import React, { Component } from 'react';
import './Counter.sass';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNumber: 0,
    };
  }

  onClickPlusBtn = () => {
    this.setState((prevState) => ({ showNumber: prevState.showNumber + 1 }));
  }

  onClickResetBtn = () => {
    this.setState({ showNumber: 0 });
  };

  onClickMinusBtn = () => {
    this.setState((prevState) => ({ showNumber: prevState.showNumber - 1 }));
  }

  render() {
    const { showNumber } = this.state;
    return (
      <div className="container">
        <div className="number">{ showNumber }</div>
        <div className="buttonsBlock">
          <button
            onClick={() => {
              this.setState(this.onClickPlusBtn);
            }}
            type="button"
            className="plus"
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState(this.onClickResetBtn);
            }}
            type="button"
            className="reset"
          >
            reset
          </button>
          <button
            onClick={() => {
              this.setState(this.onClickMinusBtn);
            }}
            type="button"
            className="minus"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
