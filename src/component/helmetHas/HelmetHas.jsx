import React from 'react'
import { Helmet } from 'react-helmet';

const HelmetHas = ({title}) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sorobindu | {title}</title>
      </Helmet>
    </>
  )
}

export default HelmetHas;
