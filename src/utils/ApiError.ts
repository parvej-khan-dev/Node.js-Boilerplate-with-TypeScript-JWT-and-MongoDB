class ApiError extends Error {
  statusCode: number;
  data: null;
  message: string;
  success: false;
  errors: any[];
  stack: string;

  constructor(
    statusCode: number,
    message: string = "Something is Wrong",
    errors: any[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.stack = stack;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
