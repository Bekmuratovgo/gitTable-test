import axios from "axios";
import { tableSlice } from "./tableSlice";
import { formatDateToCustomFormat } from "../utils";

const base_url = process.env.REACT_APP_BASE_URL;



export const getData = () => async dispatch => {
  dispatch(tableSlice.actions.setLoading(true));

  try {
    const res =  await axios.get(base_url);
    dispatch(tableSlice.actions.setDataSuccess(res.data));

    const months = []
    Object.entries(res.data).forEach(([key, value], index) => { //for Month
      let month = formatDateToCustomFormat(key, true);
      let lastElem = months[months.length -1]; 
      
      if (lastElem?.value === month && months.length > 1) {
        months[months.length -1] = {
          ...lastElem,
          column: lastElem.column + 1
        }
      } else {
        months.push({
          value: month,
          column: 1
        })
      }
    })
    dispatch(tableSlice.actions.setMonthsSuccess(months));

  } catch (error) {
    // dispatch(setDataError(error.message))
  } finally {
    dispatch(tableSlice.actions.setLoading(false));
  }

}
