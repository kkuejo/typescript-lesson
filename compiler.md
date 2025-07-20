1. ウォッチモード
tsc index.ts -w
または、
tsc index.ts --watch
とターミナルに打つと、watchモードになり、TSを保存すると自動的にJSにコンパイルする。
止めるときは、Ctrl＋Cで良い。

2. tsc --initによるtsconfig.jsonの作成
複数のファイルをコンパイルしてTSからJSに変換したい場合。
tsc complier.ts index.ts のようにスペースで空けてもよいが。。
プロジェクトと同じフォルダにtsconfig.jsonを作る。
tsc --init
とターミナルに打つと、自動的に作成される。
tsconfig.jsonができると、tscとターミナルに打つと、全てのtsファイルがjsに変換される。
つまり、tscとターミナルに打つと、tsconfig.jsonの設定にしたがってコンパイルされる。

