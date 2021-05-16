import React from 'react'

// Components
import Snackbar from '../../components/Snackbar'
import Spinner from '../../components/Spinner'

const Contact = ({ contactRef }) => {
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [snackbar, setSnackbar] = React.useState(false)

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

  const handleOnChange = e => {
      e.persist()
      setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }))
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/contact', {
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

  const onCloseSnackbar = () => {
    setSnackbar(false)
  }

  return (
    <section className="container" id="contact" ref={contactRef}>
      <p id="contact__subtitle" className="p-m">Contact Us</p>
      <div id="contact__line" className="line" />
      <h2 id="contact__header" className="h2">How can we help?</h2>
      <p id="contact__paragraph" className="p-m">We respond within 24 hours!</p>

      <form className="form" id="contact__form" onSubmit={handleOnSubmit}>
        <label htmlFor="name" id="contact__label-name" className="form__label p-s">What is your Name?</label>
        <input required type="text" id="name" className="form__input p-m"
          value={inputs.name} onChange={handleOnChange}
        />

        <label htmlFor="email" id="contact__label-email" className="form__label p-s">What is your Email?</label>
        <input required type="email" id="email" className="form__input p-m"
          value={inputs.email} onChange={handleOnChange}
        />

        <label htmlFor="phone" id="contact__label-number" className="form__label p-s">What is your Phone Number?</label>
        <input required type="tel" id="phone" className="form__input p-m"
          value={inputs.phone} onChange={handleOnChange}
        />

        <label htmlFor="message" id="contact__label-message" className="form__label p-s">Do you have any message for us?</label>
        <textarea required type="text" id="message" className="form__input p-m"
          value={inputs.message} onChange={handleOnChange}
        />

        <button type="submit" id="contact__button" className="button button__l">
          {status.submitting ? <Spinner /> : 'Send Your Message'}
        </button>
        { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
      </form>
    </section>
  )
}

export default Contact;
