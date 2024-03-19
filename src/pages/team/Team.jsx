import React, { useContext, useEffect } from 'react';
import HelmetHas from '../../component/helmetHas/HelmetHas';
import "./team.scss";
import CounterContext from '../../context/CounterContext';


const Team = () => {
  const {count, setCount } = useContext(CounterContext); // Correct usage

    useEffect(() => {
        console.log("Counter value changed");
    }, [count]);

    return (
        <>
            <HelmetHas title={"Team"}/>
            <div className="container team-container">
                <div className="counter">
                    <hr />
                    <h2>{count}</h2>
                    <hr />
                    <button onClick={() => setCount(prevValue => prevValue - 1)}>--</button>
                    <button onClick={() => setCount(prevValue => prevValue + 1)}>++</button>
                </div>
            </div>
        </>
    );
};

export default Team;
