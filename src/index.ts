import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// <GENERATED_CODE_DO_NOT_EDIT>
//  <RouteImports>
import {
  handleRequest as handleHelloRequest,
  routePath as helloPath,
  middlewares as helloMiddlewares
} from "./routes/public/hello";
import {
  handleRequest as handleProtectedRequest,
  routePath as protectedPath,
  middlewares as protectedMiddlewares
} from "./routes/protected/protected";

import {
  handleRequest as authHandleRequest,
  routePath as authRoutePath
} from "./routes/public/auth";

//  </RouteImports>
// </GENERATED_CODE_DO_NOT_EDIT>

const server = express();
server.use(cors());
server.use(bodyParser.json());

// <GENERATED_CODE_DO_NOT_EDIT>
//  <ServerRoutes>
server.get(helloPath, helloMiddlewares, handleHelloRequest);

server.get(protectedPath, protectedMiddlewares, handleProtectedRequest);
server.get(authRoutePath, authHandleRequest);

//  </ServerRoutes>
// </GENERATED_CODE_DO_NOT_EDIT>

// If this module is run from the command line, e.g. node index.js
if (require.main === module) {
  server.listen(process.env.PORT || 3000);
}

export { server };
