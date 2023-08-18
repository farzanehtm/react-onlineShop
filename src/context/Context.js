import React,{createContext, useState,useEffect} from 'react';
import {DATAPRODUCT} from './data'

export const DataContext = createContext()

export const DataProvider =(props)=>{
    const [products,setProducts]= useState(DATAPRODUCT)
    const [filterProducts,setFilterProducts]= useState(DATAPRODUCT)

    const [cart,setCart]=useState([])

    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        if(dataCart) setCart(dataCart)
    },[])

    useEffect(()=> {
        localStorage.setItem("dataCart", JSON.stringify(cart))
    },[cart])

    console.log(cart)
    const addCart=(id)=>{
        const check=cart.every(item=>{
            return item.id !== id
        })
        
        if(check){
        const data= products.filter(product=>{
            return product.id ===id 
        })
        setCart([...cart,...data])
        }else{
            alert("این محول در سبد خرید موجود است.")
        }
    }

    const increase=(id)=>{
        cart.forEach(item => {
            if(item.id === id){
                item.count += 1;
            }
        });
        setCart([...cart])
    }
    

    const decrease=(id)=>{
        cart.forEach(item => {
            if(item.id === id){
                item.count ===1 ? item.count=1 : item.count-= 1;
            }
        });
        setCart([...cart])
    }

    const removeProduct=(id)=>{
        if(window.confirm("آیا از حذف محصول مطمئنید؟")){
            cart.forEach((item,index)=>{
                if(item.id === id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
        }
    }

    const value={
        products:[ products , setProducts],
        cart:[cart,setCart],
        addCart:addCart,
        increase:increase,
        decrease:decrease,
        removeProduct:removeProduct
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
