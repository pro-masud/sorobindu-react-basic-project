import React, { useState } from "react";
import HelmetHas from "../../component/helmetHas/HelmetHas";
import "./contact.scss";

const Contact = () => {
  // get value for react js here
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handInputValue = (e) => {
    setInput((preValue) => ({
      ...preValue, 
      [e.target.name] : e.target.value
    }));
  }

  return (
    <>
      <HelmetHas title={"Contact"} />
      <div className="container container-contact-form">
        <h2>contact us page</h2>
        <hr />
        <p>{name}</p>
        <div className="contact-form">
          <div className="react-form">
            <form action="">
              <input
                type="text"
                placeholder="User Name" name="name"
                value={input.name} onChange={handInputValue}
              />
              <input type="text" name="email" placeholder="Email" value={input.email} onChange={handInputValue} />
              <input
                type="text" name="password"
                placeholder="Password"
                value={input.password}
                onChange={handInputValue}
              />
              <input type="text" name="message" placeholder="Message" value={input.message} onChange={handInputValue} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
