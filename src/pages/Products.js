import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "../styles/productList.module.css";
import OneProduct from "../components/OneProduct";
import Search from "../components/Search";

function Products() {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 300);
    fetch("https://friendly-jacket-fawn.cyclic.app/product")
      // fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        for (const key in data) {
          data[key].id = key;
          setProducts((prev) => {
            return [...prev, data[key]];
          });
        }
      });
  }, []);

  //SPINNER
  if (spinner) {
    return (
      <ClipLoader className={classes.spinner} loading={spinner} size={35} />
    );
  }
  return (
    <>
      <Search searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <div className={classes.productList}>
        {products
          .filter((val, key) => {
            if (searchTitle == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, key) => {
            return <OneProduct oneProduct={item} key={key} />;
          })}
      </div>
    </>
  );
}

export default Products;
