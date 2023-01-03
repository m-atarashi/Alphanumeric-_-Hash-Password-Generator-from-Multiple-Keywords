# Alphanumeric-_ Hash Password Generator from Multiple Keywords
### **仕様**

- キーワードの集合からパスワードを生成する。
- 順不同の入力を許すため、キーワードはソート・連結される。
- 出力は $d$ 桁の 64 進数とする。64 進数の数字は 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_ である。
- 入力から出力への写像にはハッシュ関数を用いる。可変長出力の SHAKE256 を採用する。出力長は $\log_264^{d} = 6d$ ビットとなる。
- 最終的には、16 進数の出力を 64 進数に変換した値をパスワードとする。変換には Base64 エンコードを使用する。

### 実装

- Web アプリケーションとして実装し、GitHub Pages にデプロイする。
- ブラウザ拡張機能として実装する。
- 言語は JavaScript、SHA の実装には jsSHA を採用する。


### UI

- 桁数、ハイフンおよびアンダーバーの有無、結果をクリップボードにコピーするかどうかを設定可能なオプションを用意する
