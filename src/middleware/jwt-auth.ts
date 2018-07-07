import express from "express";
import jsonwebtoken from "jsonwebtoken";
import { get } from "lodash";
import { config } from "../config/index";

export const jwtAuthMiddleware = (
  req: express.Request,
  res: express.Response,
  next: () => any
) => {
  const authorizationToken = get(req, "headers.authorization", "");
  if (authorizationToken === "") {
    // ERROR MESSAGES SHOULD BE MORE VERBOSE IN DEV AND MORE OBSCURE ON PROD
    res.send({ status: "AUTH_ERROR", data: "INVALID_DATA" });
    return;
  }
  if (authorizationToken.startsWith("Bearer ") === false) {
    res.send({ status: "AUTH_ERROR", data: "INVALID_FORMAT" });
    return;
  }
  const token = authorizationToken.replace("Bearer ", "");
  try {
    const decodedData = jsonwebtoken.verify(token, config.jwt.SECRET);
    //@ts-ignore
    req.user = decodedData;
    next();
  } catch (err) {
    res.send({ status: "AUTH_ERROR", data: "INVALID_TOKEN" });
  }
};
