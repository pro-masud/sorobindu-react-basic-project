import React, { useEffect, useState } from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas';
import "./team.scss";

const Team = () => {

  const [age, setAge]  = useState("");
  const [couter, setCouter]  = useState(0);

  useEffect(() => {
    console.log("hello world");
  }, [age]);

  useEffect(() => {
    console.log("counter value change");
  }, [couter])

  
  return (
    <>
      <HelmetHas title={"Team"}/>
      <div className="container team-container">
        <div className="couter">
          <input type="text" placeholder='Inter Your Age' value={age} onChange={(e) => setAge(e.target.value)} />
          <hr />
          <h2>{couter}</h2>
          <hr />
          <button onClick={() => setCouter((preValue) => preValue - 1)} >--</button>
          <button onClick={() => setCouter((preValue) => preValue + 1)}>++</button>
        </div>
      </div>
    </>
  )
}

export default Team;
