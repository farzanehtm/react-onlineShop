import React from 'react'
import { Link } from 'react-router-dom'
import "./boomrangSection.css"

const BoomrangSection = () => {
  return (
    <section className="boomrang-section mt-2">
        <div className="row">
            <div className="col-md-12 titlediv">
                <h3 className="header-title">انتخاب خانومی</h3>
            </div>

            <div className="col-md-12">
                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    <Link to="/">
                        <div className="brandbox"></div>
                        <img src="images/638220224868054743.jpg" alt="" />
                    </Link>
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    <Link to="/">
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638220225025513879.jpg" alt="" />
                    </Link>
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    <Link to="/">
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638220225135101033.jpg" alt="" />
                    </Link>
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    <Link to="/">
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638220225235974433.jpg" alt="" />
                    </Link>
                </div>

            </div>
        </div>
    </section>
  )
}

export default BoomrangSection
