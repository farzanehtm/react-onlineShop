import React ,{useState,useContext,useEffect} from 'react'
import {DataContext} from '../../context/Context'
import "./navbar.css"
import {FaTruckMoving,FaRegQuestionCircle,FaShoppingCart,FaUser} from 'react-icons/fa';
import toppLogo from '../../assets/images/logonomy-1690641880044.jpeg'
import { Link } from 'react-router-dom'

const Navbar = ({filterByBrand}) => {

  // const value=useContext(DataContext);
  // const [productsItems,setProductsItems]=value.products;
  // const [uniqeBrands,setuniqeBrands]=useState([]);
  // const  uniqeBrands=[...new Set(products.map(product => product.brand))];

  // useEffect(()=>{
  //   const uniqe=[...new Set(productsItems.map(product => product.brand))];
  //   setuniqeBrands(uniqe);
  // },[uniqeBrands])

  

  const [isHovered, setIsHovered]=useState(true);
  const [isCollapsed, setIsCollapsed]=useState(false);

  const handleMouseEnter=()=>{
    setIsHovered(!isHovered)
  }

  const handleToggleMenu=()=>{
    setIsHovered(!isCollapsed)
  }

  return (
    <nav className="">
      <div className="nav-top">
        <nav className="navbar header-top">
          <div className="container d-flex justify-content-end">
                <ul className="navbar-nav justify-content-center flex-row">
                    <li className="link-item"><Link to="#" className="nav-link" ><FaTruckMoving /> &nbsp;&nbsp;&nbsp;ارسال رایگان</Link></li>
                    <li className="link-item me-3"><Link to="#" className="nav-link"><FaRegQuestionCircle /> &nbsp;&nbsp;&nbsp;راهنمایی</Link></li>
                </ul>
          </div>
        </nav>
      </div>

      <div className="nav-bottom">
        <nav className="navbar navbar-expand-md bg-white d-flex align-items-center flex-sm-column">
                <Link to="/"><img src={toppLogo} className="topLogo w-30 pe-3" style={{display:isCollapsed  ? 'block' :'none'}} alt="" /></Link>
                <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container d-flex justify-content-between">
                      <div className={`collapse navbar-collapse menu-right p-2 w-50 ${isCollapsed ? 'show':''}`} id="navbarTogglerDemo01">
                        {/* <Link to="/"><img src={toppLogo} className="topLogo w-30 m-auto" alt="" /></Link> */}
                        <ul className="navbar-nav responsive-nav d-flex justify-content-start flex-row">
                            <li className="link-item "><Link to="/products" className="nav-link" >محصولات</Link></li>

                            <li className="link-item me-3 dropdown" onClick={handleMouseEnter} >
                              <Link to="" className="nav-link">برندها</Link>
                              <div className="megaMenu"  id="topMenu2" style={{display:isHovered ? 'none' :'block'}} >
                                <div id="topBrands d-flex flex-column">
                                    {/* {
                                      uniqeBrands.map((brand,index) => (
                                          <Link key={index} to='/products/'  className="aLink" onClick={()=>filterByBrand(brand)}>{brand}</Link>
                                      ))
                                    } */}

                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("لافارر")}>لافارر</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("سی گل")}>سی گل</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("کالیستا")}>کالیستا</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("سینره")}>سینره</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("مورینگا")}>مورینگا</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("سریتا")}>سریتا</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("ساین اسکین")}>ساین اسکین</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("نئودرم")}>نئودرم</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("پریم")}>پریم</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("شون")}>شون</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("هیدرودرم")}>هیدرودرم</Link>
                                      <Link to='/products/'  className="aLink" onClick={()=>filterByBrand("دیپ سنس")}>دیپ سنس</Link>
                                </div>
                                </div>
                            </li>

                            <li className="link-item me-3 "><Link to="/products" className="nav-link width-auto li-hasBg">پیشنهاد ویژه</Link></li>
                            <li className="link-item me-3">
                              <Link to="/products" className="nav-link">مجله نیکو آرا</Link>   
                            </li>
                        </ul>
                      </div>

                      <div className="menu-left me-auto">
                        <ul className="navbar-nav d-flex justify-content-end">
                                    {/* badan rosh kar beshe  */}
                            {/* <li className="link-item"><Link to="#" className="nav-link shopingCartMenu"><FaUser fontSize="1.5em" /> &nbsp;&nbsp;سلام</Link></li> */}
                            <li className="link-item me-3"><Link to="#" className="nav-link opemSideNav"><FaShoppingCart color="#ffddd2" fontSize="1.5em" /></Link></li>
                            
                        </ul>
                      </div>
                </div>
          </nav>
      </div>
    </nav>

  )
}

export default Navbar