import React from 'react'

const Input = ({type, placeholder, label, id}) => {
  return (
    <div className='inputGroup'>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input