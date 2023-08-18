import React from 'react'
import { Link } from 'react-router-dom'

const TwoImage = () => {
  return (
    <section className="banner-one-image mt-4 mx-auto">
        <div className="home-slider-one d-flex">
          <Link to="/">
            <img  src="images/638257912356702046.jpg" alt="" />
          </Link>
        </div>
    </section>
  )
}

export default TwoImage
