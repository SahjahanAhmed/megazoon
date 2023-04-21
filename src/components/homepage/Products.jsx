import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { searchContext } from "../../App";
import NetworkErrorCheck from "../NetworkErrorCheck";
import { filterValuesContext } from "../../App";
const Products = () => {
  const getFilteredValues = useContext(filterValuesContext);
  // console.log(typeof getFilteredValues.category);
  const search = useContext(searchContext);
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
  pathname = pathname.replace("/products/", "");

  pathname = pathname == "all" ? (pathname = [""]) : pathname;
  pathname =
    pathname == "mens"
      ? (pathname = ["watch", "sunglass", "mens-shirt"])
      : pathname;
  pathname =
    pathname == "womens"
      ? (pathname = ["womens", "dress", "fragrance"])
      : pathname;
  pathname =
    pathname == "skincare"
      ? (pathname = ["skincare", "oil", "perfume"])
      : pathname;
  pathname =
    pathname == "clothes"
      ? (pathname = ["shirts", "dresses", "womens shirts"])
      : pathname;
  // console.log(pathname);
  let filtered = allProducts;
  // console.log(filtered);
  // filtered = [];
  // console.log(typeof getFilteredValues.category);
  filtered = filtered.filter((product) => {
    return (product =
      product.category.includes(getFilteredValues.category.toLowerCase()) &&
      product.price >= getFilteredValues.starting &&
      product.price <= getFilteredValues.end);
  });
  // console.log(filtered);
  filtered = filtered.filter((pro) => {
    return (
      pro.category.includes(pathname[0]) ||
      pro.category.includes(pathname[1]) ||
      pro.category.includes(pathname[2])
    );
  });
  filtered = filtered.filter((pro) => {
    return (
      pro.description.includes(search.toLowerCase()) ||
      pro.category.includes(search.toLowerCase()) ||
      pro.title.includes(search.toLowerCase()) ||
      pro.brand.includes(search.toLowerCase())
    );
  });
  if (filtered.length >= 1) {
    return (
      <div className="w-100vw p-1 flex gap-2 flex-wrap  items-center justify-center ">
        {filtered.map((product) => {
          return (
            <div
              key={product.id}
              className=" border gap-2 relative bg-white text-black rounded-xl p-1 max-w-300px max-h-300px flex flex-col justify-between items-center overflow-scroll"
            >
              <div className="text-center text-lg font-bold opacity-80">
                {product.title}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={product.thumbnail}
                  alt=""
                  className=" max-w-300px max-h-200px cursor-pointer transition-all hover:scale-150"
                />
              </div>
              <div className=" text-center opacity-80">
                {product.description}
              </div>
              <div className="flex items-center text-xs border border-black rounded-2xl p-1  z-10 justify-center absolute top-0 right-0 bg-slate-300 transition-all  hover:font-bold cursor-pointer">
                Add to cart
              </div>
              <div className="flex items-center text-xs border font-bold border-black rounded-lg p-1  z-10 justify-center absolute bottom-0 left-0 bg-slate-900 text-white transition-all ">
                Only ${product.price}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <NetworkErrorCheck />;
  }
};

export default Products;
