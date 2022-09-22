import React, { useEffect, useState } from "react";
import "./Product.css";
import { convertTime } from "../../utils/ConvertTime";
import { useRef } from "react";
import { Link } from "react-scroll";
import * as BsIcons from "react-icons/bs";

const Product = () => {
  const [page, setPage] = useState(0);
  const [size] = useState(5);
  const [search, setSearch] = useState([]);
  const [count, setCount] = useState(0);
  const [totPages, setTotPages] = useState(0);
  const [loading, setIsLoading] = useState(true);

  const number = new Array(totPages).fill(null)?.map((v, i) => i);

  const handlePage = (e) => {
    setPage(e.target.innerHTML - 1);
  };

  useEffect(() => {
    fetch(`http://localhost:4040/api/v2/products?page=${page}&size=${size}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearch(data.body);
        setCount(data.count);
        setTotPages(data.totalPages);
      });
  }, [page]);

  const date = search?.map((datee) => {
    return datee.createdAt;
  });
  console.log(search);

  const toPreviousPage = () => {
    setPage(Math.max(0, page - 1));
  };

  const toNextPage = () => {
    setPage(Math.min(totPages - 1, page + 1));
  };

  const nodef = search == undefined;
  console.log(nodef);
  return (
    <div>
      <div className="containers">
        {/* {search?.map((values) => {
          return (
            <div className="box">
              <div className="overlay">
                <div id="images">
                  <img src={values.productImage} alt="Product image" />
                </div>
              </div>
              <div id="content">
                <h1 key={values.productName} id="productName">
                  {values.productName}
                </h1>
                <p key={values.price}>{values.price}</p>
                <p key={values.description}>{values.description}</p>
                <p key={values.createdAt} id="date">
                  <span>Added on: </span>
                  {convertTime(values.createdAt)}
                </p>
              </div>
            </div>
          );
        })} */}
        {!nodef ? (
          <>
            <table>
              <thead>
                <tr style={{ backGroundColor: "green" }}>
                  <th scope="col">Name</th>
                  <th scope="col">Description+Date</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
                {search?.map((values) => {
                  return (
                    <tr
                      key={values.productName}
                      // style={{
                      //   position: "relative",
                      // }}
                    >
                      <th scope="row">{values.productName}</th>
                      <td scope="row">
                        <div
                          style={{
                            maxHeight: "200px",
                            position: "sticky",
                            overflow: "scroll",
                          }}
                        >
                          <p style={{}}>{values.description}</p>
                          <span> {convertTime(values.createdAt)}</span>
                        </div>
                      </td>
                      <td scope="row">{values.price} frw</td>
                      <td scope="row">
                        <img
                          style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          src={values.productImage}
                          alt=""
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="nbrs" id="nbrs">
              <Link
                to="section_6"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <BsIcons.BsArrowLeftSquareFill
                  onClick={toPreviousPage}
                  className="arrow_icons"
                  id="arrow_icons"
                />
              </Link>
              {number?.map((pgIndex) => (
                <Link
                  to="section_6"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  key={pgIndex}
                >
                  <button onClick={handlePage}>{pgIndex + 1}</button>
                </Link>
              ))}
              <Link
                to="section_6"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <BsIcons.BsArrowRightSquareFill
                  onClick={toNextPage}
                  className="arrow_icons"
                />
              </Link>
            </div>
          </>
        ) : (
          <div className="no_pdts">
            <h1>No items yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
