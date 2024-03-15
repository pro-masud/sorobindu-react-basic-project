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
                placeholder="User Name"
                value={input.name}
                onChange={(e) =>
                  setInput((preValue) => ({...preValue, name: e.target.value }))
                }
              />
              <input type="text" placeholder="Email" value={input.email} onChange={(e) => setInput((preValue) => ({...preValue, email: e.target.value}))}/>
              <input
                type="text"
                placeholder="Password"
                value={input.password} onChange={(e) => setInput((preValue) => ({...preValue, password: e.target.value}))}
              />
              <input type="text" placeholder="Message" value={input.message} onChange={(e) => setInput((preValue) => ({...preValue, message: e.target.value}))} />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
