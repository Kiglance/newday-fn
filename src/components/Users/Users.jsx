import React, { useState, useEffect, useMemo } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  updateUserProfile,
} from "../../redux/actions/userActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { useNavigate } from "react-router-dom";
import "./User.css";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { useTable, usePagination, useRowSelect } from "react-table";
import CheckBox from "../../components/CkeckBox";
import { convertTime } from "../../utils/ConvertTime";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dashboard from "../Dashboard/Dashboard";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

const Users = (props) => {
  const { allUsers, isLoaded } = props;
  const availableUsers = allUsers;

  const sortFx = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  const sortedData = availableUsers?.sort((a, b) => {
    const aa = JSON.stringify(`${a.firstName} ${a.lastName}`);
    const bb = JSON.stringify(`${b.firstName} ${b.lastName}`);
    return sortFx(aa, bb);
  });

  const [show, setShow] = useState(false);
  const [changed, setChanged] = useState(false);
  const [num, setNum] = useState("");
  const [userIndex, setUserIndex] = useState("");
  const [updateUserId, setUpdateUserId] = useState("");
  const [updateProfileId, setUpdateProfileId] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [picture, setPicture] = useState({
    file: [],
    filepreview: null,
  });
  const [gender, setgender] = useState("");
  const [maritalStatus, setmaritalStatus] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [department, setdepartment] = useState("");
  const [status, setstatus] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [userId, setUserId] = useState("");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [position, setPosition] = useState({});
  const nav = useNavigate();

  const userInfo = {
    gender: gender || "",
    maritalStatus: maritalStatus || "",
    phoneNumber: phoneNumber || "",
    department: department || "",
    status: status || "",
    country: country || "",
    city: city || "",
    street: street || "",
  };

  console.log(
    picture.file,
    gender,
    phoneNumber,
    country,
    city,
    status,
    maritalStatus,
    "^^^^^^^^^^^^^^^^^^^^^^"
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleInputChange = (e) => {
    setPicture({
      ...picture,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
    setChanged(true);
  };

  useEffect(() => {
    props.getAllUsers();
  }, []);
  useEffect(() => {
    const user = availableUsers !== undefined ? availableUsers[userIndex] : {};
    const obj = {
      0: user?.Profile?.gender,
      1: user?.Profile?.maritalStatus,
      2: user?.Profile?.phoneNumber,
      3: user?.Profile?.department,
      4: user?.Profile?.status,
      5: user?.Profile?.Address?.country,
      6: user?.Profile?.Address?.city,
      7: user?.Profile?.Address?.street,
    };

    setfirst_name(user?.firstName);
    setlast_name(user?.lastName);

    setgender(user?.Profile?.gender);
    setmaritalStatus(user?.Profile?.maritalStatus);
    setphoneNumber(user?.Profile?.phoneNumber);
    setdepartment(user?.Profile?.department);
    setstatus(user?.Profile?.status);
    setcountry(user?.Profile?.Address?.country);
    setcity(user?.Profile?.Address?.city);
    setstreet(user?.Profile?.Address?.street);
    setPicture({
      ...picture,
      file: user?.Profile?.picture,
      filepreview: user?.Profile?.picture,
    });

    setUpdateProfileId(user?.Profile?.profileId);
    setUpdateUserId(user?.userId);
  }, [allUsers, userIndex]);

  const updateUserAttr = () => {
    const data = {
      firstName: first_name,
      lastName: last_name,
    };
    props.updateUser(data, updateUserId);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const handleOpenDeleteCycle = (e) => {
    setOpenDeleteModal(true);
    setAnchorEl(null);
  };

  const deleteOneUser = () => {
    setOpenDeleteModal(false);
    props.deleteUser(userId);
  };

  console.log(
    picture.file,
    gender,
    phoneNumber,
    country,
    city,
    status,
    maritalStatus,
    "%%%%%%%%%%%%%"
  );
  const formdata = new FormData();
  formdata.append("gender", gender);
  formdata.append("phoneNumber", phoneNumber);
  formdata.append("country", country);
  formdata.append("city", city);
  formdata.append("street", street);
  formdata.append("department", department);
  formdata.append("status", status);
  formdata.append("maritalStatus", maritalStatus);
  formdata.append("picture", picture.file);

  const updateProfile = () => {
    const data = {
      userId: updateUserId,
      profileId: updateProfileId,
      userInfo: formdata,
    };
    props.updateUserProfile(data);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  const COLS = [
    {
      Header: "Name",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div
            style={{
              display: "flex",
              overflowX: "hidden",
              maxWidth: "170px",
              alignItems: "center",
            }}
          >
            <img
              src={row.original?.Profile?.picture}
              alt=""
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                border: "1px solid #E5E8E8",
                marginRight: "5px",
                cursor: "zoom-in",
                aspectRatio: "auto 700 / 468",
              }}
            />
            <p style={{ fontWeight: "medium" }}>
              {row.original.firstName} {row.original.lastName}
            </p>
          </div>
        );
      },
    },
    {
      Header: "E-mail / Mobile",
      accessor: "",
      Cell: ({ row }) => {
        const phone = row.original.Profile?.phoneNumber;
        return (
          <div
            style={{ display: "block", overflowX: "hidden", maxWidth: "170px" }}
          >
            <p
              style={{
                fontWeight: "medium",
              }}
            >
              {row.original.email}
            </p>
            <p style={{ color: "#626567" }}>{phone || "--"}</p>
          </div>
        );
      },
    },
    {
      Header: "Gender",
      accessor: "",
      Cell: ({ row }) => {
        const gender = row.original.Profile?.gender;
        return (
          <div
            style={{ display: "block", overflowX: "hidden", maxWidth: "80px" }}
          >
            <p className="">{gender || "--"}</p>
          </div>
        );
      },
    },
    {
      Header: "Department",
      accessor: "",
      Cell: ({ row }) => {
        const department = row.original.Profile?.department;
        return (
          <div
            style={{ display: "block", overflowX: "hidden", maxWidth: "170px" }}
          >
            <p className="">{department || "--"}</p>
          </div>
        );
      },
    },
    {
      Header: "Birth-date",
      accessor: "",
      Cell: ({ row }) => {
        const bd = row.original.Profile?.birthDate;
        return (
          <div
            style={{ display: "block", overflowX: "hidden", maxWidth: "150px" }}
          >
            <p style={{ color: "#626567" }}>{convertTime(bd) || "--"}</p>
          </div>
        );
      },
    },
    {
      Header: "Actions",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div className="flex items-center">
            <BsIcons.BsThreeDotsVertical
              onClick={(event) => {
                setUserId(row.original?.userId);
                setNum(`${row.original?.firstName} ${row.original?.lastName}`);
                setAnchorEl(event.currentTarget);
              }}
              style={{
                color: "#000",
                fontSize: "18px",
                margin: "0 10px",
              }}
            />

            {position[!Number(row.index)] == true ? (
              <HiOutlineChevronUp
                style={{
                  color: "#000",
                  fontSize: "18px",
                  marginLeft: "10px",
                }}
                className="cursor-pointer"
                onClick={() => {
                  const i = row.index;
                  setPosition((position) => ({
                    // ...position,
                    [i]: !position[i],
                  }));
                }}
              />
            ) : (
              <HiOutlineChevronDown
                style={{
                  color: "#000",
                  fontSize: "18px",
                  marginLeft: "10px",
                }}
                className="cursor-pointer"
                onClick={() => {
                  const i = row.index;
                  setUserIndex(row.index);
                  setPosition((position) => ({
                    // ...position,
                    [i]: !position[i],
                  }));
                  // handleOpenUpdateModal();
                }}
              />
            )}
          </div>
        );
      },
    },
  ];

  const columns = useMemo(() => COLS, []);
  const data = useMemo(() => {
    if (availableUsers !== undefined) {
      return availableUsers;
    }
    return [];
  }, [allUsers]);

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
      data,
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

  console.log(selectedFlatRows, "selectedFlatRows");

  return (
    <div
      style={{
        // backgroundColor: "#fff",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
      className="bg-[#f7f9ff]"
    >
      <div>
        <ShopHeader />
        <Dashboard />
      </div>
      <div
        style={{
          height: 400,
          width: "97%",
          margin: "80px auto",
          paddingLeft: "220px",
        }}
        className="px-2 bg-[#f7f9ff]"
      >
        {/* <div
          className="w-[300px] h-[100px] text-center my-5 pt-8"
          style={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          Users...
        </div> */}
        <div
          style={{
            borderTop: "1px solid #eef1f1",
            borderBottom: "1px solid #eef1f1",
            maxHeight: "80vh",
            margin: "auto",
            overflow: "auto",
            paddingBottom: "0px",
            overflowX: "hidden",
          }}
          className="bg-[#f7f9ff]"
        >
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th key={index} {...column.getHeaderProps}>
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
                  <>
                    {!show ? (
                      <tr
                        {...row.getRowProps()}
                        key={row.original.id}
                        style={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    ) : (
                      <tr
                        {...row.getRowProps()}
                        key={row.original.id}
                        style={{
                          whiteSpace: "nowrap",
                          borderLeft: "2px solid #008080",
                          borderRight: "2px solid #008080",
                        }}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    )}

                    {position[Number(row.id)] && (
                      <tr
                        style={{
                          borderLeft: "2px solid #008080",
                          borderRight: "2px solid #008080",
                          background: "#EBF5FB",
                        }}
                        className="flex-container"
                      >
                        <td
                          colSpan="7"
                          // className="flex-container"
                          // style={{ paddingLeft: 0, padding: "10px" }}
                        >
                          <div className="flex-container">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                updateProfile();
                                updateUserAttr();
                              }}
                              className="w-[100%] p-10 block bg-[#FBFCFC]"
                            >
                              <div className="w-[100%] px-10 flex bg-[#ffffff] flex-wrap border">
                                {" "}
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="First name"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="First name"
                                  type="text"
                                  value={first_name}
                                  className=""
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setfirst_name(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Last name"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Last name"
                                  type="text"
                                  value={last_name}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setlast_name(e.target.value);
                                  }}
                                />
                                <FormControl
                                  style={{ display: "block", margin: "10px" }}
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                >
                                  <InputLabel
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                  >
                                    Gender
                                  </InputLabel>
                                  <Select
                                    value={gender}
                                    defaultValue="male"
                                    label="Gender"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    name="gender"
                                    onChange={(e) => {
                                      setChanged(true);
                                      e.preventDefault();
                                      setgender(e.target.value);
                                    }}
                                    className="block w-[200px]"
                                  >
                                    <MenuItem value="male">male</MenuItem>
                                    <MenuItem value="female">female</MenuItem>
                                  </Select>
                                </FormControl>
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Marital status"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Marital status"
                                  type="text"
                                  value={maritalStatus}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setmaritalStatus(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Status"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Status"
                                  type="text"
                                  value={status}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setstatus(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Phone"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Phone"
                                  type="number"
                                  value={phoneNumber}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setphoneNumber(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Department"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Department"
                                  type="text"
                                  value={department}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setdepartment(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Country"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Country"
                                  type="text"
                                  value={country}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setcountry(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="City"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="City"
                                  type="text"
                                  value={city}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setcity(e.target.value);
                                  }}
                                />
                                <TextField
                                  style={{
                                    display: "block",
                                    margin: "10px",
                                    width: "200px",
                                  }}
                                  variant="outlined"
                                  name="city"
                                  label="Street"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  placeholder="Street"
                                  type="text"
                                  value={street}
                                  onChange={(e) => {
                                    setChanged(true);
                                    e.preventDefault();
                                    setstreet(e.target.value);
                                  }}
                                />
                                <Box component="label" htmlFor="picture">
                                  <img
                                    className="previewimg"
                                    src={picture.filepreview}
                                    alt="UploadImage"
                                    style={{
                                      width: "70px",
                                      height: "70px",
                                      borderRadius: "50%",
                                    }}
                                  />
                                </Box>
                                <TextField
                                  id="picture"
                                  style={{
                                    display: "block",
                                    opacity: 0,
                                    height: 0,
                                    margin: 0,
                                    width: 0,
                                  }}
                                  variant="outlined"
                                  type="file"
                                  name="picture"
                                  onChange={handleInputChange}
                                />{" "}
                                {/* {picture.filepreview !== null ? ( */}
                              </div>
                              {changed && (
                                <div className="w-fit px-10 flex flex-wrap bg-[#FBFCFC]  mx-auto">
                                  <button
                                    style={{
                                      display: "block",
                                      margin: "15px",
                                      padding: "5px 10px",
                                      border: "1px solid #fff",
                                      borderRadius: "5px",
                                      color: "#fff",
                                    }}
                                    className="bg-slate-600 hover:bg-slate-500"
                                    type="submit"
                                  >
                                    Update
                                  </button>
                                </div>
                              )}
                            </form>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* <div
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            bottom: "0",
            overflowX: "hidden",
          }}
        >
          <div>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px",
              }}
            >
              {" "}
              <button
                className="btns"
                style={{
                  margin: "0 5px",
                  padding: "3px 5px 0",
                  color: "#fff",
                  height: "30px",
                  border: "1px solid #a8a8a8",
                  background: "#1d79b6",
                }}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <AiIcons.AiOutlineDoubleLeft />
              </button>
              <button
                className="btns"
                style={{
                  margin: "0 5px",
                  padding: "3px 5px 0",
                  borderRadius: "5px 0 0 5px",
                  color: "#fff",
                  height: "30px",
                  border: "1px solid #a8a8a8",
                  background: "#1d79b6",
                }}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <AiIcons.AiOutlineLeft />
              </button>
              <span style={{ display: "flex", flexWrap: "nowrap" }} id="pages">
                {pageOptions?.map((pageOption, i) => {
                  return (
                    <div>
                      <button
                        className={`btns`}
                        style={{
                          border: "1px solid #a8a8a8",
                          background: "#329ae0",
                          width: "30px",
                          height: "30px",
                          margin: "0 2px",
                          color: "#fff",
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
                className="btns"
                style={{
                  margin: "0 5px",
                  padding: "3px 5px 0",
                  borderRadius: "0 5px 5px 0",
                  color: "#fff",
                  height: "30px",
                  border: "1px solid #a8a8a8",
                  backgroundColor: "#1d79b6",
                }}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <AiIcons.AiOutlineRight />
              </button>
              <button
                // className="btns"
                style={{
                  margin: "0 5px",
                  padding: "3px 5px 0",
                  color: "#fff",
                  height: "30px",
                  border: "1px solid #a8a8a8",
                  background: "#1d79b6",
                }}
                className="bg-black"
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
        </div> */}
      </div>{" "}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenDeleteCycle}>
          <BsIcons.BsFillTrashFill className="mr-[5px]" />
          Delete
        </MenuItem>
      </Menu>{" "}
      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[5px] dark:bg-dark-bg bg-[#f0f0f0]">
          <div className="block w-[300px] h-[200px bg-[#f0f0f0] rounded-[5px]">
            <div className="text-center">
              <AiIcons.AiFillExclamationCircle className="w-[40px] my-[20px] mx-auto text-[40px]" />
              <p className="w-[60%] m-auto font-bold">
                Do you wish to delete{" "}
                <span className="text-blue-700 mr-1">{num}</span>?
              </p>
            </div>
            <div className="flex flex-wrap my-[20px] mx-0">
              <button
                className="h-[40px] w-[100px] block rounded-[5px] my-[10px] mx-auto bg-[#ABB8C3] text-[#fff]"
                onClick={handleCloseDeleteModal}
              >
                Cancel
              </button>
              <button
                className="block text-white bg-[#940000] my-[10px] mx-auto rounded-[5px] w-[100px] h-[40px]"
                onClick={deleteOneUser}
              >
                Delete
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const mapState = ({ users }) => ({
  allUsers: users.data,
  isLoaded: users.isLoaded,
});

export default connect(mapState, {
  getAllUsers,
  updateUser,
  deleteUser,
  updateUserProfile,
})(Users);
