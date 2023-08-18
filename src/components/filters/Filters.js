import React, { useState } from 'react'
import './filters.css'
import {FaPlus, FaMinus} from 'react-icons/fa'
import Slider from "react-slider"
import { Link } from 'react-router-dom';

const MIN=100000;
const MAX=2000000;

function valuetext(value){
    return `${value} تومان`
}

const Filters = ({handleFilterChange}) => {


    const [brandClicked, setBrandClick]= useState(true);
    const [priceClicked, setPriceClick]= useState(true);
    const [sliderValue,setSliderValue]= useState([MIN,MAX]);

    const handleBrandClick=()=>{
        setBrandClick(!brandClicked);         
    }

    const handlePriceClick=()=>{
        setPriceClick(!priceClicked);         
    }

    const handleSliderChange=(event , newValue)=>{
        setSliderValue(newValue);
    }




  return (
    <div className="filtercol">
        <div className="filterContainerItem cart active">
            <ul className="sortingitem">
                <li className="sortingli">
                    <label htmlFor="lang" className="ps-3">به ترتیب: </label>
                    <select className="form-select-sm" name="languages" id="lang" onChange={handleFilterChange}>
                        <option value="newest">جدیدترین</option>
                        <option value="expensive">گران ترین</option>
                        <option value="cheapest">ارزان ترین</option>
                        <option value="Bestselling">پرفروش ترین</option>
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
                                    <Link to="/" className="mb-1 pointer">دسته بندی بر اساس کتگوری</Link>
                                    { brandClicked ? <FaPlus color="#f2859a" onClick={handleBrandClick} /> :<FaMinus color="#f2859a" onClick={handleBrandClick} />}
                                </div>
                                <ul style={{display:brandClicked ? 'none' :'block'}} className="kindofpro bdyno11_body_right">
                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        آرایشی                                          
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        مراقبت پوست                                            
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        مراقبت مو                                           
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        بهداشت شخصی                                           
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        عطر و ادکلن                                           
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        مد و اکسسوری                                           
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        لوازم برقی شخصی                                          
                                            <input className="searchinput" type="checkbox" name="brand_   " value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label className="container1" data-id="searchbrand">         
                                        مادر و کودک                                            
                                            <input className="searchinput" type="checkbox" name="brand_" value="brand_261" id="brand_261"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>

                                </ul>
                            </li>

                            <li >
                                <div className="d-flex justify-content-between">
                                    <Link to="/" className="mb-1 pointer">دسته بندی بر اساس قیمت</Link>
                                    { priceClicked ? <FaPlus color="#f2859a" onClick={handlePriceClick} /> :<FaMinus color="#f2859a" onClick={handlePriceClick} />}
                                </div>
                                
                                <ul style={{display:priceClicked ? 'none' :'block'}}>
                                    
                                    {/* <ReactSlider
                                    className="slider"
                                    thumbClassName="thumb"
                                    trackClassName="slider-track"
                                    handleClassName="slider-handle" 
                                    defaultValue={sliderValue}
                                    ariaLabel={['Lower thumb', 'Uper thumb']}
                                    pearling
                                    min={0}
                                    max={1000000}
                                    onChange={handleSliderChange}
                                    allowCrossover={false}
                                    /> */}

                                    <div>
                                        <span className={"range-value"}>{sliderValue[1]} تومان - {sliderValue[0]} تومان</span>
                                    </div>
                                    <Slider className={"slider-value"}
                                        trackClassName={"pink-track"}
                                        onChange={setSliderValue} 
                                        value={sliderValue} 
                                        min={MIN} 
                                        max={MAX}
                                        pearling
                                        minDistance={10000}/>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Filters
