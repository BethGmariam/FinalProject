# FinalProject
Final Project 

clone FinalProject.... 

There are two independent package.json files:
1. one inside client folder for express app only.
2. on main folder the main package.json where we add all required modules for server.

Note: when installing modules make sure we add the modules in the proper package.json.


run "npm install" to install all npm modules required in the main package.json.

run "npm run client-install" to install all modules required for the client package.json; this is still while we are in the main project folder. No need to go to client folder and run npm install but can be done that way as well.


"npm run client" will run the client folder which is react-express-app (this avoids going back and forth to src folder and run yarn start)

"npm run server" will run server.js from the main folder.

"npm run dev" will run both client and server because we installed concurrently in the main package.json.

"nodemon run server" will run server.js and refreshes page; we do not have to stop server and run again everytime there is change nodemon will do that for us. 



