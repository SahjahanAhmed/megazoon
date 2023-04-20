import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const products = await response.json();
      setAllProducts(products.products);
    };
    request();
  }, []);
  let { pathname } = useLocation();
pathname = pathname.replace('/products/','')
console.log(pathname);
  return (
    <div className="w-100vw p-1 flex gap-2 flex-wrap   items-center justify-center ">
      {allProducts.map((product) => {
        return (
          <div
            key={product.id}
            className=" border bg-white text-black rounded-xl p-1 w-300px h-300px flex flex-col justify-between items-center overflow-scroll"
          >
            <div className="text-center text-lg font-bold ">
              {product.title}
            </div>
            <div className="flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt=""
                className=" max-w-250px max-h-250px"
              />
            </div>
            <div className="flex items-center justify-center">description</div>
            <div className="flex items-center justify-center">extras</div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
