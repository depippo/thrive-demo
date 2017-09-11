import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markRead } from '../actions/checkbox';

export class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      read: false    }
    }

    handleClick = event => {
      event.preventDefault();
      // this.props.markRead(this);
      this.setState({
        read: true
     })
  }

  render() {
    const read = this.state.read;
    if (read) {
      return (
        <span id="read" className="pe-7s-check pe-3x" onClick={(event) => this.handleClick(event)}></span>
      );
    } else {

      return (
        <span id="unread" className="pe-7s-check pe-3x" onClick={(event) => this.handleClick(event)}></span>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({markRead}, dispatch);
};

export default connect(null, mapDispatchToProps)(Checkbox);