import React from 'react';
import './Modal.css';

class PicModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="picModal" onClick={this.props.onClose}>
        <div className="pic-modal-content" onClick={e => e.stopPropagation()}>
          <div className="pic-modal-body">
            <img src={this.props.photo.url}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default PicModal;