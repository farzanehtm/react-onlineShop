import React from 'react'
import "./spesialOffer.css"
import { Link } from 'react-router-dom'

const SpesialOffer = () => {
  return (
    <div className="special-offer mt-2 mx-auto">
        <div className="row">
            <div className="col-md-12 titlediv">
                <h3 className="header-title">پیشنهادهای ویژه</h3>
            </div>

            <div className="col-12 p-0">
                <div className="row">
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link to="/"><img src="images/638220202861866644.jpg" alt="" /></Link>
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link to="/"><img src="images/638220203648641978.jpg" alt="" /></Link>
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link href="/"><img src="images/638226823830864663.jpg" alt="" /></Link>
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link to="/"><img src="images/638226851592455240.jpg" alt="" /></Link>
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link to="/"><img src="images/638229368394475096.jpg" alt="" /></Link>
                    </div>
                    <div className="col-sm-12  col-md-6 col-lg-4 mt-3 specialofferbox">
                        <Link to="/"><img src="images/638229440128970029.jpg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpesialOffer
