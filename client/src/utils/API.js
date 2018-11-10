import axios from "axios";

const BASEURL1  = "http://apilayer.net/api/validate?access_key=";
const APIKEY1   = "358013142c563d756a1ff7dbddd0d249";
const queryFix1 = "&number=";
const ccode = "&country_code"

const BASEURL2  = "http://apilayer.net/api/check?access_key=";
const APIKEY2   = "9c5398704689a20bc315c4c7a05e8958";
const queryFix2 = "&email=";
const smtp = "&smtp=0"

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  loginFn: function(userData) {
    return axios.post("api/users/login", userData);
  },

  registerFn: function(userData) {
    return axios.post("/api/users/registration", userData);
  },

  loadDash: function(userData) {
    return axios.post("api/users/dashboard", userData);
  },

  logout: function(userData) {
    return axios.post("api/users/logout", userData);
  },

  verifyNum: function(query) {
  	console.log('full query: '+ BASEURL1 + APIKEY1 + queryFix1 + query + ccode);
    return axios.get(BASEURL1 + APIKEY1 + queryFix1 + query);
  },

  verifyEM: function(query) {
  	console.log('full query: '+ BASEURL2 + APIKEY2 + queryFix2 + query);
    return axios.get(BASEURL2 + APIKEY2 + queryFix2 + query + smtp);
  }

};
