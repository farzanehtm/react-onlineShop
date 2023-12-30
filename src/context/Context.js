
import { createContext, useState} from 'react'
import { getProductData,productList } from '../data/items'

export const CartContext = createContext({
    items: [],
    filterProducts:[],
    result:[],
    getProductQuantity: () => {},
    addItemToCart: () => {},
    increaseItemInCart:()=>{},
    removeItemFromCart: () => {},
    deleteFromCart: () => {},
    getTotalAmount: () => {},
    filterByCategory:()=>{},
    filterByBrand:()=>{},
    filterByPrice:()=>{},
    handleFilterChange:()=>{},
    suggestProducts:()=>{}
  })

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]) 
    const [productsItems,setProductsItems]=useState(productList);
    const [input, setInput]= useState("")
    const [result,setResult]=useState([]);

  
    function getProductQuantity(id) {
      const count = cartProducts.find((item) => item.id === id)?.count
  
      if (count === undefined) {
        return 0
      }
  
      return count
    }
  
    function addItemToCart(id) {

      const check=cartProducts.every(item=>{
        return item.id !== id
      })
    
    if(check){
    const data= productList.filter(product=>{
        return product.id ===id 
    })
    setCartProducts([...cartProducts,...data])
    }else{
        alert("این محول در سبد خرید موجود است.")
    }

    }

    function increaseItemInCart(id) {
      cartProducts.forEach(item => {
          if(item.id === id){
              item.count += 1;
          }
        });
      setCartProducts([...cartProducts])
    }


  
    function deleteFromCart(id) {
      if(window.confirm("آیا از حذف محصول مطمئنید؟")){
        cartProducts.forEach((item,index)=>{
            if(item.id === id){
              cartProducts.splice(index,1)
            }
        })
        setCartProducts([...cartProducts])
    }
    }
  
    function removeItemFromCart(id) {
      cartProducts.forEach(item => {
        if(item.id === id){
          item.count ===1 ? item.count=1 : item.count-= 1;
        }
      });
    setCartProducts([...cartProducts])
    }
  
    function getTotalAmount() {
      let totalAmount = 0
      cartProducts.map((item) => {
        const productData = getProductData(item.id)
  
        totalAmount += item.price * item.count
      })
      console.log(totalAmount)
      return totalAmount
    }

    function filterByCategory(category) {
      const filteredProducts = productList.filter((product) => {
        return product.category === category;
      });
    
      setProductsItems(filteredProducts);
    }

    function filterByBrand(brand){
      const filteredProducts = productList.filter((product) => {
        return product.brand === brand;
      });
    
      setProductsItems(filteredProducts);
    }

    function filterByPrice(value){
      const filteredProducts = productsItems.filter((product) => {
        return product.price >= value[0] && product.price <= value[1];
      });
    
      setProductsItems(filteredProducts);
    }

    function handleFilterChange(event){
      let value= event.target.value;
      let filteredProducts= [...productsItems];

      if (value === 'expensive'){
        filteredProducts=filteredProducts.sort((a,b)=>{
          if(a.price> b.price) return -1;
          if(a.price < b.price) return 1;
          return 0;
        });
        console.log(filteredProducts)
        setProductsItems(filteredProducts) 
      }
    
      if (value === 'cheapest'){
        filteredProducts=filteredProducts.sort((a,b)=>{
          if(a.price < b.price) return -1;
          if(a.price > b.price) return 1;
          return 0;
        });
        console.log(filteredProducts)
        setProductsItems(filteredProducts) 
      }

      if (value === 'newest'){
        filteredProducts=filteredProducts.sort((a,b)=>{
          if(a.id > b.id) return -1;
          if(a.id < b.id) return 1;
          return 0;
        });
        console.log(filteredProducts)
        setProductsItems(filteredProducts)
      }
    }

    function suggestProducts(value){

      setInput(value);
      const results = [];

      for (const product of productList) {
        if( value && product && product.title){
          if (product.title.includes(value)){
            results.push(product)
          }
        }
      }
      if (results.length > 6) {
        results.splice(5, results.length);
    }
      setResult(results)
      
    }
  
    const ContextValue = {
      items: cartProducts,
      filterProducts:productsItems,
      result:result,
      getProductQuantity,
      addItemToCart,
      increaseItemInCart,
      removeItemFromCart,
      deleteFromCart,
      getTotalAmount,
      filterByCategory,
      filterByBrand,
      filterByPrice,
      handleFilterChange,
      suggestProducts
    }
  
    return (
      <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
    )
  }

