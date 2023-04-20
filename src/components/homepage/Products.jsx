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
  let filtered = allProducts;
  // console.log(filtered);
  let { pathname } = useLocation();
  pathname = pathname.replace("/products/", "");

  pathname = pathname == "all" ? (pathname = [""]) : pathname;
  pathname =
    pathname == "mens"
      ? (pathname = ["watch", "fragrance", "mens-shirt"])
      : pathname;
  pathname =
    pathname == "womens" ? (pathname = ["womens", "dress", 'fragrance']) : pathname;
  pathname =
    pathname == "skincare"
      ? (pathname = ["skincare", "oil", "perfume"])
      : pathname;
  pathname =
    pathname == "clothes" ? (pathname = ["shirts", "dresses", "dress"]) : pathname;
  // console.log(pathname);
  filtered = filtered.filter((pro) => {
    return pro.category.includes(
      pathname[0] || pathname[1] || pathname[2]
    ) ? pro : null;
  });
  return (
    <div className="w-100vw p-1 flex gap-2 flex-wrap   items-center justify-center ">
      {filtered.map((product) => {
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
