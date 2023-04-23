import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Filter = ({ setGetFilter, setGetFilterValues }) => {
  const filterRef = useRef();
  const filterFormRef = useRef();
  const categoryRef = useRef();
  const startingRef = useRef();
  const endRef = useRef();

  const [filteredValues, setFilteredValues] = useState({
    category: "",
    starting: 0,
    end: 10000,
  });
  const handleFiltering = (e) => {
    e.preventDefault();
    filterRef.current.classList.add("to-left-2000");

    setFilteredValues({
      category: categoryRef.current.value,
      starting: parseInt(startingRef.current.value),
      end: parseInt(endRef.current.value),
    });
  };
  useEffect(() => {
    setGetFilter({
      filter: filterRef.current,
      filterForm: filterFormRef.current,
    });
  }, []);
  useEffect(() => {
    setGetFilterValues({
      category: categoryRef.current.value,
      starting: parseInt(startingRef.current.value),
      end: parseInt(endRef.current.value),
    });
  }, [filteredValues]);

  const backFromFilter = () => {
    filterRef.current.classList.add("to-left-2000");
  };

  return (
    <div
      ref={filterRef}
      className="absolute to-left-2000 opacity-100 transition-all transition-03s bg-light  h-100vh w-100vw z-50 flex items-center justify-center"
    >
      <form
        onSubmit={handleFiltering}
        ref={filterFormRef}
        className="text-white transition-05s  shadow-both2xl 
     self-center h-300px w-300px flex items-center justify-center rounded-[10px] z-10 bg-gray-900 text-center"
      >
        <div className="relative overflow-hidden  rounded-[10px] h-300px w-300px  flex flex-col items-center justify-center gap-3 ">
          <div className="absolute w-100% top-0 flex items-center justify-between text-lgn">
            <button
              onClick={backFromFilter}
              type="button"
              className="shadow-bothxs rounded-lg p-2 hover:shadow-bothsm transition-all"
            >
              <FaArrowLeft />
            </button>
            <button
              type="submit"
              className="shadow-bothxs rounded-lg p-2 py-1 hover:shadow-bothsm transition-all"
            >
              Filter
            </button>
          </div>
          <div className="flex flex-col gap-10 items-center justify-between p-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="category">Category</label>
              <select
                onChange={(e) => {
                  setFilteredValues((old) => {
                    return {
                      category: e.target.value,
                      starting: old.starting,
                      end: old.end,
                    };
                  });
                }}
                value={filteredValues.category}
                ref={categoryRef}
                name="category"
                className="bg-gray-900 shadow-bothxs rounded text-gray-400 "
              >
                <option value="">All</option>
                <option value="sunglass"> Men</option>
                <option value="womens">Women</option>
                <option value="skincare">Skincare</option>
                <option value="dress">Clothes</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price-range" className="text-lg   rounded">
                Price range$
              </label>
              <div
                name="price-range"
                className="flex flex-col gap-2 items-start justify-start"
              >
                <div className="flex flex-col ">
                  <label htmlFor="price-start" className="opacity-70">
                    Starting
                  </label>
                  <input
                    onChange={(e) => {
                      setFilteredValues((old) => {
                        return {
                          category: old.category,
                          starting: e.target.value,
                          end: old.end,
                        };
                      });
                    }}
                    value={filteredValues.starting}
                    ref={startingRef}
                    type="number"
                    name="price-start"
                    className="bg-transparent shadow-bothxs rounded p-2"
                    required
                  />
                </div>
                <div className="flex  flex-col">
                  <label htmlFor="price-end" className="opacity-70">
                    End
                  </label>
                  <input
                    onChange={(e) => {
                      setFilteredValues((old) => {
                        return {
                          category: old.category,
                          starting: old.starting,
                          end: e.target.value,
                        };
                      });
                    }}
                    value={filteredValues.end}
                    ref={endRef}
                    type="number"
                    name="price-end"
                    className="bg-transparent shadow-bothxs rounded p-2"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
