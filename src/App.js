import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import ProductOne from "./pages/productItem/ProductOne";
import Products from "./pages/products/Products";
import { DataProvider } from './context/Context';


function App() {
  return (
    
    <DataProvider>
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<ProductOne />}/>
        </Routes>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
