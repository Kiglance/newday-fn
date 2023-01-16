import creator from "./creator";
import { GET_COMPANY, GET_ONE_COMPANY } from "..";
import { toast } from "react-toastify";

export const getAllCompanies = () => async (dispatch) => {
  try {
    const datas = await fetch(`http://localhost:4040/api/v2/company/`);
    const companies = await datas.json();
    dispatch(creator(GET_COMPANY, companies));
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
};

export const getOneCompany = (companyId) => async (dispatch) => {
  try {
    const data = await fetch(
      `http://localhost:4040/api/v2/company/${companyId}`
    );
    const oneCompany = await data.json();
    console.log(oneCompany);
    dispatch(creator(GET_ONE_COMPANY, oneCompany));
  } catch (error) {
    return console.log(error);
  }
};
