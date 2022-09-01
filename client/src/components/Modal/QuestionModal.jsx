import React from 'react';
import './Modal.css';
import axios from 'axios';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      question: '',
      email: '',
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleQuestion(e) {
    this.setState({
      question: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit() {
    axios({
      method: 'post',
      url: `${process.env.API_URL}/qa/questions`,
      data: {
        body: this.state.question,
        name: this.state.username,
        email: this.state.email,
        product_id: this.props.product?.id
      },
      headers: { Authorization: process.env.API_KEY },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.onClose();
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" onClick={this.props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Ask Your Question</h2>
            <h3>About the Product Name</h3>
          </div>
          <div className="modal-body">
            <form>
              <label>
                What is your nickname? *
                <br/>
                <input
                  name="username"
                  type="text"
                  placeholder="Example: jackson11!"
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
                  name="email"
                  type="email"
                  placeholder="Example: jackson11@email.com"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <p>For authentication reasons, you will not be emailed</p>
              </label>
              <br/>
              <label>
                Your Question: *
                <br/>
                <input
                  name="question"
                  type="text"
                  value={this.state.question}
                  onChange={this.handleQuestion}
                />
              </label>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={this.handleSubmit} className='button'>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
