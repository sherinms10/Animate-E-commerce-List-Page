import React, { useState } from "react";
import toast from "react-hot-toast";

const Card = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  
  const handleAddToCart = (e) => {
    setIsFloating(true);
    setTimeout(() => setIsFloating(false), 1000);

    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      icon: (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>),
      duration: 2000,
      position: "top-right",
    });

    setIsAdding(true);
    setShowRipple(true);

    const rect = e.target.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
      setShowRipple(false);
    }, 600);

    onAddToCart(product);

    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <>
   
    <div className="p-4 hover:border-2 hover:border-sky-400 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full  object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg">{product.name}</h3>
            <div className="flex">
      <p className="text-black text-xl font-semibold">₹{product.price}</p>
      <p className="text-gray-500 line-through ml-2 text-sm mt-1">₹{product.ogprice}</p>

            </div>
            <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`mt-4 w-full py-2 rounded ${
          isAdding ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white transition`}
      >
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>

      {isFloating && (
        <span className="absolute top-2 right-2 text-xl animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
      )}
    </div> 
   
    </>
  );
};

export default Card;
