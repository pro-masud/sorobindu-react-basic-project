import React, { useState } from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas';
import "./contact.scss";

const Contact = () => {
  // get value for react js here
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <HelmetHas title={"Contact"}/>
      <div className="container container-contact-form">
        <h2>contact us page</h2>
        <hr />
        <p>{name}</p>
        <div className="contact-form">
          <div className="react-form">
            <form action="">
              <input type="text" placeholder='User Name' value={name} onChange={(e) => setName(e.target.value)}/>
              <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
