import express from "express";
import { get } from "lodash";
import { jwtAuthMiddleware } from "../../middleware/jwt-auth";

// const validateData = inputData => {};

export const handleRequest = async (
  req: express.Request,
  res: express.Response
) => {
  const inputData = get(req, "query", {});
  // try {
  //   validateData(inputData);
  // } catch (err) {
  //   res.send({ status: "INPUT_ERROR" });
  //   return;
  // }
  res.send("Oh hai Mark !");
};

export const routePath = "/protected";

export const middlewares = [jwtAuthMiddleware];
