import React from 'react';
import './Modal.css';
import axios from 'axios';

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      answer: '',
      email: '',
      file: null,
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleAnswer(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleFile(e) {
    this.setState({
      file: e.target.files[0]
    });
    console.log(this.state.file)
  }

  handleSubmit() {
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('body', this.state.answer);
    formData.append('name', this.state.username);
    formData.append('email', this.state.email);
    axios({
      method: 'post',
      url: `${process.env.API_URL}/qa/questions/${this.props.questionid}/answers`,
      data: formData,
      headers: {
        Authorization: process.env.API_KEY,
        'content-type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.file)
    this.props.onClose();
    console.log(this.props.question);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" onClick={this.props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="modal-title">Submit Your Answer</h2>
            <h3>{this.props.product.name}: {this.props.question.question_body}</h3>
          </div>
          <div className="modal-body">
            <form>
              <label>
                What is your nickname? *
                <br/>
                <input
                  name="username"
                  type="text"
                  placeholder="Example: jack543!"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
              </label>
              <p className="subtext">For privacy reasons, do not use your full name or email address</p>
              <br/>
              <label>
                What is your email? *
                <br/>
                <input
                  name="email"
                  type="email"
                  placeholder="Example: jack@email.com"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <p className="subtext">For authentication reasons, you will not be emailed</p>
              </label>
              <br/>
              <label>
                Your Answer: *
                <br/>
                <textarea
                  rows="4"
                  cols="30"
                  name="answer"
                  type="text"
                  value={this.state.answer}
                  onChange={this.handleAnswer}
                />
              </label>
              <br/>
              <br/>
              <label>
                Add Photos:
                <br/>
                <label htmlFor="fileInput">
                  <img id="icon" src="https://static.vecteezy.com/system/resources/thumbnails/006/017/715/small/ui-add-icon-free-vector.jpg" />
                  {/* <img id="icon" src="https://visualpharm.com/assets/135/Add%20Image-595b40b85ba036ed117dbead.svg" /> */}
                </label>
                <input id="fileInput" type="file" accept="image/png, image/jpeg" multiple onChange={this.handleFile} />
              </label>
            </form>
          </div>
          <div className='modal-footer'>
            <button onClick={this.handleSubmit} className='button'>Submit</button>
          </div>
        </div>
      </div>
    )
  };
};

export default AnswerModal;
