import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade , Zoom , Slide }from 'react-slideshow-image'

const images = [
  'images/638365127395693143.jpg',
  'images/638360999285114016.jpg',
  'images/638360998786689059.jpg',
  'images/638360998630054228.jpg',
  'images/638361019615312291.jpg'
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
    <div className="container-fluid p-0 w-100" style={{marginTop:"72px"}}>
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