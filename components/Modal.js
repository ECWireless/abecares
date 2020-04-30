import React from 'react'//

// Components
import CloseIcon from '../components/CloseIcon';

export default class Modal extends React.Component {
    state={
        autoplayToggle: ''
    }

    onAutoplayTogge = () => {
        this.setState({
            ...this.state,
            autoplayToggle: '?autoplay=1'
        })
    }

    render() {
        return (
            <div className={this.props.modalToggle}>
            <div id="modal__close" onClick={this.props.onModalToggle}>
                <CloseIcon />
            </div>
            <iframe
                src={`https://player.vimeo.com/video/386831702${this.state.autoplayToggle}`}
                id="modal__video" frameBorder="0"
                allow="autoplay; fullscreen" allowFullScreen>
            </iframe>
            <div id="modal__buttons-container">
                    <button className="button button__m" id="modal__button-1" onClick={this.onAutoplayTogge}>Play</button>
                    <button className="button button__m-alt" onClick={this.props.onModalToggle}>Close</button>
                </div>
        </div>
        )
    }
}
