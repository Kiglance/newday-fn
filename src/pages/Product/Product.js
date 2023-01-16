import React, { useEffect, useState } from "react";
import { getOneCompany } from "../../redux/actions/companyActions";
import { connect } from "react-redux";

const Product = (props) => {
  const { isLoaded, singleCompany } = props;

  const prodId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    props.getOneCompany(prodId);
  }, []);

  console.log(prodId);
  console.log(singleCompany);

  return (
    <div>
      <h1 className="font-bold text-center text-[20px] uppercase">
        Welcome to {singleCompany.companyName}
      </h1>
    </div>
  );
};

const mapState = ({ companies }) => ({
  singleCompany: companies.oneValue.data,
});

export default connect(mapState, {
  getOneCompany,
})(Product);
