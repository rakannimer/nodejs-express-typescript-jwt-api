import express from "express";
import { get } from "lodash";
import { jwtAuthMiddleware } from "../../middleware/jwt-auth";

const validateData = (inputData: any) => {};

export const handleRequest = async (
  req: express.Request,
  res: express.Response
) => {
  const inputData = get(req, "query", {});
  try {
    validateData(inputData);
  } catch (err) {
    res.send({ status: "INPUT_ERROR" });
    return;
  }
  // REPLACE any with type of the user data decoded from the JWT token
  const { user } = req as any;
};

export const routePath = "{{route_path}}";

export const middlewares = [jwtAuthMiddleware];
