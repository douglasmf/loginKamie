import React from 'react'
import KamieIcon from './svg/KamieIcon'
import "../../assets/sass/footer.sass"
const Footer = () => {
  return (
    <footer>
        <div className="logo">
            <KamieIcon size="sm" className="d-flex"/>
            <h1>Kamie</h1>
        </div>
        <span>&copy; Copyright 2023</span>
    </footer>
  )
}

export default Footer
