import Filters from '../../components/filters/Filters'
import Navbar from '../../components/navbar/Navbar'
import ProductsItem from '../../components/productsItem/ProductsItem'




const Products = () => {

  return (
    <>
    <section>
        <Navbar />  
            <div className="row" style={{marginTop:"72px"}}>
                <div className="col-3">
                    <Filters />
                </div>
                <div className="col-9">
                    <ProductsItem />
                </div>
            </div>
    </section>      
    </>
  )
}

export default Products
