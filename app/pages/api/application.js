const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const {
    name,
    address1,
    address2,
    city,
    americanState,
    zipCode,
    phone,
    email,
    birthMonth,
    birthDay,
    birthYear,
    isCitizen,

    employmentDesired,
    startDate,
    salary,

    highSchool,
    highSchoolGraduated,
    college,
    collegeDegree,
    collegeGraduated,
    graduateSchool,
    graduateDegree,
    graduateSchoolGraduated,

    qualifications,

    currentEmployer,
    currentPosition,
    currentSalary,
    currentReasonLeaving,
    currentEmploymentStartDate,
    currentEmploymentContact,

    previousEmployer1,
    previousPosition1,
    previousSalary1,
    previousReasonLeaving1,
    previousEmploymentStartDate1,
    previousEmploymentEndDate1,
    previousEmploymentContact1,

    previousEmployer2,
    previousPosition2,
    previousSalary2,
    previousReasonLeaving2,
    previousEmploymentStartDate2,
    previousEmploymentEndDate2,
    previousEmploymentContact2,

    resumeFile,
  } = req.body

  const confirmationEmail = {
    to: email,
    from: 'djordan@abecares.com',
    subject: `Application was successful!`,
    html: `
      <p>Thank you for applying! We will be in touch shortly.</p>
      <br/>
      <h2>Your submission:</h2>
      <h3>Personal Information:</h3>
      <p>Name: ${name}</p>
      <p>Address:</p>
      <p>${address1}</p>
      <p>${address2}</p>
      <p>${city}, ${americanState} ${zipCode}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Bithday: ${birthMonth} ${birthDay}, ${birthYear}</p>
      <p>US Citizen: ${isCitizen ? 'Yes' : 'No'}</p>
      <br/>
      <h3>Employment Desired:</h3>
      <p>Position Applying for: ${employmentDesired}</p>
      <p>Desired Start Date: ${startDate}</p>
      <p>Desired Salary: ${salary}</p>
      <br/>
      <h3>Education:</h3>
      <p>High School: ${highSchool}</p>
      <p>Graduated: ${highSchoolGraduated ? 'Yes' : 'No'}</p>
      <p>College: ${college}</p>
      <p>Area of Study / Degree: ${collegeDegree}</p>
      <p>Graduated: ${collegeGraduated ? 'Yes' : 'No'}</p>
      <p>Graduate School: ${graduateSchool}</p>
      <p>Area of Study / Degree: ${graduateDegree}</p>
      <p>Graduate: ${graduateSchoolGraduated ? 'Yes' : 'No'}</p>
      <br/>
      <h3>Skills / Qualifications:</h3>
      <p>${qualifications}</p>
      <br/>
      <h3>Current Employment:</h3>
      <p>Current Employer: ${currentEmployer}</p>
      <p>Position: ${currentPosition}</p>
      <p>Salary: ${currentSalary}</p>
      <p>Reason for Leaving: ${currentReasonLeaving}</p>
      <p>Start Date: ${currentEmploymentStartDate}</p>
      <p>Can Contact: ${currentEmploymentContact}</p>
      <br/>
      <h3>Previous Employment:</h3>
      <p>Previous Employer: ${previousEmployer1}</p>
      <p>Position: ${previousPosition1}</p>
      <p>Salary: ${previousSalary1}</p>
      <p>Reason for Leaving: ${previousReasonLeaving1}</p>
      <p>Start Date: ${previousEmploymentStartDate1}</p>
      <p>End Date: ${previousEmploymentEndDate1}</p>
      <p>Can Contact: ${previousEmploymentContact1}</p>
      <br/>
      <p>Previous Employer: ${previousEmployer2}</p>
      <p>Position: ${previousPosition2}</p>
      <p>Salary: ${previousSalary2}</p>
      <p>Reason for Leaving: ${previousReasonLeaving2}</p>
      <p>Start Date: ${previousEmploymentStartDate2}</p>
      <p>End Date: ${previousEmploymentEndDate2}</p>
      <p>Can Contact: ${previousEmploymentContact2}</p>
    `,
    attachments: [
      {
        content: resumeFile,
        filename: `${name}_resume.pdf`,
        type: "application/pdf",
        disposition: "attachment"
      }
    ]
  }

  const notificationEmail = {
    to: 'djordan@abecares.com',
    from: 'djordan@abecares.com',
    subject: `New Application Form Submission - ${email}`,
    html: `
      <p>New application form submission from ${name}.</p>
      <br/>
      <h3>Personal Information:</h3>
      <p>Name: ${name}</p>
      <p>Address:</p>
      <p>${address1}</p>
      <p>${address2}</p>
      <p>${city}, ${americanState} ${zipCode}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Bithday: ${birthMonth} ${birthDay}, ${birthYear}</p>
      <p>US Citizen: ${isCitizen ? 'Yes' : 'No'}</p>
      <br/>
      <h3>Employment Desired:</h3>
      <p>Position Applying for: ${employmentDesired}</p>
      <p>Desired Start Date: ${startDate}</p>
      <p>Desired Salary: ${salary}</p>
      <br/>
      <h3>Education:</h3>
      <p>High School: ${highSchool}</p>
      <p>Graduated: ${highSchoolGraduated ? 'Yes' : 'No'}</p>
      <p>College: ${college}</p>
      <p>Area of Study / Degree: ${collegeDegree}</p>
      <p>Graduated: ${collegeGraduated ? 'Yes' : 'No'}</p>
      <p>Graduate School: ${graduateSchool}</p>
      <p>Area of Study / Degree: ${graduateDegree}</p>
      <p>Graduate: ${graduateSchoolGraduated ? 'Yes' : 'No'}</p>
      <br/>
      <h3>Skills / Qualifications:</h3>
      <p>${qualifications}</p>
      <br/>
      <h3>Current Employment:</h3>
      <p>Current Employer: ${currentEmployer}</p>
      <p>Position: ${currentPosition}</p>
      <p>Salary: ${currentSalary}</p>
      <p>Reason for Leaving: ${currentReasonLeaving}</p>
      <p>Start Date: ${currentEmploymentStartDate}</p>
      <p>Can Contact: ${currentEmploymentContact}</p>
      <br/>
      <h3>Previous Employment:</h3>
      <p>Previous Employer: ${previousEmployer1}</p>
      <p>Position: ${previousPosition1}</p>
      <p>Salary: ${previousSalary1}</p>
      <p>Reason for Leaving: ${previousReasonLeaving1}</p>
      <p>Start Date: ${previousEmploymentStartDate1}</p>
      <p>End Date: ${previousEmploymentEndDate1}</p>
      <p>Can Contact: ${previousEmploymentContact1}</p>
      <br/>
      <p>Previous Employer: ${previousEmployer2}</p>
      <p>Position: ${previousPosition2}</p>
      <p>Salary: ${previousSalary2}</p>
      <p>Reason for Leaving: ${previousReasonLeaving2}</p>
      <p>Start Date: ${previousEmploymentStartDate2}</p>
      <p>End Date: ${previousEmploymentEndDate2}</p>
      <p>Can Contact: ${previousEmploymentContact2}</p>
    `,
    attachments: [
      {
        content: resumeFile,
        filename: `${name}_resume.pdf`,
        type: "application/pdf",
        disposition: "attachment"
      }
    ]
  }

  try {
    await sgMail.send(confirmationEmail)
    await sgMail.send(notificationEmail)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
