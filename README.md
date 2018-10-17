# FinalProject
Final Project 

"npm run client" will run the client folder which is react-express-app (this avoids going back and forth to src folder and run yarn start)

"npm run server" will run server.js from the main folder.

"npm run dev" will run both client and server because we installed concurrently in the main package.json.

"nodemon run server" will run server.js and refreshes page; we do not have to stop server and run again everytime there is change nodemon will do that for us. 

There are two independent package.json files:
1. one inside client folder for express app only.
2. on main folder the main package.json where we add all required modules for server.

Note: when installing modules make sure we add the module in the proper package.json.

