import { CustomError } from "./custom-error";

export class NotNumberError extends CustomError {
  constructor() {
    super("数字じゃないとアカンで");

    Object.setPrototypeOf(this, NotNumberError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
