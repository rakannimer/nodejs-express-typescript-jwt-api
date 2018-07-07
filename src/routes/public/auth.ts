import express from "express";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../../config";

export const handleRequest = (req: express.Request, res: express.Response) => {
  const { username, password } = req.query;
  const user_token = jsonwebtoken.sign({ username }, config.jwt.SECRET);
  res.send({
    status: "OK",
    data: {
      token: user_token
    }
  });
};

export const routePath = "/auth";

export const middlewares = [];
