import "./mySelection.css"

const MySelection= () => {
  return (
    <section className="boomrang-section mt-2">
            <div className="col-md-12 titlediv">
                <h3 className="header-title">انتخاب خانومی</h3>
            </div>

            <div className="col-md-12">
                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3 ">
                    {/* <Link to="/"> */}
                        <div className="brandbox"></div>
                        <img src="images/638361004170891540.jpg" alt="" />
                    {/* </Link> */}
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    {/* <Link to="/"> */}
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638361004065495998.jpg" alt="" />
                    {/* </Link> */}
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    {/* <Link to="/"> */}
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638361003969743281.jpg" alt="" />
                    {/* </Link> */}
                </div>

                <div className="col-6 col-sm-6 col-md-3 boomrangbox mt-3">
                    {/* <Link to="/"> */}
                        <div className="brandbox">
                            <span className="specialbrand"></span>
                            <span className="specialbrandgrey"></span>
                        </div>
                        <img src="images/638361003867175940.jpg" alt="" />
                    {/* </Link> */}
                </div>

            </div>
    </section>
  )
}

export default MySelection
