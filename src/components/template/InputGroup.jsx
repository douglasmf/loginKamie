import React from 'react'
import "../../assets/sass/inputGroup.sass"

const InputGroup = (props) => {
  return (
    <div className='inputGroup'>
        <label For={props.name}>{props.label}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder}/>
    </div>
  )
}

export default InputGroup