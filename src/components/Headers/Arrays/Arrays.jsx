import React, { useState, useEffect } from "react";

const Arrays = () => {
  const [products, setProducts] = useState([]);
  const [sortPrice, setSortPrice] = useState(false);
  const [sortSize, setSortSize] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/products/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.body);
      });
  }, []);

  const spltt = "1000px";

  const smthg = spltt.split("p")[0];

  const sortedData = products.sort((a, b) => {
    if (parseInt(a.size.split("p")[0]) > parseInt(b.size.split("p")[0])) {
      return 1;
    } else if (
      parseInt(a.size.split("p")[0]) < parseInt(b.size.split("p")[0])
    ) {
      return -1;
    } else {
      return 0;
    }
  });

  const vvc = products.filter((values) => values.price > 1000);

  return (
    <div>
      {sortedData.map((values) => {
        return (
          <div
            key={values.productName}
            style={{ margin: "30px auto", width: "min-content" }}
          >
            <h1
              style={{
                color: "#005080",
                textTransform: "uppercase",
                // fontWeight: "bold",
              }}
            >
              {values.productName}
            </h1>
            <p>$ {values.price}</p>
            <p>{values.size}</p>
            <span>
              <img
                src={values.productImage}
                alt=""
                style={{ width: "200px", height: "150px" }}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Arrays;
