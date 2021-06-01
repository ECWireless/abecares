import React from 'react'

// Data
import months from '../data/months.json'
import states from '../data/states.json'

// Components
import Snackbar from './Snackbar'
import Spinner from './Spinner'

const ApplicationForm = () => {
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = React.useState({
    loading: false,
    required: false,

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
    
    employmentDesired: 'Part-Time',
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

    // Uploads
    coverLetterFile: '',
    resumeFile: '',
  })

  const [snackbar, setSnackbar] = React.useState(false);

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setSnackbar(true)
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
      setSnackbar(true)
    }
  }

  const handleOnChange = (e, property) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [property]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    console.log(inputs)
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const onHandleResumeUpload = async (event) => {
    console.log(event.target.files)
    if (!event.target.files[0]) {
      return;
    }

		// setSelectedFile(event.target.files[0]);
    const convertedFile = await getBase64(event.target.files[0]);
    
    setInputs(prev => ({
      ...prev,
      resumeFile: convertedFile
    }))
	};

  const onHandleCoverUpload = async (event) => {
    console.log(event.target.files)
    if (!event.target.files[0]) {
      return;
    }

		// setSelectedFile(event.target.files[0]);
    const convertedFile = await getBase64(event.target.files[0]);
    
    setInputs(prev => ({
      ...prev,
      coverLetterFile: convertedFile
    }))
	};

  const onCloseSnackbar = () => {
    setSnackbar(false)
  }

  let days = [];
  for(let i=1; i<=31; i++) {
      days.push(i);
  }

  let years = [];
  for(let i=2020; i>1920; i--) {
      years.push(i);
  }

  return (
    <>
      <form style={{gridColumn: '2 / -2', gridRow: '4 / 5', width: '100%', display: 'flex', flexDirection: 'column'}}
        className="container" onSubmit={handleOnSubmit}
      >
          <div className="form">
              <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Personal Information:</h3>
              <label htmlFor="application__input-name" className="form__label p-s">Full Name</label>
              <input required={inputs.required} type="text" id="application__input-name" className="form__input p-m"
                  value={inputs.name} onChange={(e) => handleOnChange(e, 'name')}
              />
              <label htmlFor="application__input-address-1" className="form__label p-s">Address</label>
              <input required={inputs.required} type="text" id="application__input-address-1" className="form__input p-m"
                  placeholder="Street Address" value={inputs.address1} onChange={(e) => handleOnChange(e, 'address1')}
              />
              <input type="text" id="application__input-address-2" className="form__input p-m" style={{marginTop: '1rem'}}
                  placeholder="Apt, unit, etc." value={inputs.address2} onChange={(e) => handleOnChange(e, 'address2')}
              />
              <div className="form__input-container">
                  <input required={inputs.required} type="text" id="application__input-city" className="form__input-medium p-m" style={{marginTop: '1rem'}}
                      placeholder="City" value={inputs.city} onChange={(e) => handleOnChange(e, 'city')}
                  />
                  <select required={inputs.required} name="state" id="state" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                      value={inputs.americanState} onChange={(e) => handleOnChange(e, 'americanState')}
                  >
                      {states.map(state=><option key={state.abbreviation}>{state.abbreviation}</option>)}
                  </select>
                  <input required={inputs.required} type="text" id="application__input-city" className="form__input-small p-m" style={{margin: '1rem 0 0 1rem'}}
                      placeholder="Zip Code" value={inputs.zipCode} onChange={(e) => handleOnChange(e, 'zipCode')}
                  />
              </div>
              <label htmlFor="application__input-phone" className="form__label p-s">Phone Number</label>
              <input required={inputs.required} type="text" id="application__input-phone" className="form__input p-m"
                  value={inputs.phone} onChange={(e) => handleOnChange(e, 'phone')}
              />
              <label htmlFor="application__input-email" className="form__label p-s">Email Address</label>
              <input required={inputs.required} type="text" id="application__input-email" className="form__input p-m"
                  value={inputs.email} onChange={(e) => handleOnChange(e, 'email')}
              />
              <label htmlFor="application__input-birth-month" className="form__label p-s">Date of Birth</label>
              <div className="form__input-container">
                  <select required={inputs.required} name="month" id="month" className="form__input-medium p-s" style={{margin: '1rem 0 0 0'}}
                      value={inputs.birthMonth} onChange={(e) => handleOnChange(e, 'birthMonth')}
                  >
                      {months.map(month=><option key={month.abbreviation}>{month.name}</option>)}
                  </select>
                  <select required={inputs.required} name="day" id="day" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                      value={inputs.birthDay} onChange={(e) => handleOnChange(e, 'birthDay')}
                  >
                      {days.map(day=><option key={day}>{day}</option>)}
                  </select>
                  <select required={inputs.required} name="year" id="year" className="form__input-small p-s" style={{margin: '1rem 0 0 1rem'}}
                      value={inputs.birthYear} onChange={(e) => handleOnChange(e, 'birthYear')}
                  >
                      {years.map(year=><option key={year}>{year}</option>)}
                  </select>
              </div>
              <label htmlFor="application__input-citizenship" className="form__label p-s">Are you a U.S. citizen?</label>
              <div className="form__input-container">
                  <input required={inputs.required} type="checkbox" id="application__input-citizenship" className="form__checkbox p-m"
                      style={{marginBottom: '6rem'}} value={inputs.isCitizen} onChange={() => setInputs(prev => ({ ...prev, isCitizen: true }))}
                  />
              </div>
          </div>

          <div className="form" style={{marginTop: '4rem'}}>
              <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Employment Desired:</h3>
              <label htmlFor="application__input-employment-desired" className="form__label p-s">Position Applying For</label>
              <div className="form__input-container">
                  <select required={inputs.required} name="employment desired" id="application__input-employment-desired" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                      value={inputs.employmentDesired} onChange={(e) => handleOnChange(e, 'employmentDesired')}
                  >
                      <option>Part-Time</option>
                      <option>Full-Time</option>
                  </select>
              </div>
              <label htmlFor="application__input-start-date" className="form__label p-s">Date You Can Start</label>
              <div className="form__input-container">
                  <input required={inputs.required} type="date" id="application__input-start-date" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                      value={inputs.startDate} onChange={(e) => handleOnChange(e, 'startDate')}
                  />
              </div>
              <label htmlFor="application__input-salary" className="form__label p-s">Desired Salary</label>
              <div className="form__input-container" style={{marginBottom: '6rem'}}>
                  <input required={inputs.required} type="text" id="application__input-salary" className="form__input-medium p-m"
                      value={inputs.salary} onChange={(e) => handleOnChange(e, 'salary')}
                  />
              </div>
          </div>

          <div className="form" style={{marginTop: '4rem'}}>
              <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Education:</h3>
              <label htmlFor="application__input-high-school" className="form__label p-s">High School</label>
              <input type="text" id="application__input-high-school" className="form__input p-m"
                  value={inputs.highSchool} onChange={(e) => handleOnChange(e, 'highSchool')}
              />
              <label htmlFor="application__input-high-school-graduated" className="form__label p-s">Did you graduate?</label>
              <div className="form__input-container">
                  <input type="checkbox" id="application__input-high-school-graduated" className="form__checkbox p-m"
                      value={inputs.highSchoolGraduated} onChange={() => setInputs(prev => ({ ...prev, highSchoolGraduated: true }))}
                  />
              </div>
              <label htmlFor="application__input-college" className="form__label p-s">College</label>
              <input type="text" id="application__input-college" className="form__input p-m"
                  value={inputs.college} onChange={(e) => handleOnChange(e, 'college')}
              />
              <label htmlFor="application__input-college-degree" className="form__label p-s">Area of Study/Degree</label>
              <input type="text" id="application__input-college-degree" className="form__input p-m"
                  value={inputs.collegeDegree} onChange={(e) => handleOnChange(e, 'collegeDegree')}
              />
              <label htmlFor="application__input-college-graduated" className="form__label p-s">Did you graduate?</label>
              <div className="form__input-container">
                  <input type="checkbox" id="application__input-college-graduated" className="form__checkbox p-m"
                      value={inputs.collegeGraduated} onChange={() => setInputs(prev => ({ ...prev, collegeGraduated: true }))}
                  />
              </div>
              <label htmlFor="application__input-graduate-school" className="form__label p-s">Graduate School</label>
              <input type="text" id="application__input-graduate-school" className="form__input p-m"
                  value={inputs.graduateSchool} onChange={(e) => handleOnChange(e, 'graduateSchool')}
              />
              <label htmlFor="application__input-graduate-degree" className="form__label p-s">Area of Study/Degree</label>
              <input type="text" id="application__input-graduate-degree" className="form__input p-m"
                  value={inputs.graduateDegree} onChange={(e) => handleOnChange(e, 'graduateDegree')}
              />
              <label htmlFor="application__input-graduate-school-graduated" className="form__label p-s">Did you graduate?</label>
              <div className="form__input-container">
                  <input type="checkbox" id="application__input-graduate-school-graduated" className="form__checkbox p-m"
                      style={{marginBottom: '6rem'}} value={inputs.graduateSchoolGraduated} onChange={() => setInputs(prev => ({ ...prev, graduateSchoolGraduated: true }))}
                  />
              </div>
          </div>

          <div className="form" style={{marginTop: '4rem'}}>
              <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Skills/Qualifications:</h3>
              <label htmlFor="application__input-qualifications" className="form__label p-s">Which relevant certifications or qualifications do you have?</label>
              <textarea required={inputs.required} type="text" id="application__input-qualifications" className="form__textarea p-m"
                  style={{marginBottom: '6rem'}} value={inputs.qualifications} onChange={(e) => handleOnChange(e, 'qualifications')}
              />
          </div>

          <div className="form" style={{marginTop: '4rem'}}>
              <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Current Employment:</h3>
              <label htmlFor="application__input-current-employer" className="form__label p-s">Current Employer</label>
              <input type="text" id="application__input-current-employer" className="form__input p-m"
                  value={inputs.currentEmployer} onChange={(e) => handleOnChange(e, 'currentEmployer')}
              />
              <label htmlFor="application__input-current-position" className="form__label p-s">Position</label>
              <input type="text" id="application__input-current-position" className="form__input p-m"
                  value={inputs.currentPosition} onChange={(e) => handleOnChange(e, 'currentPosition')}
              />
              <label htmlFor="application__input-current-salary" className="form__label p-s">Salary</label>
              <div className="form__input-container">
                  <input type="text" id="application__input-current-salary" className="form__input-medium p-m"
                      value={inputs.currentSalary} onChange={(e) => handleOnChange(e, 'currentSalary')}
                  />
              </div>
              <label htmlFor="application__input-current-reason-leaving" className="form__label p-s">Reason for Leaving</label>
              <input type="text" id="application__input-current-reason-leaving" className="form__input p-m"
                  value={inputs.currentReasonLeaving} onChange={(e) => handleOnChange(e, 'currentReasonLeaving')}
              />
              <label htmlFor="application__input-current-employment-start-date" className="form__label p-s">Start Date</label>
              <div className="form__input-container">
                  <input type="date" id="application__input-current-employment-start-date" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                      value={inputs.currentEmploymentStartDate} onChange={(e) => handleOnChange(e, 'currentEmploymentStartDate')}
                  />
              </div>
              <p htmlFor="application__input-current-employment-contact" className="form__label p-s">May we contact?</p>
              <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                  <label className="p-s white">
                      <input type="radio" id="application__input-current-employment-contact" className="form__checkbox p-m"
                          style={{marginBottom: '2rem'}} value="Yes" checked={inputs.currentEmploymentContact === 'Yes'}
                          onChange={() => setInputs(prev => ({ ...prev, currentEmploymentContact: 'Yes' }))}
                      />
                      <span style={{marginLeft: '1rem'}}>
                          Yes
                      </span>
                  </label>
                  <label className="p-s white">
                      <input type="radio" id="application__input-current-employment-contact" className="form__checkbox p-m"
                          value="No" checked={inputs.currentEmploymentContact === 'No'}
                          onChange={() => setInputs(prev => ({ ...prev, currentEmploymentContact: 'No' }))}
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
                value={inputs.previousEmployer1} onChange={(e) => handleOnChange(e, 'previousEmployer1')}
            />
            <label htmlFor="application__input-previous-position-1" className="form__label p-s">Position</label>
            <input type="text" id="application__input-previous-position-1" className="form__input p-m"
                value={inputs.previousPosition1} onChange={(e) => handleOnChange(e, 'previousPosition1')}
            />
            <label htmlFor="application__input-previous-salary-1" className="form__label p-s">Salary</label>
            <div className="form__input-container">
                <input type="text" id="application__input-previous-salary-1" className="form__input-medium p-m"
                    value={inputs.previousSalary1} onChange={(e) => handleOnChange(e, 'previousSalary1')}
                />
            </div>
            <label htmlFor="application__input-previous-reason-leaving-1" className="form__label p-s">Reason for Leaving</label>
            <input type="text" id="application__input-previous-reason-leaving-1" className="form__input p-m"
                value={inputs.previousReasonLeaving1} onChange={(e) => handleOnChange(e, 'previousReasonLeaving1')}
            />
            <label htmlFor="application__input-previous-employment-start-date-1" className="form__label p-s">Start Date</label>
            <div className="form__input-container">
                <input type="date" id="application__input-previous-employment-start-date-1" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                    value={inputs.previousEmploymentStartDate1} onChange={(e) => handleOnChange(e, 'previousEmploymentStartDate1')}
                />
            </div>
            <label htmlFor="application__input-previous-employment-end-date-1" className="form__label p-s">End Date</label>
            <div className="form__input-container">
                <input type="date" id="application__input-previous-employment-end-date-1" className="form__input-medium p-s" style={{marginTop: '1rem'}}
                    value={inputs.previousEmploymentEndDate1} onChange={(e) => handleOnChange(e, 'previousEmploymentEndDate1')}
                />
            </div>
            <p htmlFor="application__input-previous-employment-contact-1" className="form__label p-s">May we contact?</p>
            <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                <label className="p-s white">
                    <input type="radio" id="application__input-previous-employment-contact-1" className="form__checkbox p-m"
                        style={{marginBottom: '2rem'}} value="Yes" checked={inputs.previousEmploymentContact1 === 'Yes'}
                        onChange={() => setInputs(prev => ({ ...prev, previousEmploymentContact1: 'Yes' }))}
                    />
                    <span style={{marginLeft: '1rem'}}>
                        Yes
                    </span>
                </label>
                <label className="p-s white">
                    <input type="radio" id="application__input-previous-employment-contact-1" className="form__checkbox p-m"
                        value="No" checked={inputs.previousEmploymentContact1 === 'No'}
                        onChange={() => setInputs(prev => ({ ...prev, previousEmploymentContact1: 'No' }))}
                    />
                    <span style={{marginLeft: '1rem'}}>
                        No
                    </span>
                </label>
            </div>

            <div className="line__large line__large--white" style={{margin: '0 auto 6rem'}} />

            <label htmlFor="application__input-pervious-employer-2" className="form__label p-s">Previous Employer</label>
            <input type="text" id="application__input-pervious-employer-2" className="form__input p-m"
                value={inputs.previousEmployer2} onChange={(e) => handleOnChange(e, 'previousEmployer2')}
            />
            <label htmlFor="application__input-previous-position-2" className="form__label p-s">Position</label>
            <input type="text" id="application__input-previous-position-2" className="form__input p-m"
                value={inputs.previousPosition2} onChange={(e) => handleOnChange(e, 'previousPosition2')}
            />
            <label htmlFor="application__input-previous-salary-2" className="form__label p-s">Salary</label>
            <div className="form__input-container">
                <input type="text" id="application__input-previous-salary-2" className="form__input-medium p-m"
                    value={inputs.previousSalary2} onChange={(e) => handleOnChange(e, 'previousSalary2')}
                />
            </div>
            <label htmlFor="application__input-previous-reason-leaving-2" className="form__label p-s">Reason for Leaving</label>
            <input type="text" id="application__input-previous-reason-leaving-2" className="form__input p-m"
                value={inputs.previousReasonLeaving2} onChange={(e) => handleOnChange(e, 'previousReasonLeaving2')}
            />
            <label htmlFor="application__input-previous-employment-start-date-2" className="form__label p-s">Start Date</label>
            <div className="form__input-container">
                <input type="date" id="application__input-previous-employment-start-date-2" className="form__input-medium p-s" style={{marginTop: '2rem'}}
                    value={inputs.previousEmploymentStartDate2} onChange={(e) => handleOnChange(e, 'previousEmploymentStartDate2')}
                />
            </div>
            <label htmlFor="application__input-previous-employment-end-date-2" className="form__label p-s">End Date</label>
            <div className="form__input-container">
                <input type="date" id="application__input-previous-employment-end-date-2" className="form__input-medium p-s" style={{marginTop: '2rem'}}
                    value={inputs.previousEmploymentEndDate2} onChange={(e) => handleOnChange(e, 'previousEmploymentEndDate2')}
                />
            </div>
            <p htmlFor="application__input-previous-employment-contact-2" className="form__label p-s">May we contact?</p>
            <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '6rem'}}>
                <label className="p-s white">
                    <input type="radio" id="application__input-previous-employment-contact-2" className="form__checkbox p-m"
                        style={{marginBottom: '2rem'}} value="Yes" checked={inputs.previousEmploymentContact2 === 'Yes'}
                        onChange={() => setInputs(prev => ({ ...prev, previousEmploymentContact2: 'Yes' }))}
                    />
                    <span style={{marginLeft: '1rem'}}>
                        Yes
                    </span>
                </label>
                <label className="p-s white">
                    <input type="radio" id="application__input-previous-employment-contact-2" className="form__checkbox p-m"
                        value="No" checked={inputs.previousEmploymentContact2 === 'No'}
                        onChange={() => setInputs(prev => ({ ...prev, previousEmploymentContact2: 'No' }))}
                    />
                    <span style={{marginLeft: '1rem'}}>
                        No
                    </span>
                </label>
            </div>
        </div>

        <div className="form" style={{marginTop: '4rem'}}>
          <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Cover Letter & Resume (Optional):</h3>
          {/* <label htmlFor="application__input-cover-letter" className="form__label p-s" >Cover Letter {inputs.fileName} (PDF)</label>
          <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '2rem'}}>
              <input
                id="application__input-cover-letter"
                className="white"
                type={'file'}
                name={'file'}
                accept={'application/pdf'}
                onChange={onHandleCoverUpload}
              />
          </div> */}
          <label htmlFor="application__input-resume" className="form__label p-s">Resume (PDF)</label>
          <div className="form__input-container" style={{flexDirection: 'column', marginBottom: '2rem'}}>
              <input
                id="application__input-resume"
                className="white"
                type={'file'}
                name={'file'}
                accept={'application/pdf'}
                onChange={onHandleResumeUpload}
              />
          </div>
      </div>

      <div className="form" style={{marginTop: '4rem'}}>
          <h3 style={{textAlign: 'center', marginTop: '6rem'}} className="h3 white">Send Application:</h3>
          <p className="form__label p-s">By clicking the submit button below, I cerity that all of the information provided by me on this application is true and complete, and I understand that if any false information, ommissions, or misrepresentations are discovered, my application may be rejected and, if I am employed, my employement may be terminated at any time.</p>
          <p className="form__label p-s">In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment and compenstation can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option.</p>
          <p className="form__label p-s">I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company.</p>

          <button style={{marginBottom: '5rem'}} type="submit" id="contact__button" className="button button__l">
            {status.submitting ? <Spinner /> : 'Submit'}
          </button>
      </div>
        { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
      </form>
    </>
  )
}

export default ApplicationForm;
