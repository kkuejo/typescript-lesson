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

3. includeとexcludeとfilesを使ってコンパイルするファイルを選ぶ。

tsconfig.jsonの中身を見ていく。

"exclude" : [
    "compiler.ts"
]
というように書くと、全てに一斉に適応するコンパイルから外すことができる。
"exclude" : [
    "*.spec.ts"
]
のようにワイルドカードを用いることも可能。
"exclude" : [
    "**/compiler.ts"
]
のように、*を2つつけるとどの様な深さにあるファイルもexcludeすることになる。
"include" : [
    "index.ts"
]
とコンパイルするファイルに入れることもできる。
"files" : [
    "index.ts"
]
filesにはワイルドカードは使えないが、filesのファイルもコンパイルの対象とすることができる。

includeとfilesが両方ない場合のみ、全てのファイルがコンパイルの対象となる。
<include> - <exclude> + <files>の順にコンパイルする対象ファイルを決めるので、includeとexcludeの両方にファイルがあった場合はコンパイルの対象にならないが、excludeとfilesの両方にファイルがあった場合にはコンパイルの対象となることに注意。

4. targetを指定して、特定バージョンのJavaScriptに変換する。
    tsconfig.jsonの中身を見ていく。
　　デフォルトでは、es5に変換される。
    "target": "es2016",など特定のJavaScriptのバージョンを指定することができる。

5. tsconfig.jsonにlibを指定して、特定の関数・メソッドを利用できるようにする。
    "lib" : [
        "es2016",
    ]
    これで、es2016で定義されるlibraryにある全ての関数・メソッドを利用できるようになる。
    デフォルトで、libがコメントアウトされていると、targetによりデフォルトで指定されたlibが自動で適用されることになる。

6. allowJs、checkJs, jsx, declaration, declarationMap
　　allowJs⇒JavaScriptもコンパイルの対象を含む
    checkJs⇒allowJsと同時に使う必要がある。JavaScriptのファイルをチェックするようになる。
    jsx⇒React JSの時に使う
    declaration ⇒ libraryを作って共有する際には、コンパイル済のJavaScriptファイルと、TypeScriptで書かれた型宣言ファイルのみを共有する(.d.ts)。

7. SourceMap
　ブラウザでtypeScriptを見たいときに使う。
    SourceMapをtrueにして、tscでコンパイルすると、compiler.js.mapというファイルができる。
    これを利用して、ブラウザからTypeScriptを利用することができる。
    



