import React,{useContext, useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import {FaStar,FaBell,FaShoppingCart,FaPlus,FaMinus,FaRegCheckCircle,FaTimes,FaExclamationTriangle,FaRegTrashAlt} from 'react-icons/fa'
import { Link, useParams,useNavigate } from 'react-router-dom'
import {DataContext} from '../../context/Context'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./productOne.css"

const ProductOne = () => {



    const {id} =useParams();
    // console.log(id);
    const value=useContext(DataContext);
    const addCart=value.addCart;
    const increase=value.increase;
    const decrease=value.decrease;
    const removeProduct=value.removeProduct;
    const [products,setProducts]=value.products;
    const [basket,setBasket]=value.cart;
    const [finalPrice,setfinalPrice]=useState(0)
    const [modalIsOpen,setModalIsOpen]=useState(false);
    const [showShoppingCartPage,setShowShoppingCartPag]=useState(false)
    const navigate =useNavigate ();

    console.log(finalPrice)
    useEffect(() => {
        const getfinalPrice=()=>{
            const res=basket.reduce((prev,item)=>{
                return prev+ (item.price * item.count)
            },0)
            setfinalPrice(res)
        }
        getfinalPrice()
    }, [basket]);

    if(basket.length===0){
        <h2>سبد خرید شما خالی است</h2>
    }

    const openModal=()=>{
        setModalIsOpen(true);
        addCart(id);
    }

    const closeModal=()=>{
        setModalIsOpen(false)
    }

    const openShoppingCartPage=()=>{
        setShowShoppingCartPag(!showShoppingCartPage)
    }

    const closeShoppingCartPage=()=>{
        setShowShoppingCartPag(false)
    }

    const moreShop=()=>{
        navigate('/products');
    }



    const details=products.filter((product,index)=>{
        return product.id === id;
    })

    // console.log(details)

  return (
    <>
      <Navbar/>
      <div className="container mb-3">
        <div className="row">
            {/* <div className="col-md-12 p-0">
                <div className="col-md-12">
                    <div className="productHeader">
                        <div className="productNav">
                            <span>آرایشی</span>
                        </div>
                    </div>
                </div>
            </div> */}

            {
                details.map((product)=>{
                    const {id,image,brand,title,price,count}= product;
                    return(
                    <div key={id} className="col-md-12 p-0 mt-3">
                        <div className="productMainContainer d-flex">
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

                                <div className="rateContainer">
                                    <div>
                                        <div className="like-stars ps-2">
                                            <FaStar color="#FCC200"/>
                                            <FaStar color="#FCC200"/>
                                            <FaStar color="#FCC200"/>
                                            <FaStar color="#FCC200"/>
                                            <FaStar color="#F3E5E5"/>
                                        </div>
                                    </div>

                                    <div className="rateNumber"> 3.2 از 5</div>
                                    <a className="commentCount" href="#cmfullcontent">(81 نظر)</a>
                                </div>

                                <div className="priceMainContainer cblk">
                                    <span>قیمت :</span>
                                    <span className="prePrice">{price}</span>
                                    <span className="PriceInTop">84,900تومان</span>
                                    <div className="priceSeprator"></div>
                                    <span className="OffInPrices">50٪ تخفیف</span>
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
                                                    <img src={image} alt="" />
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

                                        <div className="btn quantityBtn me-1">
                                            <div id="totalbar">
                                                <span className="ico arroleft">
                                                    <FaPlus size={11}  onClick={()=>increase(id)}/>
                                                </span>
                                                <input type="text" id="totalp" value={`${count}`} readOnly="readonly" placeholder="تعداد"/>
                                                <span className="ico arroright">
                                                    <FaMinus size={11} onClick={()=>decrease(id)}/>
                                                </span>
                                            </div>
                                        </div>
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
                                                                basket.map(item=>{
                                                                    const {id,image,brand,title,price,count}= item;
                                                                    return(
                                                                        <ul className="shoppingCartList">
                                                                            <li className="shoppingCartItem">
                                                                                <button className="shoppingRemoveItem">
                                                                                    <FaRegTrashAlt size={"17px"} onClick={()=>removeProduct(id)}/>
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
                                                                                    <span className="size-title">سایز : </span>
                                                                                    20ml
                                                                                </div>

                                                                                <div className="sumPrice">
                                                                                    <span className="sum-price">جمع قیمت</span>
                                                                                    917.800
                                                                                </div>

                                                                                <div className="offPrice">
                                                                                    <span className="off-price">تخفیف : </span>
                                                                                    318.200
                                                                                </div>

                                                                                <div className="shoppingCartItemPrice">
                                                                                    قابل پرداخت : 
                                                                                    <span className="ActualPrice">
                                                                                        599.600&nbsp;
                                                                                        <span style={{fontSize:"12px"}}>تومان </span>
                                                                                    </span>
                                                                                </div>

                                                                                <div className="shoppingCartItemCount">
                                                                                    <button className="MinusItemCount ">
                                                                                        <FaMinus onClick={()=>decrease(id)} />
                                                                                    </button>

                                                                                    <input type="text" className="InputItemCount" value={count} />

                                                                                    <button className="PlusItemCount">
                                                                                        <FaPlus onClick={()=>increase(id)} />
                                                                                    </button>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    )
                                                                })
                                                            }

                                                            <div className="basket_summery">
                                                                <div className="d-flex align-items-stretch justify-content-around">
                                                                    <div className="text-center">
                                                                        <span className="summary_title">جمع قابل پرداخت</span>
                                                                        <div className="sum_price">
                                                                            <div className="sum_price_text">
                                                                                <span id="cartSum">599.600</span>
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
                                                                                <span className="cartDiscount">318,200</span>
                                                                                <span className="basket-off-currency">تومان</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="shoppingCartCheckout d-flex">
                                                                
                                                                    <button className="btnshcFooterSecond mx-1">خرید کالاهای بیشتر</button>
                                                                    <button className="btnshcFooter mx-1">تکمیل خرید</button>
                                                                
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
    </>
  )
}

export default ProductOne
