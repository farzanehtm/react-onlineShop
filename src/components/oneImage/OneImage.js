import React from 'react'
import "./oneImage.css"
import { Link } from 'react-router-dom'

const OneImage = () => {
  return (
    <section className="banner-one-image mt-2 mx-auto">
        <div className="home-slider-one d-flex">
          <Link to="/">
            <img className="oneimage" src="images/638258857918898890.jpg" alt="" />
          </Link>
        </div>
    </section>
  )
}

export default OneImage
