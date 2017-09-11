import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '', 
      author: ''
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({ 
      [name]: value, 
    })
  }

  handleOnSubmit = event => {
      event.preventDefault();
    const quote = Object.assign({}, this.state, { id: uuid() });
    this.props.addQuote(quote);

     this.setState({
      content: '',
      author: ''
     })
  }

  render() {
    return (
      <div>
        
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="custom-form">Comment</label>
                    <div className="custom-textarea">
                      <textarea
                        required
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="custom-form">Your name</label>
                    <div className="custom-textarea">
                      <input
                        required
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div>
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
          
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addQuote}, dispatch);
};

export default connect(null, mapDispatchToProps)(QuoteForm);