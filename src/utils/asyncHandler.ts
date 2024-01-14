import type { NextFunction, Request, Response } from "express";

declare type requestHandlerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const asyncHandler = (requestHandler: requestHandlerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
