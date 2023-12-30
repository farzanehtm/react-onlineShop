import React, { useState,useContext } from 'react'
import './filters.css'
import {FaPlus, FaMinus} from 'react-icons/fa'
import Slider from "react-slider"
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Context'
import * as myModule  from '../../module/module';


const MIN=50000;
const MAX=500000;

// function valuetext(value){
//     return `${value} تومان`
// }

const Filters = ({handleFilterChange}) => {

    const product  = useContext(CartContext);
    const [brandClicked, setBrandClick]= useState(true);
    const [priceClicked, setPriceClick]= useState(true);
    const [sliderValue,setSliderValue]= useState([MIN,MAX]);

    const handleBrandClick=()=>{
        setBrandClick(!brandClicked);         
    }

    const handlePriceClick=()=>{
        setPriceClick(!priceClicked);         
    }

    const handleSliderChange=(newValue)=>{
        setSliderValue(newValue);
        console.log(newValue);
        product.filterByPrice(newValue);
    }




  return (
    <section className="me-3">
        <div className="filterContainerItem cart active">
            <ul className="sortingitem">
                <li className="sortingli">
                    <label htmlFor="lang" className="ps-3">به ترتیب: </label>
                    <select className="form-select-sm" name="languages" id="lang" onChange={product.handleFilterChange}>
                        <option value="newest">جدیدترین</option>
                        <option value="expensive">گران ترین</option>
                        <option value="cheapest">ارزان ترین</option>
                    </select>
                </li>
            </ul>
        </div>

        <div className="mobilePaddingRemove filterContainerItem cart active">
            <div style={{paddingRight: "10px", marginBottom: "10px"}}>با فیلتر(های):</div>
            <div id="bdyno12_catH1">   <span className="tagsselected"  data-id="unAvailable_1">عدم نمایش کالاهای تمام شده </span></div>
        </div>

        <div className="filterContainerItem cart active">
            <li className="hasnotchild ">
                <Link to="/">
                    فقط کالاهای موجود
                    <div className="swichCheck">
                        <input className="ios-switch" type="checkbox" name="unAvailable" value="unAvailable_1" id="unAvailable_1"/>
                        <label htmlFor="unAvailable_1" className="ios-switch-label"></label>
                    </div>
                </Link>
            </li>

            <div id="accordian1">
                <ul>
                    <li className="catsli active">
                        <ul>
                            <li>
                                <div className="d-flex justify-content-between">
                                    <Link to="/" className="mb-1 pointer">دسته بندی بر اساس دسته بندی</Link>
                                    { brandClicked ? <FaPlus color="#f2859a" onClick={handleBrandClick} /> :<FaMinus color="#f2859a" onClick={handleBrandClick} />}
                                </div>
                                <ul style={{display:brandClicked ? 'none' :'block'}} className="">
                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("آرایشی")}>
                                            <label className="container1" data-id="searchbrand">         
                                                آرایشی                                         
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link> 
                                    </li>

                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("مراقبت پوست")}>
                                            <label className="container1" data-id="searchbrand">         
                                                مراقبت پوست                                           
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link> 
                                    </li>

                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("مراقبت مو")}>
                                            <label className="container1" data-id="searchbrand">         
                                                مراقبت مو                                          
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link> 
                                    </li>

                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("بهداشت شخصی")}>
                                            <label className="container1" data-id="searchbrand">         
                                                بهداشت شخصی                                          
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link> 
                                    </li>

                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("عطر و ادکلن")}>
                                            <label className="container1" data-id="searchbrand">         
                                                عطر و ادکلن                                           
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/products/" onClick={()=>product.filterByCategory("مادر و کودک")}>
                                            <label className="container1" data-id="searchbrand">         
                                                مادر و کودک                                            
                                                <input className="searchinput" type="checkbox" name="brand" value="brand_261" id="brand_261"/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li >
                                <div className="d-flex justify-content-between">
                                    <Link to="/" className="mb-1 pointer">دسته بندی بر اساس قیمت</Link>
                                    { priceClicked ? <FaPlus color="#f2859a" onClick={handlePriceClick} /> :<FaMinus color="#f2859a" onClick={handlePriceClick} />}
                                </div>
                                
                                <ul style={{display:priceClicked ? 'none' :'block'}}>

                                    <div>
                                        <span className={"range-value"}>{myModule.formatCurrency(sliderValue[1])} تومان - {myModule.formatCurrency(sliderValue[0])} تومان</span>
                                    </div>
                                    <Slider className={"slider-value"}
                                        trackClassName={"pink-track"}
                                        onChange={handleSliderChange} 
                                        value={sliderValue} 
                                        min={MIN} 
                                        max={MAX}
                                        step={1000}
                                        pearling
                                        minDistance={1000}/>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Filters
