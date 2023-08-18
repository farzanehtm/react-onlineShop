import React from 'react'
import "./productsItem.css"
import { Link } from 'react-router-dom';

const ProductsItem = ({items}) => {
//  console.log(items)

  return (
    <div className="productcol">
      <div className="d-flex flex-wrap justify-content-around pt-3">

        {
            items.map((product) =>{
                const {id,image,brand,title,price}= product;
                return(
                <div key={id} className="custom-card">
                    <Link to={`/products/${id}`}  className="">
                        <div className="content d-flex flex-column">

                            <div className="image-colors-container">
                                <div className="product-image-container">
                                    <img className="product-image lazyloaded" src={image[0]}/>
                                </div>
                            </div>

                            <div className="info">
                                <h5 className="content-title">{brand}</h5>
                                <p className="description">{title}</p>
                                <div className="price-section pt-1">
                                    <span className="price ps-1">169,850</span>
                                    <span className="badge badge-danger" style={{backgroundColor: "red"}}>30%</span>
                                    <p>
                                        <span className="effective-price">{price}</span>
                                        <span className="unit pe-1">تومان</span>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="card__footer pt-5">
                            <button type="button" className="btn btn-md btn-block button">افزودن به سبد خرید</button>
                        </div>
                    </Link>
                </div>
            )})
        }

      </div>
    </div>
  )
}

export default ProductsItem
