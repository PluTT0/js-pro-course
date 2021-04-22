import React, { Component } from 'react';
import './Counter.sass';
import CounterContainer from './CounterContainer';

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
      <CounterContainer 
        showNumber={showNumber}
        onClickMinusBtn={this.onClickMinusBtn}
        onClickPlusBtn={this.onClickPlusBtn}
        onClickResetBtn={this.onClickResetBtn}
      />
    );
  }
}

export default Counter;
