import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Main allProducts={allProducts}></Main>
    </>
  );
}

export default App;
