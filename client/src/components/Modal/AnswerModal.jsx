import React from 'react';
import './Modal.css';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      username: '',
      answer: '',
      email: ''
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  };

  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal' onClick={this.props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h2 className='modal-title'>Submit Your Answer</h2>
            <h3>Product Name: Question</h3>
          </div>
          <div className='modal-body'>
            <form>
              <label>
                What is your nickname? *
                <br/>
                <input
                  name='username'
                  type='text'
                  placeholder='Example: jack543!'
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
              </label>
              <p>For privacy reasons, do not use your full name or email address</p>
              <br/>
              <label>
                What is your email? *
                <br/>
                <input
                  name='email'
                  type='email'
                  placeholder='Example: jack@email.com'
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <p>For authentication reasons, you will not be emailed</p>
              </label>
              <br/>
              <label>
                Your Answer: *
                <br/>
                <input
                  name='answer'
                  type='text'
                  value={this.state.answer}
                  onChange={this.handleAnswer}
                />
              </label>
              <br/>
              <label>
                Add Photos:
                <br/>
                <input type='file'/>
              </label>
            </form>
          </div>
          <div className='modal-footer'>
            <button onClick={this.props.onClose} className='button'>Submit</button>
          </div>
        </div>
      </div>
    )
  };
};

export default AnswerModal;