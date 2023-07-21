import React from 'react'

const Error = ({ errorStatus, errorMessage }) => {
  return (
    <div className='error'>
        <p>{errorStatus}</p>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error
