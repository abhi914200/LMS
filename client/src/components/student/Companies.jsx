import React from 'react'
import {assets} from '../../assets/assets'
function Companies() {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500 text-center' >Trusted by learners from</p>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="microsoft-logo" />
        <img src={assets.adobe_logo} alt="adobe-logo" />
        <img src={assets.walmart_logo} alt="walmart-logo" />
        <img src={assets.paypal_logo} alt="paypal-logo" />
        <img src={assets.accenture_logo} alt="accenture-logo" />
    
      </div>
    </div>
  )
}

export default Companies
