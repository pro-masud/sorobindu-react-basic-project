import React, { useContext } from 'react'
import HelmetHas from '../../component/helmetHas/HelmetHas'
import CounterContext from '../../context/CounterContext';

const Blog = () => {
  const { foods } = useContext(CounterContext);
  const {count, setCount } = useContext(CounterContext); // Correct usage
  return (
    <>
      <HelmetHas title={"Blog"}/>
      <h2>blog page {count}</h2>
    </>
  )
}

export default Blog
