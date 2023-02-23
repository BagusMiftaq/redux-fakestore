import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
