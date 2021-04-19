import { CustomError } from "./custom-error";

export class MultipleOf3Error extends CustomError {
  constructor() {
    super("3の倍数はアカンで！アホになるで！");

    Object.setPrototypeOf(this, MultipleOf3Error.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
