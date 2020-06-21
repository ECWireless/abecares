import React, { Component } from 'react'

// Data
import months from '../data/months.json'
import states from '../data/states.json'

// Components
import Snackbar from './Snackbar'
import Spinner from './Spinner'

export default class ApplicationForm extends Component {
    state = {

        loading: false,
        submitted: false,
        success: false,
    }

    onSubmit = (e) => {
        e.preventDefault();
        // this.setState({ loading: true })
        // fetch('https://abecares-backend.herokuapp.com/send',{
        //     method: "POST",
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(
        //     (response) => (response.json())
        // ).then((response)=>{
        //     if (response.status === 'success'){
        //         this.resetForm();
        //         this.setState({ submitted: true, success: true, loading: false, })
        //     } else if(response.status === 'fail'){
        //         this.setState({ submitted: true, success: false, loading: false })
        //     }
        // })
        // .catch(() => this.setState({ submitted: true, success: false }))
    }

    onCloseSnackbar = () => {
        this.setState({ submitted: false })
    }

    resetForm(){
        // this.setState({name: '', email: '', phone: '', message: ''})
    }
    render() {
        let days = [];
        for(let i=1; i<=31; i++) {
            days.push(i);
        }

        let years = [];
        for(let i=2020; i>1920; i--) {
            years.push(i);
        }

        return (
            <React.Fragment>
                <form className="form" id="contact__form" onSubmit={this.onSubmit}>
                    <h3 style={{textAlign: 'center', marginTop: '3rem'}} className="h3 white">Personal Information</h3>
                    <label htmlFor="application__input-name" className="form__label p-s">Full Name</label>
                    <input required type="text" id="application__input-name" className="form__input p-m"
                    />
                    <label htmlFor="application__input-address-1" className="form__label p-s">Address</label>
                    <input required type="text" id="application__input-address-1" className="form__input p-m"
                        placeholder="Street Address"
                    />
                    <input required type="text" id="application__input-address-2" className="form__input p-m"
                        placeholder="Apt, unit, etc." style={{marginTop: '1rem'}}
                    />
                    <div className="form__input-container">
                        <input required type="text" id="application__input-city" className="form__input-medium p-m"
                            placeholder="City" style={{marginTop: '1rem'}}
                        />
                        <select name="state" id="state" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}>
                            {states.map(state=><option key={state.abbreviation}>{state.abbreviation}</option>)}
                        </select>
                        <input required type="text" id="application__input-city" className="form__input-small p-m"
                            placeholder="Zip Code" style={{margin: '1rem 0 0 1rem'}}
                        />
                    </div>
                    <label htmlFor="application__input-phone" className="form__label p-s">Phone Number</label>
                    <input required type="text" id="application__input-phone" className="form__input p-m" />
                    <label htmlFor="application__input-email" className="form__label p-s">Email Address</label>
                    <input required type="text" id="application__input-email" className="form__input p-m" />
                    <label htmlFor="application__input-email" className="form__label p-s">Email Address</label>
                    <input required type="text" id="application__input-email" className="form__input p-m" />
                    <label htmlFor="application__input-birth-month" className="form__label p-s">Date of Birth</label>
                    <div className="form__input-container">
                        <select name="month" id="month" className="form__input-medium p-s" style={{margin: '1rem 0 0 0'}}>
                            {months.map(month=><option key={month.abbreviation}>{month.name}</option>)}
                        </select>
                        <select name="day" id="day" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}>
                            {days.map(day=><option key={day}>{day}</option>)}
                        </select>
                        <select name="year" id="year" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}>
                            {years.map(year=><option key={year}>{year}</option>)}
                        </select>
                    </div>
                    <label htmlFor="application__input-citizenship" className="form__label p-s">Are you a U.S. citizen?</label>
                    <div className="form__input-container">
                        <input required type="checkbox" id="application__input-citizenship" className="form__checkbox p-m" value="citizen"
                        />
                    </div>
                    
                    <button style={{marginBottom: '5rem'}} type="submit" id="contact__button" className="button button__l">
                        Submit
                    </button>
                    { this.state.submitted && <Snackbar success={this.state.success} onCloseSnackbar={this.onCloseSnackbar} /> }
                </form>
            </React.Fragment>
        )
    }
}
