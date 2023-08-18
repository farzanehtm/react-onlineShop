import React,{useContext,useEffect,useState,useMemo} from 'react'
import {DataContext} from '../../context/Context'
import Filters from '../../components/filters/Filters'
import Navbar from '../../components/navbar/Navbar'
import ProductsItem from '../../components/productsItem/ProductsItem'
import { event } from 'jquery'




const Products = () => {

  const value=useContext(DataContext);
  const [productsItems,setProductsItems]=value.products;
  // const [filterProductsItems,setfilterProductsItems]=value.filterProducts;
  // const [filterItems,setFilterItems]=value.products;
  // const [uniqeBrands,setuniqeBrands]=useState([]);
  // const [isLoad,setIsLoad]=useState(true);
  // const [dataforfilter,setDataforFilter]=value.products;
  
  // const  uniqeBrands=[...new Set(productsItems.map(product => product.brand))];
  // console.log(uniqeBrands)


  // let uniqeBrands;
  // useEffect(()=>{
  //   uniqeBrands=[...new Set(productsItems.map(product => product.brand))];
  //   console.log(uniqeBrands)
  // },[])

  const filterByBrand=(brand)=>{
    const newItem =productsItems.filter((item)=>item.brand === brand)
    setProductsItems(newItem)
  }

  const handleFilterChange=(event)=>{
    let value= event.target.value;
    let filterProducts= [...productsItems]
    console.log(value)
    if (value === 'expensive'){
      filterProducts=filterProducts.sort((a,b)=>{
        if(a.price> b.price) return -1;
        if(a.price < b.price) return 1;
        return 0;
      });
      console.log(filterProducts) 
    }

    if (value === 'cheapest'){
      filterProducts=filterProducts.sort((a,b)=>{
        if(a.price < b.price) return -1;
        if(a.price > b.price) return 1;
        return 0;
      });
      console.log(filterProducts) 
    }

    if (value === 'newest'){
      filterProducts=filterProducts.sort((a,b)=>{
        if(a.id > b.id) return -1;
        if(a.id < b.id) return 1;
        return 0;
      });
      console.log(filterProducts) 
    }
  }

  return (
    <>
      <Navbar filterByBrand={filterByBrand}/>
      <div className="mt-4">
        <div className="row">
            <Filters handleFilterChange={handleFilterChange} />
            <ProductsItem items={productsItems} />
        </div>
      </div>
    </>
  )
}

export default Products
