import React from 'react'
import "../../assets/sass/header.sass"
import KamieIcon from './svg/KamieIcon'


const Header = () => {
  return (
    <header>
        <div className='d-flex logo'>
          <KamieIcon size='lg'/>
          <h1>Kamie</h1>
        </div>

    </header>
  )
}

export default Header