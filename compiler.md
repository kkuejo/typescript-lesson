# TypeScript コンパイラー設定ガイド

## 1. ウォッチモード

TypeScriptファイルを保存すると自動的にJavaScriptにコンパイルするウォッチモードを有効にできます。

```bash
tsc index.ts -w
```

または

```bash
tsc index.ts --watch
```

**使用方法：**
- ターミナルに上記のコマンドを入力すると、ウォッチモードが開始されます
- TypeScriptファイルを保存すると自動的にJSにコンパイルされます
- 停止する場合は `Ctrl + C` を押してください

## 2. tsconfig.jsonの作成

複数のファイルをコンパイルする場合や、プロジェクト全体の設定を行う場合は `tsconfig.json` を作成します。

```bash
tsc --init
```

**特徴：**
- プロジェクトフォルダに `tsconfig.json` が自動生成されます
- `tsc` コマンドだけで全てのTSファイルがJSに変換されます
- `tsconfig.json` の設定に従ってコンパイルが実行されます

## 3. コンパイル対象ファイルの選択

### include、exclude、files の使用方法

#### exclude（除外設定）

```json
{
  "exclude": [
    "compiler.ts"
  ]
}
```

特定のファイルをコンパイル対象から除外できます。

**ワイルドカードの使用例：**

```json
{
  "exclude": [
    "*.spec.ts"
  ]
}
```

**深い階層のファイルを除外：**

```json
{
  "exclude": [
    "**/compiler.ts"
  ]
}
```

`**` を使用すると、どの深さにあるファイルも除外できます。

#### include（含める設定）

```json
{
  "include": [
    "index.ts"
  ]
}
```

特定のファイルをコンパイル対象に含めます。

#### files（個別指定）

```json
{
  "files": [
    "index.ts"
  ]
}
```

**注意：** `files` にはワイルドカードは使用できません。

### コンパイル対象の決定順序

1. **include** で指定されたファイル
2. **exclude** で除外されたファイルを除く
3. **files** で指定されたファイルを追加

**重要なポイント：**
- `include` と `exclude` の両方に同じファイルがある場合 → **コンパイル対象外**
- `exclude` と `files` の両方に同じファイルがある場合 → **コンパイル対象**

## 4. JavaScriptターゲットバージョンの指定

`target` を指定することで、特定バージョンのJavaScriptに変換できます。

```json
{
  "target": "es2016"
}
```

**デフォルト：** ES5に変換されます

## 5. ライブラリの指定

`lib` を指定することで、特定の関数・メソッドを利用できるようになります。

```json
{
  "lib": [
    "es2016"
  ]
}
```

**デフォルト動作：**
- `lib` がコメントアウトされている場合、`target` で指定されたバージョンのライブラリが自動的に適用されます

## 6. その他の重要な設定

### allowJs、checkJs
```json
{
  "allowJs": true,
  "checkJs": true
}
```

- **allowJs：** JavaScriptファイルもコンパイル対象に含める
- **checkJs：** `allowJs` と同時に使用する必要があります。JavaScriptファイルのチェックを行います

### jsx
```json
{
  "jsx": "react"
}
```

React JSXを使用する際の設定です。

### declaration
```json
{
  "declaration": true
}
```

ライブラリを作成して共有する際に使用します。コンパイル済みのJavaScriptファイルと、TypeScriptで書かれた型宣言ファイル（`.d.ts`）のみを共有できます。

## 7. SourceMap

ブラウザでTypeScriptのソースコードを確認したい場合に使用します。

```json
{
  "sourceMap": true
}
```

**使用方法：**
1. `sourceMap` を `true` に設定
2. `tsc` でコンパイルを実行
3. `compiler.js.map` ファイルが生成されます
4. ブラウザからTypeScriptのソースコードを確認できます

---

*このガイドは、TypeScriptコンパイラーの基本的な設定と使用方法について説明しています。*
    



