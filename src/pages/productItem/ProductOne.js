import React,{useContext, useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import {FaStar,FaBell,FaShoppingCart,FaPlus,FaMinus,FaRegCheckCircle,FaTimes,FaExclamationTriangle,FaRegTrashAlt} from 'react-icons/fa'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/Context'
import { getProductData,productList } from '../../data/items'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./productOne.css"
import * as myModule  from '../../module/module';

const ProductOne = () => {



    const {id} =useParams();
    const productData = getProductData(id)
    const cart= useContext(CartContext)

    const [modalIsOpen,setModalIsOpen]=useState(false);
    const [showShoppingCartPage,setShowShoppingCartPag]=useState(false)
    const navigate =useNavigate ();

    useEffect(() => {
    },[modalIsOpen]);



    const openModal=()=>{
        setModalIsOpen(true);
        cart.addItemToCart(id);
    }

    const closeModal=()=>{
        setModalIsOpen(false);
    }

    const openShoppingCartPage=()=>{
        setShowShoppingCartPag(!showShoppingCartPage);
        setModalIsOpen(false);
    }

    const moreShop=()=>{
        navigate('/products/');
    }



  return (
    <>
      <section style={{marginTop:"72px"}}>
        <Navbar/>
        <div className="container mb-3">
            <div className="row">
            

                {
                    productData.map((product)=>{
                        const {id,image,brand,title,price,count}=product;
                        
                        return(
                        <div key={id} className="col-md-12 p-0 mt-3">
                            <div className="productMainContainer d-flex" >
                                <div className="col-12 col-lg-5 productImageContainer">
                                    <div className="proimgcontainer">
                                        <div className="image__container">
                                            <img className="img mx-auto d-block" src={image[1]} alt="" /> 
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-7 pt-5 me-4">
                                    <div className="mainTitleContainer">
                                        <h1 className="productTitle">
                                            {title}&nbsp;{brand}
                                        </h1>
                                    </div>

                                    <div className="subTitleContainer">
                                        <h2>        
                                        Lafarrerr Toner Multi Active 1 For Oily And Combination Skin 170ml
                                        </h2>
                                    </div>

                                    

                                    <div className="priceMainContainer cblk">
                                        <span>قیمت :</span>
                                        <span className="prePrice"></span>
                                        {/* <span className="PriceInTop">{price}</span> */}
                                        <div className="priceSeprator"></div>
                                        <span className="OffInPrices">{myModule.formatCurrency(price)}</span>
                                        <span className="unit pe-1">تومان</span>
                                        <div className="delay"></div>
                                        <br/>
                                        <br/> 
                                    </div>

                                    <div className="buyContainer">
                                        <div className="btnContainer">
                                            <Link to="/" id="addToBasketNotif" className="btn addToCartBtn notifyme js-check-notif" style={{display: "none"}}>
                                                به من اطلاع بده
                                                <FaBell />
                                            </Link>
                                            <Link to="#" className="ico shoping btn addToCartBtn" onClick={openModal}>
                                                <span className="ps-5">افزودن به سبد خرید</span>
                                                <FaShoppingCart />
                                            </Link>

                                            <div className="btn quantityBtn me-1">
                                                <div id="totalbar">
                                                    <span className="ico arroleft">
                                                        <FaPlus size={11}  onClick={()=>cart.increaseItemInCart(product.id)}/>
                                                    </span>
                                                    <input type="text" id="totalp" value={`${count}`} readOnly="readonly" placeholder="تعداد"/>
                                                    <span className="ico arroright">
                                                        <FaMinus size={11} onClick={()=>cart.removeItemFromCart(product.id)}/>
                                                    </span>
                                                </div>
                                            </div>

                                            <Modal show={modalIsOpen} onHide={closeModal}>
                                                <Modal.Header className="d-flex justify-content-between align-items-start p-2">
                                                    <h5 className="modal-title">
                                                        <FaRegCheckCircle size="40px" className="ps-1" />
                                                        به سبد شما اضافه شد
                                                    </h5>
                                                    <button className="close" onClick={closeModal}><span>X</span></button>                                  
                                                </Modal.Header>
                                                <Modal.Body className="d-flex justify-content-start align-items-center">
                                                    <div className="product-image">
                                                        <img src={image[1]} alt="" />
                                                    </div>
                                                    <div className="product-detail pe-2">
                                                        <h6>{title}</h6>
                                                        <p>{brand}</p>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer className="d-flex justify-content-between align-items-start">
                                                <Button className="btn-base blue" onClick={moreShop}>
                                                    خرید کالاهای بیشتر
                                                </Button>
                                                <Button className="btn-base pink" onClick={openShoppingCartPage}>
                                                    مشاهده سبد خرید
                                                </Button>
                                                </Modal.Footer>
                                            </Modal>

                                            
                                            {
                                                showShoppingCartPage &&(
                                                    <div className="ShoppingCartSideMenu" style={{backgroundColor:'#eee', zIndex:'99999'}}>
                                                        <div style={{width:'300px' , float:'left'}}>
                                                            <div className="shoppingCartSideMenu">
                                                                <div className="shoppingCartHeader">
                                                                    <span className="d-flex justify-content-between">
                                                                        <FaTimes style={{fontSize:"24px" ,color:"#f2859a"}} onClick={openShoppingCartPage} />
                                                                        <FaShoppingCart style={{fontSize:"24px" ,color:"#f2859a"}}/>
                                                                    </span>
                                                                </div>

                                                                <div className="zeroPadd">
                                                                    <div className="reservMsg">
                                                                        <FaExclamationTriangle />                                                          
                                                                            &nbsp;&nbsp;افزودن کالا به سبد، به معنای رزرو قیمت و تعداد نیست؛ برای رزرو باید پرداخت اینترنتی انجام شود.
                                                                    </div>
                                                                </div>

                                                                {
                                                                    cart.items.map((item)=>{
                                                                        const {id,image,brand,title,price,count}= item;
                                                                        return(
                                                                                <ul key={id} className="shoppingCartList">
                                                                                <li className="shoppingCartItem">
                                                                                    <button className="shoppingRemoveItem">
                                                                                        <FaRegTrashAlt size={"17px"} onClick={()=>cart.deleteFromCart(id)}/>
                                                                                    </button>

                                                                                    <Link to="#">
                                                                                        <img src={image[0]} alt="" />
                                                                                    </Link>

                                                                                    <div>
                                                                                        <Link to="#">
                                                                                            <p>{title}</p>
                                                                                        </Link>
                                                                                    </div>

                                                                                    <div className="size">
                                                                                        <span className="size-title">سایز :&nbsp;&nbsp;</span>
                                                                                        20ml
                                                                                    </div>

                                                                                    <div className="sumPrice">
                                                                                        <span className="sum-price">جمع قیمت :&nbsp;&nbsp;</span>
                                                                                        {myModule.formatCurrency(item.price*item.count)}
                                                                                    </div>

                                                                                    <div className="offPrice">
                                                                                        <span className="off-price">تخفیف : </span>
                                                                                        
                                                                                    </div>

                                                                                    <div className="shoppingCartItemPrice">
                                                                                        قابل پرداخت : 
                                                                                        <span className="ActualPrice">
                                                                                        {myModule.formatCurrency(item.price*item.count)}&nbsp;
                                                                                            <span style={{fontSize:"12px"}}>تومان </span>
                                                                                        </span>
                                                                                    </div><br />

                                                                                    <div className="shoppingCartItemCount">
                                                                                        <button className="MinusItemCount ">
                                                                                            <FaMinus onClick={()=>cart.removeItemFromCart(id)} />
                                                                                        </button>

                                                                                        <input type="text" id="totalp" value={`${count}`} readOnly="readonly"/>

                                                                                        <button className="PlusItemCount">
                                                                                            <FaPlus onClick={()=>cart.increaseItemInCart(id)} />
                                                                                        </button>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>        
                                                                        )})
                                                                }

                                                                    <div className="basket_summery">
                                                                    <div className="d-flex align-items-stretch justify-content-around">
                                                                        <div className="text-center">
                                                                            <span className="summary_title">جمع قابل پرداخت</span>
                                                                            <div className="sum_price">
                                                                                <div className="sum_price_text">
                                                                                    <span id="cartSum">{myModule.formatCurrency(cart.getTotalAmount())}</span>
                                                                                    <span id="cartSum">تومان</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="d-flex align-items-center">
                                                                            <hr className="divider-vertical" />
                                                                        </div>

                                                                        <div className="text-center">
                                                                            <span className="off_summary_title">جمع تخفیف</span>
                                                                            <div className="off_sum_price">
                                                                                <div className="off_sum_price_text">
                                                                                    <span className="cartDiscount"></span>
                                                                                    <span className="basket-off-currency"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="shoppingCartCheckout d-flex">
                                                                    
                                                                <Button className="btn-base blue btnshcFooterSecond mx-1" onClick={moreShop}>
                                                                    خرید کالاهای بیشتر
                                                                </Button>
                                                                <Button className="btn-base pink btnshcFooter mx-1">
                                                                    تکمیل  خرید
                                                                </Button>
                                                                    
                                                                </div>
                                                            </div>       
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )})
                }


            </div>
        </div>
      </section>
    </>
  )
}

export default ProductOne
