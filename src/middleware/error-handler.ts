import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error) => {
  // 自作エラーなら、そのメッセージを返却する
  if (err instanceof CustomError) {
    return { errors: err.serializeErrors() };
  }

  // 自作エラー以外
  console.log("自作エラー以外");
  console.error(err);
  return { errors: "自作エラー以外の何かやで" };
};
