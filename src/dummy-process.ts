import { MultipleOf3Error } from "./errors/multiple-of-3-error";
import { NotNumberError } from "./errors/not-number-error";

// ダミーの処理
const dummyProcess = (statement: string) => {
  const num = Number(statement);

  // 数字じゃなかったら、とりあえずエラー
  if (isNaN(num)) {
    throw new NotNumberError();
  }

  // 3の倍数でもエラー
  if (num % 3 === 0) {
    throw new MultipleOf3Error();
  }

  if (num % 100 === 0) {
    throw new Error("100の倍数エラー");
  }

  return;
};

export default dummyProcess;
