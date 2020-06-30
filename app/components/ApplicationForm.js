import React, { Component } from 'react'

import client from '../client'

// Data
import months from '../data/months.json'
import states from '../data/states.json'

// Components
import Snackbar from './Snackbar'
import Spinner from './Spinner'

export default class ApplicationForm extends Component {
    state = {
        file: '',
        fileName: 'Choose File',

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

        currentEmployer: '',
        currentPosition: '',
        currentSalary: '',
        currentReasonLeaving: '',
        currentEmploymentStartDate: '',
        currentEmploymentContact: '',

        previousEmployer1: '',
        previousPosition1: '',
        previousSalary1: '',
        previousReasonLeaving1: '',
        previousEmploymentStartDate1: '',
        previousEmploymentEndDate1: '',
        previousEmploymentContact1: '',

        previousEmployer2: '',
        previousPosition2: '',
        previousSalary2: '',
        previousReasonLeaving2: '',
        previousEmploymentStartDate2: '',
        previousEmploymentEndDate2: '',
        previousEmploymentContact2: '',

        coverLetterPath: '',
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

    onCurrentEmployerChange = (e) => { this.setState({currentEmployer: e.target.value}) }
    onCurrentPositionChange = (e) => { this.setState({currentPosition: e.target.value}) }
    onCurrentSalaryChange = (e) => { this.setState({currentSalary: e.target.value}) }
    onCurrentReasonLeavingChange = (e) => { this.setState({currentReasonLeaving: e.target.value}) }
    onCurrentEmploymentStartDateChange = (e) => { this.setState({currentEmploymentStartDate: e.target.value}) }
    onCurrentEmploymentContactChange  = (e) => { this.setState({currentEmploymentContact: e}) }
    
    onPreviousEmployerChange1 = (e) => { this.setState({previousEmployer1: e.target.value}) }
    onPreviousPositionChange1 = (e) => { this.setState({previousPosition1: e.target.value}) }
    onPreviousSalaryChange1 = (e) => { this.setState({previousSalary1: e.target.value}) }
    onPreviousReasonLeavingChange1 = (e) => { this.setState({previousReasonLeaving1: e.target.value}) }
    onPreviousEmploymentStartDateChange1 = (e) => { this.setState({previousEmploymentStartDate1: e.target.value}) }
    onPreviousEmploymentEndDateChange1 = (e) => { this.setState({previousEmploymentEndDate1: e.target.value}) }
    onPreviousEmploymentContactChange1  = (e) => { this.setState({previousEmploymentContact1: e}) }

    onPreviousEmployerChange2 = (e) => { this.setState({previousEmployer2: e.target.value}) }
    onPreviousPositionChange2 = (e) => { this.setState({previousPosition2: e.target.value}) }
    onPreviousSalaryChange2 = (e) => { this.setState({previousSalary2: e.target.value}) }
    onPreviousReasonLeavingChange2 = (e) => { this.setState({previousReasonLeaving2: e.target.value}) }
    onPreviousEmploymentStartDateChange2 = (e) => { this.setState({previousEmploymentStartDate2: e.target.value}) }
    onPreviousEmploymentEndDateChange2 = (e) => { this.setState({previousEmploymentEndDate2: e.target.value}) }
    onPreviousEmploymentContactChange2  = (e) => { this.setState({previousEmploymentContact2: e}) }

    onUploadChange = e => { this.setState({ file: e.target.files[0], fileName: e.target.files[0].name }) }

    onCoverLetterUpload = e => {
        e.preventDefault();

        const file = new File([this.state.file], 'coverletter.pdf', {type: 'application/pdf'})
        // Upload it
        // client.assets
        // .upload('file', file)
        // .then(document => {
        //     console.log('The file was uploaded!', document)
        // })
        // .catch(error => {
        //     console.error('Upload failed:', error.message)
        // })

        // client.delete('file-dd3694f178c1b8f0fc588b22487ec7e6912b30ab-pdf')
        // .then(result => {
        //     console.log('deleted image asset', result)
        // })
    }

    onSubmit = async e => {
        e.preventDefault();
        
        this.setState({ loading: true })
        fetch('https://abecares-backend.herokuapp.com/application',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            console.log(response.status)
            if (response.status === 'success'){
                this.resetForm();
                this.setState({ submitted: true, success: true, loading: false, })
            } else if(response.status === 'fail'){
                this.setState({ submitted: true, success: false, loading: false })
            }
        })
        .catch(() => this.setState({ submitted: true, success: false }))
    }

    onCloseSnackbar = () => {
        this.setState({ submitted: false })
    }

