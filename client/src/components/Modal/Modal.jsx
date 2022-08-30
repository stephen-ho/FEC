import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      username: '',
      answer: '',
    }

    this.handleUsername = this.handleUsername.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
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

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal' onClick={this.props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>Add Answer</h4>
          </div>
          <div className='modal-body'>
            <form>
              <label>
                Username:
                <input
                  name='username'
                  type='text'
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
              </label>
              <br/>
              <label>
                Your Answer:
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
                <input type='file'/>
              </label>
            </form>
          </div>
          <div className='modal-footer'>
            <button onClick={this.props.onClose} className='button'>Close</button>
          </div>
        </div>
      </div>
    )
  };
};

export default Modal;