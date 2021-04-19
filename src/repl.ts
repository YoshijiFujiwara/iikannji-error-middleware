import readline from "readline";
import dummyProcess from "./dummy-process";
import { errorHandler } from "./middleware/error-handler";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question(
  `何か数字を入力してにゃ。
>`,
  (statement) => {
    console.log("statement", statement);

    try {
      dummyProcess(statement);
    } catch (err) {
      const { errors } = errorHandler(err);
      console.log("errors", errors);
    }

    readlineInterface.close();
  }
);
