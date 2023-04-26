import React, { useEffect, useState, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { searchContext } from "../../App";
import NetworkErrorCheck from "../NetworkErrorCheck";
import { filterValuesContext } from "../../App";
const Products = ({ setGetCurrentItem }) => {
  let { pathname } = useLocation();
  const getFilteredValues = useContext(filterValuesContext);
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
  const empty = useRef();
  const netError = useRef();

  useEffect(() => {
    return;
    if (empty.current === null) {
    } else {
      setInterval(() => {
        Array.from(empty.current.children).forEach((item) => {
          item.classList.toggle("opacity-50");
        });
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (empty.current === null) {
      return;
    } else {
      setTimeout(() => {
        empty.current.style.opacity = "0";
        netError.current.classList.remove("d-none");
      }, 30000);
    }
  }, []);

  const handleCurrentItem = (e) => {
    const currentItemElement = e.target.parentElement;
    let currentItem = allProducts.filter((product) => {
      return product.id == currentItemElement.id;
    });
    setGetCurrentItem(currentItem);
  };
  const handleCurrentItemOnclickImg = (e) => {
    let currentItemElement = e.currentTarget.parentElement.parentElement;
    let currentItem = allProducts.filter((product) => {
      return product.id == currentItemElement.id;
    });
    setGetCurrentItem(currentItem);
  };
  pathname = pathname.replace("/products/", "");
  pathname = pathname == "/" ? (pathname = [""]) : pathname;
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
  let filtered = allProducts;
  filtered = filtered.filter((product) => {
    return (product =
      product.category.includes(getFilteredValues.category.toLowerCase()) &&
      product.price >= getFilteredValues.starting &&
      product.price <= getFilteredValues.end);
  });
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
      <div className="w-100vw p-1 flex gap-2 flex-wrap  items-center justify-center theme ">
        {filtered.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className=" border gap-2 relative bg-white text-black rounded-xl p-1 max-w-300px max-h-300px flex flex-col justify-between items-center overflow-scroll "
            >
              <div className="text-center text-lg font-bold opacity-80">
                {product.title}
              </div>
              <div className="flex items-center justify-center">
                <Link to="/mycart" onClick={handleCurrentItemOnclickImg}>
                  <img
                    src={product.thumbnail}
                    alt=""
                    className=" max-w-300px max-h-200px cursor-pointer transition-all hover:scale-150"
                  />
                </Link>
              </div>
              <div className=" text-center opacity-80">
                {product.description}
              </div>

              <Link
                to="/mycart"
                onClick={handleCurrentItem}
                className="flex items-center text-xs border border-black rounded-2xl p-1  z-10 justify-center absolute top-0 right-0 bg-slate-300 transition-all  hover:font-bold cursor-pointer"
              >
                Add to cart
              </Link>
              <div className="flex items-center text-xs border font-bold border-black rounded-lg p-1  z-10 justify-center absolute bottom-0 left-0 bg-slate-900 text-white transition-all ">
                Only ${product.price}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    let arr = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];

    return (
      <>
        <div ref={netError} className="d-none theme">
          <NetworkErrorCheck />
        </div>
        <div
          ref={empty}
          className="flex flex-wrap  items-center justify-center gap-4 theme"
        >
          {arr.map((a, i) => {
            return (
              <div
                key={i}
                className="transition-03s w-300px max-h-300px bg-slate-500 rounded-lg p-4 flex flex-col gap-8"
              >
                <div className="h-[30px] bg-slate-600"></div>
                <div className="h-[100px] bg-slate-600"></div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};
export default Products;
