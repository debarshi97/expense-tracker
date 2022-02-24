import {url} from "./Strings";
import axios from "axios";

export const getStatementData = () => {
    axios
      .get(`${url}/statement`)
      .then((response) => {
        console.log("Response data getStatementData() ", response.data);
        return response.data;
      })
      .catch((error) => {
        console.log("Error ", error);
      });
};