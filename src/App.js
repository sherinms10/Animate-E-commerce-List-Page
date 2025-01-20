
import React, { useState, useEffect } from "react";
import Card from "./Components/card";
import Filter from "./Components/filter";
import Loading from "./Components/loading";
import productData from './products.json'
import { Toaster } from "react-hot-toast";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleFilterChange = (filter) => {
    console.log(`Filter applied: ${filter}`);
  };

  const handleSortChange = (sort) => {
    console.log(`Sort applied: ${sort}`);
    let sortedProducts;
    if (sort === "Price: Low to High") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sort === "Price: High to Low") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Shop</h1>
      </header>
      <Filter
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <Toaster />
      {loading ? (
        <Loading />
       
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map((product) => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
            
          ))}
          
        </div>
      )}
      
    </div>
  );
};

export default App;

