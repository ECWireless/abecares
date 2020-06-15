import React, { Component } from 'react'

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPhoneChange = (e) => {
        this.setState({phone: e.target.value})
    }

    onMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.EMAIL_SERVER_URL,{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            } else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', phone: '', message: ''})
     }

    render() {
        return (
            <section className="container" id="contact" ref={this.props.contactRef}>
                <p id="contact__subtitle" className="p-m">Contact Us</p>
                <div id="contact__line" className="line" />
                <h2 id="contact__header" className="h2">How can we help?</h2>
                <p id="contact__paragraph" className="p-m">We respond within 24 hours!</p>

                <form className="form" id="contact__form" onSubmit={this.onSubmit}>
                    <label htmlFor="form__input-name" id="contact__label-name" className="form__label p-s">What is your Name?</label>
                    <input required type="text" id="contact__input-name" className="form__input p-m"
                        value={this.state.name} onChange={this.onNameChange.bind(this)}
                    />

                    <label htmlFor="contact__input-email" id="contact__label-email" className="form__label p-s">What is your Email?</label>
                    <input required type="email" id="contact__input-email" className="form__input p-m"
                        value={this.state.email} onChange={this.onEmailChange.bind(this)}
                    />

                    <label htmlFor="contact__input-number" id="contact__label-number" className="form__label p-s">What is your Phone Number?</label>
                    <input required type="tel" id="contact__input-number" className="form__input p-m"
                        value={this.state.phone} onChange={this.onPhoneChange.bind(this)}
                    />

                    <label htmlFor="contact__input-message" id="contact__label-message" className="form__label p-s">Do you have any message for us?</label>
                    <textarea required type="text" id="contact__input-message" className="form__input p-m"
                        value={this.state.message} onChange={this.onMessageChange.bind(this)}
                    />

                    <button type="submit" id="contact__button" className="button button__l">Send Your Message</button>
                </form>
            </section>
        )
    }
}
