import React from 'react'
import "../../assets/sass/button.sass"
import GoogleIcon from './svg/GoogleIcon'

const Button = (props) => {
  return (
    <button type={props.type} value={props.value} className={props.class}>
      {props.content}
    </button>
  )
}

const ButtonGoogle = (props) => {
  return (
    <button type={props.type} value={props.value} className={props.class}>
      <GoogleIcon class="iconGoogle"/>
      {props.content}
    </button>
  );
};
export { Button, ButtonGoogle };