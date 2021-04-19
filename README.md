# iikannji-error-middleware

```
$ yarn install
$ yarn ts ./src/repl.ts
```

- 数字以外を入力すると CustomError を返します
- 3 の倍数でも CustomError を返します
- 100 の倍数だと、Error を返します

## 設計

- とりあえず、abstract class の CustomError を定義し、それを extends した各エラークラスを作成
- errorHandler ミドルウェアを通して、エラーメッセージをシリアライズできていることを確認。
- 最上部で、ミドルウェアを定義していれば、どこで Error を throw しても大丈夫な設計を目指す。
