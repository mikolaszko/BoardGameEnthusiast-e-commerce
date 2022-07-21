import React from 'react'
import Link from 'next/link'

import {urlFor} from '../utils/client'


const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="gloomhaven">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="board game" className="hero-banner-image"/>
      </div>

      <div>
        <Link href='/product/terraforming-mars'>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>

      <div className="desc">
        <h5>Description</h5>
        <p className='white'>{heroBanner.desc}</p>

      </div>
    </div>
  )
}

export default HeroBanner