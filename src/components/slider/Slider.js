import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade , Zoom , Slide }from 'react-slideshow-image'

const images = [
  'images/638257398641641980.jpg',
  'images/638257047939531402.jpg',
  'images/638257046961489198.jpg',
  'images/638257015334414682.jpg',
  'images/638257032530384834.jpg'
];

const divStyle ={
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize:"100vw 320px",
  backgroundPosition:"center center",
  backgroundRepeat:"no-repeat",
  height:"310px",
}


const Slider = () => {

  
  return (
    <div className="side-container">
      <Zoom>
        {
          images.map((image,index)=> (
            <div key={index}>
              <div style={{...divStyle, 'backgroundImage':`url(${image})`}}>
                {/* <span>Slide {index + 1}</span> */}
              </div>
            </div>
          ))
        }
      </Zoom>
    </div>

  )}

export default Slider