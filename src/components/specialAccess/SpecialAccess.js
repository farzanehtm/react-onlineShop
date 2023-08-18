import React from 'react'
import { Link } from 'react-router-dom'
import "./specialAccess.css"

const SpecialAccess = () => {
  return (
    <section className="special-access mt-2">
        <div className="row">
            <div className="col-md-12 titlediv">
                <h3 className="header-title">بخش ویژه</h3>
            </div>

            <div className="col-md-12">
                <div className="row">

                    <div className="col-md-6 specialaccessbox mt-2">
                        <Link to="/">
                            <div className="specialaccessinof"><p>لافار</p></div>
                            <img src="images/638231979151237929.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="col-md-6 specialaccessbox mt-2">
                        <Link to="/">
                            <div className="specialaccessinof"><p>پریم</p></div>
                            <img src="images/638229390144920579.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="col-md-6 specialaccessbox mt-2">
                        <Link to="">
                            <div className="specialaccessinof"><p>کالیستا</p></div>
                            <img src="images/638220150388725711.jpg" alt="" />
                        </Link>
                    </div>
                    
                    <div className="col-md-6 specialaccessbox mt-2">
                        <Link to="/">
                            <div className="specialaccessinof"><p>هیدرودرم</p></div>
                            <img src="https://cdn.khanoumi.com/adw/638200849443155910.jpg?w=580" alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialAccess
