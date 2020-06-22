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
        required: false,

        // form state
        name: '',
        address1: '',
        address2: '',
        city: '',
        americanState: '',
        zipCode: '',
        phone: '',
        email: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
        isCitizen: false,
    }

    onNameChange = (e) => { this.setState({name: e.target.value}) }
    onAddress1Change = (e) => { this.setState({address1: e.target.value}) }
    onAddress2Change = (e) => { this.setState({address2: e.target.value}) }
    onCityChange = (e) => { this.setState({city: e.target.value}) }
    onAmericanStateChange = (e) => { this.setState({americanState: e.target.value}) }
    onZipCodeChange = (e) => { this.setState({zipCode: e.target.value}) }
    onPhoneChange = (e) => { this.setState({phone: e.target.value}) }
    onEmailChange = (e) => { this.setState({email: e.target.value}) }
    onBirthMonthChange = (e) => { this.setState({birthMonth: e.target.value}) }
    onBirthDayChange = (e) => { this.setState({birthDay: e.target.value}) }
    onBirthYearChange = (e) => { this.setState({birthYear: e.target.value}) }
    onIsCitizenChange  = () => { this.setState({isCitizen: !this.state.isCitizen}) }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(`
            Name: ${this.state.name}
            Address 1: ${this.state.address1}
            Address 2: ${this.state.address2}
            City: ${this.state.city}
            State: ${this.state.americanState}
            Zip Code: ${this.state.zipCode}
            Phone Number: ${this.state.phone}
            Email Address: ${this.state.email}
            Birth Month: ${this.state.birthMonth}
            Birth Day: ${this.state.birthDay}
            Birth Year: ${this.state.birthYear}
            Is Citizen?: ${this.state.isCitizen}
        `)
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
                <form style={{gridColumn: '2 / -2', gridRow: '4 / 5', width: '100%', display: 'flex', flexDirection: 'column'}}
                    className="container" onSubmit={this.onSubmit}
                >
                    <div className="form">
                        <h3 style={{textAlign: 'center', marginTop: '4rem'}} className="h3 white">Personal Information:</h3>
                        <label htmlFor="application__input-name" className="form__label p-s">Full Name</label>
                        <input required={this.state.required} type="text" id="application__input-name" className="form__input p-m"
                            value={this.state.name} onChange={this.onNameChange.bind(this)}
                        />
                        <label htmlFor="application__input-address-1" className="form__label p-s">Address</label>
                        <input required={this.state.required} type="text" id="application__input-address-1" className="form__input p-m"
                            placeholder="Street Address" value={this.state.address1} onChange={this.onAddress1Change.bind(this)}
                        />
                        <input required={this.state.required} type="text" id="application__input-address-2" className="form__input p-m" style={{marginTop: '1rem'}}
                            placeholder="Apt, unit, etc." value={this.state.address2} onChange={this.onAddress2Change.bind(this)}
                        />
                        <div className="form__input-container">
                            <input required={this.state.required} type="text" id="application__input-city" className="form__input-medium p-m" style={{marginTop: '1rem'}}
                                placeholder="City" value={this.state.city} onChange={this.onCityChange.bind(this)}
                            />
                            <select name="state" id="state" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                                value={this.state.americanState} onChange={this.onAmericanStateChange.bind(this)}
                            >
                                {states.map(state=><option key={state.abbreviation}>{state.abbreviation}</option>)}
                            </select>
                            <input required={this.state.required} type="text" id="application__input-city" className="form__input-small p-m" style={{margin: '1rem 0 0 1rem'}}
                                placeholder="Zip Code" value={this.state.zipCode} onChange={this.onZipCodeChange.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-phone" className="form__label p-s">Phone Number</label>
                        <input required={this.state.required} type="text" id="application__input-phone" className="form__input p-m"
                            value={this.state.phone} onChange={this.onPhoneChange.bind(this)}
                        />
                        <label htmlFor="application__input-email" className="form__label p-s">Email Address</label>
                        <input required={this.state.required} type="text" id="application__input-email" className="form__input p-m"
                            value={this.state.email} onChange={this.onEmailChange.bind(this)}
                        />
                        <label htmlFor="application__input-birth-month" className="form__label p-s">Date of Birth</label>
                        <div className="form__input-container">
                            <select name="month" id="month" className="form__input-medium p-s" style={{margin: '1rem 0 0 0'}}
                                value={this.state.birthMonth} onChange={this.onBirthMonthChange.bind(this)}
                            >
                                {months.map(month=><option key={month.abbreviation}>{month.name}</option>)}
                            </select>
                            <select name="day" id="day" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                                value={this.state.birthDay} onChange={this.onBirthDayChange.bind(this)}
                            >
                                {days.map(day=><option key={day}>{day}</option>)}
                            </select>
                            <select name="year" id="year" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                                value={this.state.birthYear} onChange={this.onBirthYearChange.bind(this)}
                            >
                                {years.map(year=><option key={year}>{year}</option>)}
                            </select>
                        </div>
                        <label htmlFor="application__input-citizenship" className="form__label p-s">Are you a U.S. citizen?</label>
                        <div className="form__input-container">
                            <input required={this.state.required} type="checkbox" id="application__input-citizenship" className="form__checkbox p-m"
                                style={{marginBottom: '4rem'}} value={this.state.isCitizen} onChange={this.onIsCitizenChange}
                            />
                        </div>
                    </div>

                    <div className="form" style={{marginTop: '4rem'}} onSubmit={this.onSubmit}>
                        <h3 style={{textAlign: 'center', marginTop: '4rem'}} className="h3 white">Employment Desired:</h3>
                        <label htmlFor="application__input-name" className="form__label p-s">Full Name</label>
                        <input required={this.state.required} type="text" id="application__input-name" className="form__input p-m"
                        />
                        <button style={{marginBottom: '5rem'}} type="submit" id="contact__button" className="button button__l">
                            Submit
                        </button>
                        { this.state.submitted && <Snackbar success={this.state.success} onCloseSnackbar={this.onCloseSnackbar} /> }
                    </div>
                </form>
            </React.Fragment>
        )
    }
}
