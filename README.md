# 経費アプリ

-経費の管理アプリを作成致しました。
React をメインに CRUD の知識を活かし作品にしました。
firebase による Google アカウント認証を実装しております。

・公開アプリはこちらよりご確認いただけます → https://expensify.tomo-std.com
※試作品につきましては自動でテストユーザーとしてログイン致します。

フロントエンド React/Javascript(ES6) HTML/SCSS
サーバーサイド Node.js/express
データベース firebase

-テスト Jest/Enzyme
テスト内容は以下の通りとなります。

■AddExpensesPage.test.js
① 正しくレンダリングされているか スナップショット比較
② 送信(追加)

■EditExpensesPage.test.js
① 正しくレンダリングされているか スナップショット比較
② 子コンポーネント/送信(編集)
③ 削除処理/ボタンクリック

■ExpensesDashboardPage.test.js
① 正しくレンダリングされているか スナップショット比較

■ExpensesForm.test.js
① 正しくレンダリングされているか スナップショット比較
② 正しくレンダリングされているか スナップショット比較 日付反映
③ エラー表記されているか
④ 入力フォーム変更反映'description'
⑤ 入力フォーム変更反映'note'
⑥ 入力フォーム変更反映'amount'
⑦ 入力フォーム変更反映'amount' 存在しない時
⑧ 入力内容呼び出されているか
⑨ カレンダー日付が現在日を選択しているか
⑩ カレンダーのフォーカスが反映できているかどうか

■ExpenseList.test.js
① 正しくレンダリングされているか スナップショット比較
② データ(expense)が空の場合でもレンダリングされているか

■ExpenseListFilters.test.js (テスト用データ(fixtures)有)
① 正しくレンダリングされているか スナップショット比較
② 日付一致？
③ テキスト変更でフィルタリングされているかどうか
④'date'選択でフィルタリングされているか
⑤'amount'選択でフィルタリングされているか
⑥ カレンダー日付選択範囲内にフィルタリングされているか 【難しい】
⑦ フォーカスされているか 【難しい】

■ExpenseListItem.test.js
① 正しくレンダリングされているか スナップショット比較

■ExpensesSummary.test.js
① 単数で数値が反映されているか
② 複数カウントで合計値が反映されているか

■Header.test.js
① 正しくレンダリングされているか スナップショット比較

■LoadingPage.test.js
① 正しくレンダリングされているか スナップショット比較
② ログアウトボタンクリックで実行されたかどうか確認

■Login.test.js
① 正しくレンダリングされているか スナップショット比較
② ログインボタンクリックで反映(ログイン)できているか

■NotFoundPage.test.js
② ログインボタンクリックで反映(ログイン)できているか
