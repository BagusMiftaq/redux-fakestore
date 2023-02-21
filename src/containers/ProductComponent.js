import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProduct.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Link to={`/products/${id}`}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700 mx-2 my-2">
          <div className="flex flex-column flex-wrap justify-evenly">
            <img
              className="object-contain h-48 w-96 mt-4"
              src={image}
              alt={title}
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-bold text-green-800 dark:text-white">
                $ {price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <div>
          <h1 className="text-red-700">Loading....</h1>
        </div>
      ) : (
        <>{renderList}</>
      )}
    </>
  );
};

export default ProductComponent;
