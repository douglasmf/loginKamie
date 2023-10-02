import React from 'react'
import InputGroup from './InputGroup'
import {Button, ButtonGoogle } from './Button'
import "../../assets/sass/form.sass"
import ToggleSwitch from './ToggleSwitch'

const FormLogin = () => {
  return (
    <form>
        <InputGroup name="login" label="Login" type="email" placeholder="Digite seu e-mail" />
        <InputGroup name="senha" label="Senha" type="password" placeholder="Digite sua senha" />
        <div className="lembrar">
          <div className="lembrar-me">
            <ToggleSwitch />
            <span className='text'>Lembrar me</span>
          </div>
          <a href="#" className='link'>Esqueceu a senha?</a>
        </div>
        <Button type="submit" value="Entrar" class="entrar" content="Entrar" />
        <ButtonGoogle type="button" value="entrar com o Google" class="entrar-google" content="Ou entre com o Google" />
    </form>
  )
}

export default FormLogin