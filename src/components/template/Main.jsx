import React from 'react'
import "../../assets/sass/main.sass"
import FormLogin from './FormLogin'

const Main = () => {
  return (
    <main className='main'>
        <div className="welcome-message">
          <span>
              Prazer em ver você de novo
          </span>
        </div>
        <FormLogin />
        <div className="inscrever-se">
          <p className='text'>Não tem uma conta? <a href="#" className='link'>Inscreva-se agora</a></p>
        </div>
    </main>
  )
}

export default Main