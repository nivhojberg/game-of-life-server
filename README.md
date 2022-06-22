# Game of Life Server
This project is the server side of an application based on "Game of Life".
The server is containing the game logic, and exporting endpoints for the client to communicate and perform actions to state.

# General Architecture of the application
The main technologies that were used are:
Typescript
Express
Cors
Body-Parser

Using "express" to create the app and routers with "cors" to allow all clients to access the endpoints, and "body-parser" to get the request body when needed.

# The Reasoning behing the main technical choices
I decided to use "express" because this is the easiest way I know to start a server application.
I decided to use "cors" to recognize all origins because when I tried running the server only with express, the access to the endpoints failed.
I decided to use "body-parser" because before using it I didn't find the body of the request.

# Things that wasn't implemented or trade-offs
If I could spend more time on the assignment, I would:
1. Handle errors better, sending more details about the errors.
2. Validate requests in a separate controller file.
3. Use typescript better everywhere (for example validating the request body to be the interface that I expect).
4. Import or implement a nice Router for more clean endpoints code.

# Run project locally instructions
1. Clone the project
2. Run "npm i"
3. run "npm run build"
4. run "npm start"
