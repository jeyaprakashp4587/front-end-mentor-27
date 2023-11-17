import React from 'react'
import './sucess.css'
import Tick from '../assets/images/icon-thank-you.svg'

const Sucess = () => {
  return (
    <div className='sucess-wrapper'>
      <img src={Tick} alt="Tick" />
      <h3>Thank you!</h3>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform,If you ever need support,please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Sucess