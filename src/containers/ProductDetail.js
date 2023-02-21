import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const { id, title, image, price } = product;
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>
          <h1 className="text-red-700">Loading....</h1>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <div className="flex-1 justify-center items-center">
            <img
              className="object-contain h-96 w-96 mt-4"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 flex-column justify-start">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-bold text-green-800 dark:text-white">
              $ {price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
