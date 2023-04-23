import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/men-img.jpg";
import { currentItemContext } from "../App";
import { useContext } from "react";
import { json } from "react-router-dom";

const MyCart = () => {
  let getCurrentItem = useContext(currentItemContext);
  getCurrentItem = getCurrentItem[0];
  let GetCartListFromLS = localStorage.getItem("cartlist")
    ? JSON.parse(localStorage.getItem("cartlist"))
    : [];

  const [renderMycart, setRenderMycart] = useState([]);
  //   console.log(renderMycart);
  const handleAddToCart = () => {
    let getCartListFromLS = localStorage.getItem("cartlist")
      ? JSON.parse(localStorage.getItem("cartlist"))
      : [];

    let check = getCartListFromLS.filter((i) => {
      return i.id == getCurrentItem.id;
    });
    if (check.length >= 1) {
      setRenderMycart((old) => {
        return [...old];
      });
      getCartListFromLS = getCartListFromLS;
    } else {
      setRenderMycart((old) => {
        return [
          ...old,
          {
            id: getCurrentItem.id,
            title: getCurrentItem.title,
            price: getCurrentItem.price,
            desc: getCurrentItem.description,
            thumbnail: getCurrentItem.thumbnail,
          },
        ];
      });

      getCartListFromLS = [
        ...getCartListFromLS,
        {
          id: getCurrentItem.id,
          title: getCurrentItem.title,
          price: getCurrentItem.price,
          desc: getCurrentItem.description,
          thumbnail: getCurrentItem.thumbnail,
        },
      ];
      localStorage.setItem("cartlist", JSON.stringify(getCartListFromLS));
    }
  };
  const handleDeleteCartItem = (e) => {
    const selectedToDelete = e.target.parentElement.parentElement.parentElement;
    setRenderMycart((old) => {
      return (old = old.filter((item) => {
        return item.id != selectedToDelete.id;
      }));
    });
    GetCartListFromLS = GetCartListFromLS.filter((item) => {
      return item.id != selectedToDelete.id;
    });
    localStorage.setItem("cartlist", JSON.stringify(GetCartListFromLS));
  };
  return (
    <div className="min-h-100vh px-4 pt-4 flex flex-col gap-8 items-center">
      <div>
        {getCurrentItem ? (
          <div
            className="text-white flex-col flex gap-4 justify-center  
  items-center  relative  overflow-x-scroll  border-x-2  hover:bg-gray-950 transition-all xs:flex-row"
            id="add-item"
          >
            <img
              src={getCurrentItem.thumbnail}
              alt="product-img"
              className="max-w-250px "
            />
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="font-[500] max-h-100px overflow-y-scroll  px-2">
                {getCurrentItem.description}
              </h2>
              <div className="flex  flex-col gap-8 ">
                <h1 className="font-[800] ">${getCurrentItem.price}</h1>
                <div className="sticky bottom-4 flex flex-col gap-4 w-200px">
                  <button
                    onClick={handleAddToCart}
                    type="button"
                    className="border  rounded-2xl bg-[#02915d]   hover:bg-[#33896ca9]  transition-all py-1"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    className="border  rounded-2xl bg-[#0787b9] hover:bg-[#024f6d]  transition-all py-1"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className="bg-transparent text-white flex flex-col gap-1"
        id="cartlist"
      >
        <h1 className="text-center text-3xl font-ubuntu">My Cart</h1>
        <div className="flex flex-col gap-4 overflow-y-scroll">
          {GetCartListFromLS.reverse().map((product) => {
            return (
              <div
                key={product.id}
                className="flex gap-4 max-h-200px  relative overflow-x-scroll  border-x-2 hover:bg-gray-950 transition-all"
                id={product.id}
              >
                <img
                  src={product.thumbnail}
                  alt="product.thumbnail"
                  className="max-w-250px"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="font-[500] max-h-100px overflow-y-scroll pr-2">
                    {product.desc}
                  </h2>
                  <div className="flex  flex-col gap-8">
                    <h1 className="font-[800]">${product.price}</h1>
                    <button
                      onClick={handleDeleteCartItem}
                      className="border  rounded-xl  w-70px hover:bg-red-600 transition-all sticky bottom-4"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
