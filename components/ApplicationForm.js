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

        employmentDesired: '',
        startDate: '',
        salary: '',

        highSchool: '',
        highSchoolGraduated: false,
        college: '',
        collegeDegree: '',
        collegeGraduated: false,
        graduateSchool: '',
        graduateDegree: '',
        graduateSchoolGraduated: false,

        qualifications: '',
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
    onIsCitizenChange = () => { this.setState({isCitizen: !this.state.isCitizen}) }

    onEmploymentDesiredChange = (e) => { this.setState({employmentDesired: e.target.value}) }
    onStartDateChange = (e) => { this.setState({startDate: e.target.value}) }
    onSalaryChange = (e) => { this.setState({salary: e.target.value}) }

    onHighSchoolChange = (e) => { this.setState({highSchool: e.target.value}) }
    onHighSchoolGraduatedChange = () => { this.setState({highSchoolGraduated: !this.state.highSchoolGraduated}) }
    onCollegeChange = (e) => { this.setState({college: e.target.value}) }
    onCollegeDegreeChange = (e) => { this.setState({collegeDegree: e.target.value}) }
    onCollegeGraduatedChange = () => { this.setState({collegeGraduated: !this.state.collegeGraduated}) }
    onGraduateSchoolChange = (e) => { this.setState({graduateSchool: e.target.value}) }
    onGraduateDegree = (e) => { this.setState({graduateDegree: e.target.value}) }
    onGraduateSchoolGraduatedChange = () => { this.setState({graduateSchoolGraduated: !this.state.graduateSchoolGraduated}) }

    onQualificationsChange = (e) => { this.setState({qualifications: e.target.value}) }

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

            Employment Desired: ${this.state.employmentDesired}
            Start Date: ${this.state.startDate}
            Salary Desired: ${this.state.salary}

            High School: ${this.state.highSchool}
            Did you graduate?: ${this.state.highSchoolGraduated}
            College: ${this.state.college}
            College Degree: ${this.state.collegeDegree}
            Did you graduate?: ${this.state.collegeGraduated}
            Graduate School: ${this.state.graduateSchool}
            Graduate School Degree: ${this.state.graduateDegree}
            Did you graduate?: ${this.state.graduateSchoolGraduated}

            Qualifications: ${this.state.qualifications}
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
                        <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Personal Information:</h3>
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
                            <select required={this.state.required} name="state" id="state" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
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
                            <select required={this.state.required} name="month" id="month" className="form__input-medium p-s" style={{margin: '1rem 0 0 0'}}
                                value={this.state.birthMonth} onChange={this.onBirthMonthChange.bind(this)}
                            >
                                {months.map(month=><option key={month.abbreviation}>{month.name}</option>)}
                            </select>
                            <select required={this.state.required} name="day" id="day" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                                value={this.state.birthDay} onChange={this.onBirthDayChange.bind(this)}
                            >
                                {days.map(day=><option key={day}>{day}</option>)}
                            </select>
                            <select required={this.state.required} name="year" id="year" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                                value={this.state.birthYear} onChange={this.onBirthYearChange.bind(this)}
                            >
                                {years.map(year=><option key={year}>{year}</option>)}
                            </select>
                        </div>
                        <label htmlFor="application__input-citizenship" className="form__label p-s">Are you a U.S. citizen?</label>
                        <div className="form__input-container">
                            <input required={this.state.required} type="checkbox" id="application__input-citizenship" className="form__checkbox p-m"
                                style={{marginBottom: '6rem'}} value={this.state.isCitizen} onChange={this.onIsCitizenChange}
                            />
                        </div>
                    </div>

                    <div className="form" style={{marginTop: '4rem'}}>
                        <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Employment Desired:</h3>
                        <label htmlFor="application__input-employment-desired" className="form__label p-s">Position Applying For</label>
                        <div className="form__input-container">
                            <select required={this.state.required} name="employment desired" id="application__input-employment-desired" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                                value={this.state.employmentDesired} onChange={this.onEmploymentDesiredChange}
                            >
                                <option>Part-Time</option>
                                <option>Full-Time</option>
                            </select>
                        </div>
                        <label htmlFor="application__input-start-date" className="form__label p-s">Date You Can Start</label>
                        <div className="form__input-container">
                            <input required={this.state.required} type="date" id="application__input-start-date" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                                value={this.state.startDate} onChange={this.onStartDateChange.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-salary" className="form__label p-s">Desired Salary</label>
                        <div className="form__input-container" style={{marginBottom: '6rem'}}>
                            <input required={this.state.required} type="text" id="application__input-salary" className="form__input-medium p-m"
                                value={this.state.salary} onChange={this.onSalaryChange.bind(this)}
                            />
                        </div>
                    </div>

                    <div className="form" style={{marginTop: '4rem'}}>
                        <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Education:</h3>
                        <label htmlFor="application__input-high-school" className="form__label p-s">High School</label>
                        <input required={this.state.required} type="text" id="application__input-high-school" className="form__input p-m"
                            value={this.state.highSchool} onChange={this.onHighSchoolChange.bind(this)}
                        />
                        <label htmlFor="application__input-high-school-graduated" className="form__label p-s">Did you graduate?</label>
                        <div className="form__input-container">
                            <input required={this.state.required} type="checkbox" id="application__input-high-school-graduated" className="form__checkbox p-m"
                                value={this.state.highSchoolGraduated} onChange={this.onHighSchoolGraduatedChange}
                            />
                        </div>
                        <label htmlFor="application__input-college" className="form__label p-s">College</label>
                        <input type="text" id="application__input-college" className="form__input p-m"
                            value={this.state.college} onChange={this.onCollegeChange.bind(this)}
                        />
                        <label htmlFor="application__input-college-degree" className="form__label p-s">Area of Study/Degree</label>
                        <input type="text" id="application__input-college-degree" className="form__input p-m"
                            value={this.state.collegeDegree} onChange={this.onCollegeDegreeChange.bind(this)}
                        />
                        <label htmlFor="application__input-college-graduated" className="form__label p-s">Did you graduate?</label>
                        <div className="form__input-container">
                            <input type="checkbox" id="application__input-college-graduated" className="form__checkbox p-m"
                                value={this.state.collegeGraduated} onChange={this.onCollegeGraduatedChange}
                            />
                        </div>
                        <label htmlFor="application__input-graduate-school" className="form__label p-s">Graduate School</label>
                        <input type="text" id="application__input-graduate-school" className="form__input p-m"
                            value={this.state.graduateSchool} onChange={this.onGraduateSchoolChange.bind(this)}
                        />
                        <label htmlFor="application__input-graduate-degree" className="form__label p-s">Area of Study/Degree</label>
                        <input type="text" id="application__input-graduate-degree" className="form__input p-m"
                            value={this.state.graduateDegree} onChange={this.onGraduateDegree.bind(this)}
                        />
                        <label htmlFor="application__input-graduate-school-graduated" className="form__label p-s">Did you graduate?</label>
                        <div className="form__input-container">
                            <input type="checkbox" id="application__input-graduate-school-graduated" className="form__checkbox p-m"
                                style={{marginBottom: '6rem'}} value={this.state.graduateSchoolGraduated} onChange={this.onGraduateSchoolGraduatedChange}
                            />
                        </div>
                    </div>

                    <div className="form" style={{marginTop: '4rem'}}>
                        <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Skills/Qualifications:</h3>
                        <label htmlFor="application__input-qualifications" className="form__label p-s">Which relevant certifications or qualifications do you have?</label>
                        <textarea required={this.state.required} type="text" id="application__input-qualifications" className="form__textarea p-m"
                            value={this.state.qualifications} onChange={this.onQualificationsChange.bind(this)}
                        />

                        <button style={{marginBottom: '5rem'}} type="submit" id="contact__button" className="button button__l">
                            Submit
                        </button>
                    </div>

                    { this.state.submitted && <Snackbar success={this.state.success} onCloseSnackbar={this.onCloseSnackbar} /> }
                </form>
            </React.Fragment>
        )
    }
}
