import axios from "axios";

const BASEURL  = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY   = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const queryFix = "&q=";

export default {
  // Gets all items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  // return axios.post("http://localhost:3000/api/items", itemData);
  },
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
  search: function(query) {
  	console.log('full query: '+ BASEURL + APIKEY + queryFix + query);
    return axios.get(BASEURL + APIKEY + queryFix + query);
  }

};
