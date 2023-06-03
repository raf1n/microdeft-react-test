import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  const searchProducts = () => {
    event.preventDefault();
    const search = event.target.search.value;
    const searchedProducts = allProducts.filter();
  };

  const allProductsGet = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  };

  useEffect(() => {
    allProductsGet();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Main allProducts={allProducts} allProductsGet={allProductsGet}></Main>
    </>
  );
}

export default App;
