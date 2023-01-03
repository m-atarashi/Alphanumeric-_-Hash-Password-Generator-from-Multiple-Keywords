# Alphanumeric-_ Hash Password Generator from Multiple Keywords
### **仕様**

- キーワードの集合からパスワードを生成する。
- 順不同の入力を許すため、キーワードはソート・連結される。
- パスワードは $d$ 桁の 64 進数とする。この 64 進法の記号は 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_ である。
- パスワードの計算にはハッシュ関数を用いる。可変長出力の SHAKE256 を採用する。出力長は $\log_264^{d} = 6d$ ビットである。
- 16 進数のハッシュ値の 64 進法表現をパスワードとする。基数変換には Base64 エンコードを使用する。

### 実装

- Web アプリケーションとして実装し、GitHub Pages にデプロイする。
- ブラウザ拡張機能として実装する。
- 言語は JavaScript、SHA の実装には jsSHA を採用する。


### UI

- 桁数、ハイフンおよびアンダーバーの有無、結果をクリップボードにコピーするかどうかを設定可能なオプションを用意する。
