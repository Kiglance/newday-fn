import React, { useState, useEffect } from "react";
import "./Shopping.css";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import * as IoIcons from "react-icons/io5";
import ShopHeader from "../../components/ShopHeader/ShopHeader";

const Shopping = () => {
  const [page, setPage] = useState(0);
  const [size] = useState(30);
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [productId, setProductId] = useState("");
  const [categories, sestCategories] = useState([]);
  const [classes, setClasses] = useState([]);
  const [count, setCount] = useState(0);
  const [totPages, setTotPages] = useState(0);
  const [buttonisClicked, setButtonisClicked] = useState(false);
  const [buttonOneisClicked, setButtonOneisClicked] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [availableClasses, setAvailableClasses] = useState([]);
  const [stdProducts, setStdProducts] = useState([]);
  const [clicked, setIsClicked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [showPoductOrClass, setShowProductOrClass] = useState(false);

  const handleProductOrClass = () => {
    setShowProductOrClass((value) => !value);
  };

  const clickButton = () => {
    setButtonisClicked((value) => !value);
  };
  const clickButtonOne = () => {
    setButtonOneisClicked((value) => !value);
  };
  // const clickButtonTwo = () => {
  //   setButtonTwoisClicked((value) => !value);
  // };

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/products?page=${page}&size=${size}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.body);
        setCount(data.count);
        setTotPages(data.totalPages);
      });
  }, [page]);

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOneProduct(data.body.data);
      });
  }, [productId]);

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        sestCategories(data.body);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/class1`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClasses(data.body);
      });
  }, []);

  const handlePage = (e) => {
    setPage(e.target.innerHTML - 1);
  };

  const toPreviousPage = () => {
    setPage(Math.max(0, page - 1));
  };

  const toNextPage = () => {
    setPage(Math.min(totPages - 1, page + 1));
  };

  const number = new Array(totPages).fill(null)?.map((v, i) => i);

  const filteredCategories = categories.filter((values) => {
    return values.Classes != "";
  });
  const subClasses = filteredCategories
    .map(({ Classes }) => {
      return Classes;
    })
    .flat();

  const filteredClasses = classes.filter((values) => {
    return values.Products != "";
  });
  const showCategory = (e) => {
    const ctg = e.target.innerText;
    // console.log(e.target.innerText);
    const findClasses = filteredClasses.filter(({ Categories }) => {
      return Categories.categoryName == ctg;
    });
    setAvailableClasses(findClasses);
    setSelectedProduct(false);
    setShowClasses(true);
    setShowProductOrClass((value) => !value);
  };
  // console.log("findClasses", availableClasses);

  const showProducts = (e) => {
    const clss = e.target.innerText;

    const sortedProducts = products.filter(({ Classes }) => {
      return Classes.catOneName == clss;
    });

    setStdProducts(sortedProducts);
    setIsClicked(true);
    setSelectedProduct(false);
    setShowProductOrClass((value) => !value);

    console.log("sortedProducts", clss, sortedProducts);
  };

  // console.log("PRODUCTS", products);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getSearchProd = (e) => {
    setSelectedProduct(true);
    setProductId(e.target.innerText);
    setFilteredData([]);
    setWordEntered("");
    setShowClasses(false);
  };

  if (oneProduct) {
    console.log(oneProduct.productName, selectedProduct);
  }

  return (
    <div className="shop_body">
      <ShopHeader />
      <div className="side_container">
        <ul>
          <li>
            {}
            SORT BY
            {buttonOneisClicked ? (
              <span>
                <FiIcons.FiArrowDown
                  className="down_arrow_icons"
                  onClick={clickButtonOne}
                />
              </span>
            ) : (
              <>
                <span>
                  <FiIcons.FiArrowUp
                    className="down_arrow_icons"
                    onClick={clickButtonOne}
                  />
                </span>
                <div className="sorted_prices">
                  <div>
                    <ul>
                      <li>price(high-low)</li>
                      <hr />
                      <li>price(low-high)</li>
                      <hr />
                      <li>size(large-small)</li>
                      <hr />
                      <li>size(small-large)</li>
                      <hr />
                    </ul>
                  </div>
                </div>
              </>
            )}
          </li>
          <li>
            CATEGORIES{}
            {buttonisClicked ? (
              <span>
                <FiIcons.FiArrowDown
                  className="down_arrow_icons"
                  onClick={clickButton}
                />
              </span>
            ) : (
              <>
                <span>
                  <FiIcons.FiArrowUp
                    className="down_arrow_icons"
                    onClick={clickButton}
                  />
                </span>
                <div className="sorted_data">
                  {filteredCategories.map(({ categoryName, Classes }) => {
                    return (
                      <div key={categoryName}>
                        <ul>
                          <li onClick={showCategory}>{categoryName}</li>
                        </ul>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
      {/* // (*************************************************)// */}
      <div className="middle_container">
        <input
          type="text"
          style={{ padding: "10px" }}
          placeholder="Enter your search..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div>
          <div>
            {filteredData.length === 0 ? (
              <BiIcons.BiSearch className="searchIcon" />
            ) : (
              <IoIcons.IoClose
                id="clearBtn"
                onClick={clearInput}
                className="searchIcon"
              />
            )}
          </div>
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.map((value, key) => {
                return (
                  <a
                    className="dataItem"
                    target="_blank"
                    onClick={getSearchProd}
                    key={value.productName}
                  >
                    <p>{value.productName}</p>
                  </a>
                );
              })}
            </div>
          )}
        </div>
        {selectedProduct ? (
          <>
            {oneProduct !== undefined ? (
              <>
                <div className="box" key={oneProduct.productName}>
                  <div>
                    <div className="shop_images">
                      <img src={oneProduct.productImage} alt="Product image" />
                    </div>
                  </div>
                  <div className="name_price">
                    <h1 id="productName">{oneProduct.productName}</h1>
                    <p>
                      <span>$ </span>
                      {oneProduct.price}
                    </p>
                  </div>
                  <button className="shop_btn">
                    <span>
                      <GoIcons.GoPlus />
                    </span>
                    Add to cart
                  </button>
                </div>
              </>
            ) : null}
          </>
        ) : (
          <>
            {clicked ? (
              <div className="container_box">
                {stdProducts.map((values) => {
                  return (
                    <div className="box" key={values.productName}>
                      <div>
                        <div className="shop_images">
                          <img src={values.productImage} alt="Product image" />
                        </div>
                      </div>
                      <div className="name_price">
                        <h1 id="productName">{values.productName}</h1>
                        <p style={{ color: " #555" }}>
                          <em>$ {values.price}</em>
                        </p>
                      </div>
                      <button className="shop_btn">
                        <span>
                          <GoIcons.GoPlus />
                        </span>
                        Add to cart
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="container_box">
                {products?.map((values) => {
                  return (
                    <div className="box" key={values.productName}>
                      <div>
                        <div className="shop_images">
                          <img src={values.productImage} alt="Product image" />
                        </div>
                      </div>
                      <div className="name_price">
                        <h1 id="productName">{values.productName}</h1>
                        <p style={{ color: " #555" }}>
                          <em>$ {values.price}</em>
                        </p>
                      </div>
                      <button className="shop_btn">
                        <span>
                          <GoIcons.GoPlus />
                        </span>
                        Add to cart
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        <div className="sorted_data">
          {showClasses ? (
            <div>
              {availableClasses
                .map((values) => {
                  return (
                    <div key={values.catOneName}>
                      <ul>
                        <li onClick={showProducts}>{values.catOneName}</li>
                      </ul>
                    </div>
                  );
                })
                .flat()}
            </div>
          ) : null}
        </div>
        {/* <div className="nbrs" id="nbrs">
          <BsIcons.BsArrowLeftSquareFill
            onClick={toPreviousPage}
            className="arrow_icons"
            id="arrow_icons"
          />

          {number?.map((pgIndex) => {
            return (
              <button key={pgIndex} onClick={handlePage}>
                {pgIndex + 1}
              </button>
            );
          })}
          <BsIcons.BsArrowRightSquareFill
            onClick={toNextPage}
            className="arrow_icons"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Shopping;
// {
//   {
//     buttonTwoisClicked ? (
//       <span>
//         <TiIcons.TiArrowSortedDown onClick={clickButtonTwo} />
//       </span>
//     ) : (
//       <span>
//         <TiIcons.TiArrowSortedUp onClick={clickButtonTwo} />
//       </span>
//     );
//   }
// }
