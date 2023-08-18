import React from 'react'
import "./magazine.css"
import { Link } from 'react-router-dom'

const Magazine = () => {
  return (
    <section className="magazine mt-2">
        <div className="row">
            <div className="col-md-12 titlediv px-0">
                <h3 className="header-title">مجله خانومی</h3>
            </div>

            <div className="col-md-12 d-flex flexcolumn">
                <div className="col-md-6 magazinebox ms-2">
                    <Link to="/">
                        <div className="magazineinof">
                            <p className="magazineinoftitle"></p>
                            <p></p>
                        </div>
                        <img src="images/638204299610435437.jpg" alt="" />
                    </Link>
                </div>

                <div className="col-md-6 magazinebox me-2">
                    <Link to="/">
                        <div className="magazineinof">
                            <p className="magazineinoftitle"></p>
                            <p></p>
                        </div>
                        <img src="images/638204300113148972.jpg" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Magazine
