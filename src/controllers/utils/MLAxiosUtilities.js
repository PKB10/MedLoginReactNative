/*!
 @file MLAxiosUtilities.js

 @brief MLAxiosUtilities 
 @discussion This file contains the axios functions required to make HTTP requests

 @author Priyanka Bhatia
 @copyright  2021 Priyanka Bhatia
 @version  1.0.0
 */


 import axios from "axios";

 // Declare an axios instance
const axiosInstance = axios.create({
    validateStatus: function validateStatus(status) {
        let default_ = status >= 200 && status < 423;
        return default_
    }
});

// Declare a custom axios instance
const MLAxiosInstance = axiosInstance.create({
  baseURL: "http://medlo-ecsal-agu63xv2dg1b-521010580.us-east-2.elb.amazonaws.com"
});

// Function to make a GET request 
export const sendGETRequest = (url,headers) => {
  return MLAxiosInstance({
    method: 'GET',
    url,
    headers,
  });
};


// Function to make a POST request 
export const sendPOSTRequest = (url, data) => {
  return MLAxiosInstance({
    method: 'POST',
    url,
    data
  });
};

// Intercept the response to catch invalid status codes
MLAxiosInstance.interceptors.response.use(
  response => {
    if (response.data.status === 400) {
      alert("Request failed. Bad Request!");
    }
    return response;
  },
  error => {
    if (error.response.data) {

      if (error.response.data.message) {
        alert(error.response.data)
      }
      else {
        alert("Request failed. Something went wrong!");
      }
    }

    return Promise.reject(error);
  },
);


