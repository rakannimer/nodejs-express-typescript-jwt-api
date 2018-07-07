import express from "express";
import { get } from "lodash";

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
};

export const routePath = "{{route_path}}";

export const middlewares = [];
