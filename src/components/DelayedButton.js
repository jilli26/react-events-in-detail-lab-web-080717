import React from 'react';
import ReactDOM from 'react-dom';

class DelayedButton extends React.Component {

  handleClick = (event, x) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
      this.props.delay
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    )
  }
}

export default DelayedButton
