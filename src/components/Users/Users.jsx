import React, { useState, useEffect, useMemo } from "react";
import { getAllUsers, loginUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { useNavigate } from "react-router-dom";
import "./User.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { useTable, usePagination, useRowSelect } from "react-table";
import CheckBox from "../../components/CkeckBox";

const Users = (props) => {
  const { allUsers, isLoaded } = props;
  const nav = useNavigate();

  useEffect(() => {
    props.getAllUsers();
  }, []);

  const availableUsers = allUsers.body;

  console.log(availableUsers);
  console.log(availableUsers !== undefined);

  const COLS = [
    {
      Header: "First name",
      accessor: "firstName",
    },
    {
      Header: "Last name",
      accessor: "lastName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div>
            <BsIcons.BsThreeDotsVertical
              style={{
                color: "#000",
                fontSize: "20px",
              }}
            />
          </div>
        );
      },
    },
  ];

  const columns = useMemo(() => COLS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    rows,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data: availableUsers || [],
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );
  const { pageIndex, pageSize } = state;

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
    >
      <div>
        <ShopHeader />
      </div>
      <div
        style={{
          width: "100%",
          height: 400,
          width: "max-content",
          margin: "100px auto",
        }}
      >
        {availableUsers !== undefined ? (
          <div
            style={{
              maxHeight: "70vh",
              margin: "auto",
              backgroundColor: "#fff",
              overflow: "scroll",
            }}
          >
            <table
              {...getTableProps()}
              // className="border-collapse w-[100%] m-auto rounded-[15px] whitespace-nowrap "
            >
              <thead className=" w-full px-32 sticky top-0">
                {headerGroups.map((headerGroup, index) => (
                  <tr
                    key={index}
                    {...headerGroup.getHeaderGroupProps()}
                    className="border-solid border-[1px] border-white even:bg-[#eef1f1] first:w-[20px]"
                  >
                    {headerGroup.headers.map((column, index) => (
                      <th
                        key={index}
                        {...column.getHeaderProps}
                        className="border-solid pl-[30px] h-[50px] text-left bg-[#eef1f1]  first:rounded-tl-[10px] last:rounded-tr-[10px] border-b-[2px] border-[#c5c5c5] py-6   last:pl-[0px] w-[150px] last:w-[20px]  first:w-[20px]  "
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      key={row.original.id}
                      className="even:bg-[#eef1f1] border-b border-gray-200 "
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="pl-[30px] text-left max-w-[150px] overflow-x-auto p-4 last:w-[2px] last:pl-[0px]"
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Nooooo</div>
        )}
        <div
          className="block mx-auto my-0 w-[100%]  bottom-0 overflow-x-auto"
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            bottom: "0",
            overflowX: "auto",
          }}
        >
          <div className="w-[100%] flex items-center justify-center my-[30px]  mx-auto md:block md:mx-auto">
            <span
              className="flex items-center md:justify-center md:mt-[10px]"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px",
              }}
            >
              {" "}
              <button
                className="my-0 mx-[5px] px-[5px] py-0 text-[#333] h-[38px] border-solid border-[1px]  border-[#a8a8a8]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8]"
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                  color: "#333",
                  height: "38px",
                  border: "1px solid #a8a8a8",
                }}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <AiIcons.AiOutlineDoubleLeft />
              </button>
              <button
                className=" border-solid border-[1px]  border-[#a8a8a8] py-0 px-[10px] text-[#333] rounded-l-[5px] h-[38px] disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8] "
                style={{
                  margin: "0 5px",
                  padding: "0 10px",
                  borderRadius: "5px 0 0 5px",
                  color: "#333",
                  height: "38px",
                  border: "1px solid #a8a8a8",
                }}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <AiIcons.AiOutlineLeft />
              </button>
              <span
                className="flex flex-wrap md:hidden "
                style={{ display: "flex", flexWrap: "nowrap" }}
                id="pages"
              >
                {pageOptions?.map((pageOption, i) => {
                  return (
                    <div>
                      <button
                        className={`border-solid border-[1px] mx-[2px]  border-[#a8a8a8] bg-[#fff] w-[35px] h-[38px]  active:bg-[#333] active:text-[#fff]-500 ${
                          pageIndex === i && "bg-[#eef1f1]"
                        }`}
                        style={{
                          border: "1px solid #a8a8a8",
                          backgroundColor: "#fff",
                          width: "35px",
                          height: "38px",
                        }}
                        onClick={(e) => {
                          const pageNumber = e.target.innerText;
                          gotoPage(pageNumber - 1);
                        }}
                      >
                        {pageOption + 1}
                      </button>
                    </div>
                  );
                })}
              </span>
              <button
                className=" border-solid border-[1px]  border-[#a8a8a8] py-0 px-[10px] text-[#333] rounded-r-[5px] h-[38px]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8]"
                style={{
                  margin: "0 5px",
                  padding: "0 10px",
                  borderRadius: "0 5px 5px 0",
                  color: "#333",
                  height: "38px",
                  border: "1px solid #a8a8a8",
                }}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <AiIcons.AiOutlineRight />
              </button>
              <button
                className="my-0 mx-[5px] px-[5px] py-0 text-[#333] h-[38px] border-solid border-[1px]  border-[#a8a8a8]  disabled:bg-[#E7E7E7] disabled:text-[#a8a8a8]"
                style={{
                  margin: "0 5px",
                  padding: "0 5px",
                  color: "#333",
                  height: "38px",
                  border: "1px solid #a8a8a8",
                }}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <AiIcons.AiOutlineDoubleRight />
              </button>
            </span>{" "}
            <span
              style={{
                display: "flex",
                marginLeft: "30px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Page <strong>{pageIndex + 1} </strong>of{" "}
              <strong> {pageOptions.length}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ users }) => ({
  allUsers: users.data,
  isLoaded: users.isLoaded,
});

export default connect(mapState, {
  getAllUsers,
})(Users);
