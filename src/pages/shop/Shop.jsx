import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const Shop = (props) => {
  const { allProducts, isLoaded } = props;

  useEffect(() => {
    props.getAllProducts();
  }, []);

  const availableProducts = allProducts.body;

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
    >
      <ShopHeader />
      <Categories />
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          width: "90%",
          margin: "0 auto",
          height: "fit-content",
          paddingTop: "80px",
        }}
      >
        <>
          <div>
            {isLoaded ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  {availableProducts.map((values) => {
                    return (
                      <div key={values.productName} style={{ margin: "20px" }}>
                        <p style={{ width: "200px", height: "250px" }}>
                          <a href={`/product/${values.productId}`}>
                            <img
                              src={values.productImage}
                              alt={values.productId}
                              name={values.productId}
                              style={{
                                width: "100%",
                                height: "100%",
                                border: "1px solid #cfcfcf",
                              }}
                              id={values.productId}
                            />
                          </a>
                        </p>
                        <h1
                          style={{
                            textAlign: "center",
                            width: "180px",
                            color: "#333",
                          }}
                        >
                          {values.productName}
                        </h1>
                        <p
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#333",
                          }}
                        >
                          {values.price} $
                        </p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

const mapState = ({ products }) => ({
  allProducts: products.data,
  isLoaded: products.isLoaded,
});

export default connect(mapState, {
  getAllProducts,
})(Shop);