    resetForm() {
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
                            style={{marginBottom: '6rem'}} value={this.state.qualifications} onChange={this.onQualificationsChange.bind(this)}
                        />
                    </div>

                    <div className="form" style={{marginTop: '4rem'}}>
                        <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Current Employment:</h3>
                        <label htmlFor="application__input-current-employer" className="form__label p-s">Current Employer</label>
                        <input type="text" id="application__input-current-employer" className="form__input p-m"
                            value={this.state.currentEmployer} onChange={this.onCurrentEmployerChange.bind(this)}
                        />
                        <label htmlFor="application__input-current-position" className="form__label p-s">Position</label>
                        <input type="text" id="application__input-current-position" className="form__input p-m"
                            value={this.state.currentPosition} onChange={this.onCurrentPositionChange.bind(this)}
                        />
                        <label htmlFor="application__input-current-salary" className="form__label p-s">Salary</label>
                        <div className="form__input-container">
                            <input type="text" id="application__input-current-salary" className="form__input-medium p-m"
                                value={this.state.currentSalary} onChange={this.onCurrentSalaryChange.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-current-reason-leaving" className="form__label p-s">Reason for Leaving</label>
                        <input type="text" id="application__input-current-reason-leaving" className="form__input p-m"
                            value={this.state.currentReasonLeaving} onChange={this.onCurrentReasonLeavingChange.bind(this)}
                        />
                        <label htmlFor="application__input-current-employment-start-date" className="form__label p-s">Date You Can Start</label>
                        <div className="form__input-container">
                            <input type="date" id="application__input-current-employment-start-date" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                                value={this.state.currentEmploymentStartDate} onChange={this.onCurrentEmploymentStartDateChange.bind(this)}
                            />
                        </div>
                        <p htmlFor="application__input-current-employment-contact" className="form__label p-s">May we contact?</p>
                        <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                            <label className="p-s white">
                                <input type="radio" id="application__input-current-employment-contact" className="form__checkbox p-m"
                                    style={{marginBottom: '2rem'}} value="Yes" checked={this.state.currentEmploymentContact === 'Yes'}
                                    onChange={this.onCurrentEmploymentContactChange.bind(this, 'Yes')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    Yes
                                </span>
                            </label>
                            <label className="p-s white">
                                <input type="radio" id="application__input-current-employment-contact" className="form__checkbox p-m"
                                    value="No" checked={this.state.currentEmploymentContact === 'No'}
                                    onChange={this.onCurrentEmploymentContactChange.bind(this, 'No')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    No
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="form" style={{marginTop: '4rem'}}>
                    <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Previous Employment:</h3>
                        <label htmlFor="application__input-pervious-employer-1" className="form__label p-s">Previous Employer</label>
                        <input type="text" id="application__input-pervious-employer-1" className="form__input p-m"
                            value={this.state.previousEmployer1} onChange={this.onPreviousEmployerChange1.bind(this)}
                        />
                        <label htmlFor="application__input-previous-position-1" className="form__label p-s">Position</label>
                        <input type="text" id="application__input-previous-position-1" className="form__input p-m"
                            value={this.state.previousPosition1} onChange={this.onPreviousPositionChange1.bind(this)}
                        />
                        <label htmlFor="application__input-previous-salary-1" className="form__label p-s">Salary</label>
                        <div className="form__input-container">
                            <input type="text" id="application__input-previous-salary-1" className="form__input-medium p-m"
                                value={this.state.previousSalary1} onChange={this.onPreviousSalaryChange1.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-previous-reason-leaving-1" className="form__label p-s">Reason for Leaving</label>
                        <input type="text" id="application__input-previous-reason-leaving-1" className="form__input p-m"
                            value={this.state.previousReasonLeaving1} onChange={this.onPreviousReasonLeavingChange1.bind(this)}
                        />
                        <label htmlFor="application__input-previous-employment-start-date-1" className="form__label p-s">Start Date</label>
                        <div className="form__input-container">
                            <input type="date" id="application__input-previous-employment-start-date-1" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                                value={this.state.previousEmploymentStartDate1} onChange={this.onPreviousEmploymentStartDateChange1.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-previous-employment-end-date-1" className="form__label p-s">End Date</label>
                        <div className="form__input-container">
                            <input type="date" id="application__input-previous-employment-end-date-1" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                                value={this.state.previousEmploymentEndDate1} onChange={this.onPreviousEmploymentEndDateChange1.bind(this)}
                            />
                        </div>
                        <p htmlFor="application__input-previous-employment-contact-1" className="form__label p-s">May we contact?</p>
                        <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                            <label className="p-s white">
                                <input type="radio" id="application__input-previous-employment-contact-1" className="form__checkbox p-m"
                                    style={{marginBottom: '2rem'}} value="Yes" checked={this.state.previousEmploymentContact1 === 'Yes'}
                                    onChange={this.onPreviousEmploymentContactChange1.bind(this, 'Yes')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    Yes
                                </span>
                            </label>
                            <label className="p-s white">
                                <input type="radio" id="application__input-previous-employment-contact-1" className="form__checkbox p-m"
                                    value="No" checked={this.state.previousEmploymentContact1 === 'No'}
                                    onChange={this.onPreviousEmploymentContactChange1.bind(this, 'No')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    No
                                </span>
                            </label>
                        </div>

                        <div className="line__large line__large--white" style={{margin: '0 auto 6rem'}} />

                        <label htmlFor="application__input-pervious-employer-2" className="form__label p-s">Previous Employer</label>
                        <input type="text" id="application__input-pervious-employer-2" className="form__input p-m"
                            value={this.state.previousEmployer2} onChange={this.onPreviousEmployerChange2.bind(this)}
                        />
                        <label htmlFor="application__input-previous-position-2" className="form__label p-s">Position</label>
                        <input type="text" id="application__input-previous-position-2" className="form__input p-m"
                            value={this.state.previousPosition2} onChange={this.onPreviousPositionChange2.bind(this)}
                        />
                        <label htmlFor="application__input-previous-salary-2" className="form__label p-s">Salary</label>
                        <div className="form__input-container">
                            <input type="text" id="application__input-previous-salary-2" className="form__input-medium p-m"
                                value={this.state.previousSalary2} onChange={this.onPreviousSalaryChange2.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-previous-reason-leaving-2" className="form__label p-s">Reason for Leaving</label>
                        <input type="text" id="application__input-previous-reason-leaving-2" className="form__input p-m"
                            value={this.state.previousReasonLeaving2} onChange={this.onPreviousReasonLeavingChange2.bind(this)}
                        />
                        <label htmlFor="application__input-previous-employment-start-date-2" className="form__label p-s">Start Date</label>
                        <div className="form__input-container">
                            <input type="date" id="application__input-previous-employment-start-date-2" className="form__input-medium p-s" style={{marginTop: '2rem'}}
                                value={this.state.previousEmploymentStartDate2} onChange={this.onPreviousEmploymentStartDateChange2.bind(this)}
                            />
                        </div>
                        <label htmlFor="application__input-previous-employment-end-date-2" className="form__label p-s">End Date</label>
                        <div className="form__input-container">
                            <input type="date" id="application__input-previous-employment-end-date-2" className="form__input-medium p-s" style={{marginTop: '2rem'}}
                                value={this.state.previousEmploymentEndDate2} onChange={this.onPreviousEmploymentEndDateChange2.bind(this)}
                            />
                        </div>
                        <p htmlFor="application__input-previous-employment-contact-2" className="form__label p-s">May we contact?</p>
                        <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                            <label className="p-s white">
                                <input type="radio" id="application__input-previous-employment-contact-2" className="form__checkbox p-m"
                                    style={{marginBottom: '2rem'}} value="Yes" checked={this.state.previousEmploymentContact2 === 'Yes'}
                                    onChange={this.onPreviousEmploymentContactChange2.bind(this, 'Yes')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    Yes
                                </span>
                            </label>
                            <label className="p-s white">
                                <input type="radio" id="application__input-previous-employment-contact-2" className="form__checkbox p-m"
                                    value="No" checked={this.state.previousEmploymentContact2 === 'No'}
                                    onChange={this.onPreviousEmploymentContactChange2.bind(this, 'No')}
                                />
                                <span style={{marginLeft: '1rem'}}>
                                    No
                                </span>
                            </label>
                        </div>
                    </div>

                <div className="form" style={{marginTop: '4rem'}}>
                    <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Cover Letter & Resume (Optional):</h3>
                    <label htmlFor="application__input-cover-letter" className="form__label p-s" >Cover Letter ({this.state.fileName})</label>
                    <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '2rem'}}>
                        <input type="file" id="application__input-cover-letter" className="white"
                            accept=".pdf,.pages,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={this.onUploadChange}
                        />
                    </div>
                    <button className="button button__m" onClick={this.onCoverLetterUpload}>Upload Files</button>
                    <label htmlFor="application__input-resume" className="form__label p-s">Resume</label>
                    <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                        <input type="file" id="application__input-resume" className="white"
                            accept=".pdf,.pages,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        />
                    </div>
                </div>

                <div className="form" style={{marginTop: '4rem'}}>
                    <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Send Application:</h3>
                    <p className="form__label p-s">By clicking the submit button below, I cerity that all of the information provided by me on this application is true and complete, and I understand that if any false information, ommissions, or misrepresentations are discovered, my application may be rejected and, if I am employed, my employement may be terminated at any time.</p>
                    <p className="form__label p-s">In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment and compenstation can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option.</p>
                    <p className="form__label p-s">I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company.</p>

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
