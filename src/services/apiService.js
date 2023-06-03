import axios from "axios";
import { getToken } from "../utils/cache";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const url = "https://simbolo-json-server-auth.onrender.com/";

export const apiCall = async (endPoint, method, data)=> {
  const token = getToken();
  if(token) {
    headers.Authorization = `Bearer ${token}`;
  }

  axios.defaults.headers = headers;
    return await axios
       [method](`${url}/${endPoint}`, data)
       .then(function (response) {
         return response.data;
       });
}

// method , data 
// axios.method 
// axios[method]

// person.name; 

// const property = 'name';
// person[property]
// person['name']