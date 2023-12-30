import "react-slideshow-image/dist/styles.css";
import "./boomrang.css";


const images = [
    'images/638366861505448607.jpg',
    'images/638232031616424336.jpg',
    'images/638231956016034099.jpg',
    'images/638232887711362335.jpg',
    'images/638232004213992221.jpg',
    'images/638202609555004460.jpg'
  ];

  const Boomrang = () => {
    return(
        <section className="boomrangsection">
            <div className="mx-auto pink-box-container d-flex flex-column justify-content-center">
                <div className="pink-box-header">
                    <img src="images/pink-box-logo.svg" alt="" />
                </div>
                <div className="swiper d-flex flex-row justify-content-center">
                    {
                    images.map((image,index)=>(
                        <div key={index} className="swiper-wraper mx-2">
                            <div className="swiper-slide">
                                
                                    <img src={image} alt="" />
                                
                            </div>
                        </div>    
                    ))
                    }
                </div>
            </div>
        </section>
    )
  }

  export default Boomrang