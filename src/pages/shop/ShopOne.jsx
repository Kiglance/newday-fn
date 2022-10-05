import React, { useEffect, useState } from "react";
import { getClassesOfCategory } from "../../redux/actions/categoryClassActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopOne = (props) => {
  const { allClassesOfCategory } = props;

  const [classes, setClasses] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    if (allClassesOfCategory !== undefined) {
      setClasses(allClassesOfCategory.data);
    }
  }, [allClassesOfCategory.data]);

  // console.log(window);
  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {classes?.map((values) => {
          return (
            <div
              key={values.classId}
              style={{
                margin: "0 20px",
                cursor: "pointer",
                // border: "1px solid #000",
                padding: "10px",
                borderRadius: "5px",
                background: "#008080",
                color: "#fff",
              }}
            >
              <h1>{values.className}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};
const mapState = ({ classesOfCategory }) => ({
  allClassesOfCategory: classesOfCategory.data,
});

export default connect(mapState, {
  getClassesOfCategory,
})(ShopOne);
