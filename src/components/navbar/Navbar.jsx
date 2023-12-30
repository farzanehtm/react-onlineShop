import React,{useContext} from 'react'
import toppLogo from '../../assets/images/khanoumi-logo.svg';
import {FaShoppingCart,FaUser,FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/Context'
import "./navbar.css"

const Navbar = () => {

  const product= useContext(CartContext)

    return(
      <header className="fixed-top">
        <div className="container-fluid bg-white">
          <div className=" w-100 d-flex align-items-center justify-content-between" style={{height:"72px"}}>
            <div className="w-50 d-flex menu">
              <Link to="/"><img width="96" height="40" style={{color: 'transparent'}} src={toppLogo} alt="" /></Link>

              <ul className="d-flex flex-fill align-self-center justify-content-around m-0">
                <li className="menu-products">
                  <Link to="/products/">محصولات</Link>
                    
                      <ul className="dropdown-products border border-light rounded d-flex justify-content-around align-items-center" style={{position: "absolute", width: "1000px", height: "50px",zIndex:"11", top:"52px", backgroundColor:"rgb(245,245,245)"}}>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("آرایشی")}>آرایشی</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("مراقبت پوست")}>مراقبت پوست</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("مراقبت مو")}>مراقبت مو</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("بهداشت شخصی")}>بهداشت شخصی</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("عطر و ادکلن")}>عطر و ادکلن</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("آقایان")}>آقایان</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("لوازم برقی شخصی")}>لوازم برقی شخصی</Link></li>
                        <li><Link to="/products/" onClick={()=>product.filterByCategory("مادر و کودک")}>مادر و کودک</Link></li>
                      </ul>
                    
                </li>

                <li className="menu-products">
                  <Link to="">برندها</Link>

                  <ul className="dropdown-products border border-light rounded d-flex flex-column bg-body" style={{position: "absolute", width: "200px", height: "330px",zIndex:"11", top:"52px"}}>
                  
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("لافارر")}>لافارر</Link></li>                        
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("سی گل")}>سی گل</Link></li>  
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("کالیستا")}>کالیستا</Link></li>   
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("سینره")}>سینره</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("مورینگا")}>مورینگا</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("سریتا")}>سریتا</Link></li>       
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("ساین اسکین")}>ساین اسکین</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("نئودرم")}>نئودرم</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("پریم")}>پریم</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("شون")}>شون</Link></li>   
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("هیدرودرم")}>هیدرودرم</Link></li>
                        <li><Link to='/products/'  className="aLink" onClick={()=>product.filterByBrand("دیپ سنس")}>دیپ سنس</Link></li>

                      </ul>
                </li>
                <li className="li-hasBg">پیشنهاد ویژه</li>
                <li>مجله خانومی</li>
              </ul>
            </div>

            <div className=" w-50 d-flex ">
                <form action="" className="w-75" id="">
                  <d className="d-flex justify-content-center align-items-center border border-light rounded bg-light">
                    <div className="d-flex">
                      <FaSearch color="#3f414d" fontSize="2em" className="mx-2"/> 
                      <input type="text" className="form-control-plaintext mx-2 bg-light border-0"  placeholder="جستجو..."  outline="none" onKeyUp={(event)=>product.suggestProducts(event.target.value)}/>
                    </div>
                    
                    <div className="w-100 d-flex flex-column" style={{visibility: product.result && product.result.length>0 ?'visible':'hidden'}}>
                      <ul className="border border-light rounded d-flex flex-column bg-body" style={{position: "absolute", width: "300px", maxHeight: "330px",zIndex:"11", top:"52px", left:"23rem"}}>
                        {product.result.map((product) => (
                          <li className="search-result m-1 px-1" key={product.id}><Link to={`/products/${product.id}`}  className="">{product.title}</Link></li>    
                        ))}
                      </ul>                
                    </div>
                      
                  </d>                
                </form>

                <div className="me-auto">
                  <FaUser color="#3f414d" fontSize="2em" />
                  <Link to="" className="me-4"><FaShoppingCart color="rgb(240,150,165)" fontSize="2em" /></Link>
                </div>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Navbar