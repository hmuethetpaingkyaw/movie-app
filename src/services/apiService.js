import axios from "axios";


export const apiCall = async (url)=> {
    return await axios
       .get(url)
       .then(function (response) {
         return response.data;
       });
}

// method , data 
// axios.method 
// axios[method]