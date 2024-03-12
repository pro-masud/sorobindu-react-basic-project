import React from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas';
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <HelmetHas title={"Contact"}/>
      <div className="container container-contact-form">
        <h2>contact us page</h2>
        <div className="contact-form">
          <div className="react-form">
            <form action="">
              <input type="text" placeholder='User Name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
              <input type="text" placeholder='Message'/>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
