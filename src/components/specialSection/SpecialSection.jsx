import "./specialSection.css"

const SpecialSection = () => {
  return (
    <section className="special-access mt-2 mx-4">
        <div className="row">
            <div className="col-md-12 titlediv">
                <h3 className="header-title">بخش ویژه</h3>
            </div>

            <div className="col-md-12">
                <div className="row">

                    <div className="col-md-6 specialaccessbox mt-2">
                        {/* <Link to="/"> */}
                            <div className="specialaccessinof"><p>کالیستا</p></div>
                            <img src="images/638366193919668575.jpg" alt="" />
                        {/* </Link> */}
                    </div>

                    <div className="col-md-6 specialaccessbox mt-2">
                        {/* <Link to="/"> */}
                            <div className="specialaccessinof"><p>فولیکا</p></div>
                            <img src="images/638361001884277430.jpg" alt="" />
                        {/* </Link> */}
                    </div>

                    <div className="col-md-6 specialaccessbox mt-2">
                        {/* <Link to=""> */}
                            <div className="specialaccessinof"><p>پریم</p></div>
                            <img src="images/638361001581217642.jpg" alt="" />
                        {/* </Link> */}
                    </div>
                    
                    <div className="col-md-6 specialaccessbox mt-2">
                        {/* <Link to="/"> */}
                            <div className="specialaccessinof"><p>سینره</p></div>
                            <img src="images/638361001486266182.jpg" alt="" />
                        {/* </Link> */}
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialSection
