import React from "react"
import "./oneImage.css"

const OneImage = (props) => {
  return (
    <section className="mt-2 mx-4">
        <div className="d-flex flex-column">
          {/* <Link to="/"> */}
            {/* <img className="rounded" src="images/638366724527548089.jpg" alt="" />
            <img className="rounded" src="images/638364327497612412.jpg" alt="" /> */}
          {/* </Link> */}

          {props.photos.map((photo) => (
            <img src={photo.src} alt={photo.alt} />
            ))}
        </div>
    </section>
  )
}

export default OneImage