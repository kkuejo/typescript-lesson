//letでデータを定義
//hasvalueが変数名、booleanが型(コロン、スペース)
//コロン、スペースの後に型を書くのが型注釈
//型注釈はオプションであり、型推論が可能な場合は省略可能
//基本は型推論
let hasValue: boolean = true;
let hasValue2 = true;

//number型は浮動小数点
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

//stringは文字列、シングルクオーテーション、ダブルクオーテーション、バッククオーテーションでも良い
let single: string = 'hello';
let doublle: string = "hello";
let back: string = `hello`;

//オブジェクトの型注釈
const person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 21
}

//オブジェクトの型注釈
//オブジェクトの中にオブジェクトを入れることもできる
const person2= {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}

console.log(person.name);

//配列の型注釈(Array型)
//変数が全て一種類の場合は、単純に型注釈で書くことができる。
//変数が複数種類の場合は、|(または)を使って書くことができる。
const fruits: string[] = ['apple', 'banana', 'grape'];
const frutts2: (string|number) [] = ['apple', 'banana', 'grape', 1];

//tuple型は型推論が行われないので、型注釈する必要がある。
//配列の強化版
const book: [string, number, boolean] = ['business', 1500, false];

//enum型は列挙型
//coffeeのsizeに自由に入れられないようにする。
//sizeにはShort, Tall, Grande, Ventiの4つの値が入る
//Objectと同じように、""."で使える。
//通常の変数はキャメルケースで書くのが一般的(最初は小文字、以降は大文字)
//enumは大文字で書くのが一般的
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL', 
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
}

//enum型で値を与えなければ、0から順番に値が入る。
//値を与えると、その値から順番に値が入る。
//つまり、SHORTは0、TALLは1、GRANDEは100、VENTIは101となる。
enum CoffeeSize2 {
    SHORT,
    TALL, 
    GRANDE = 100,
    VENTI
}

const coffee2 = {
    hot: true, 
    size: CoffeeSize2.VENTI
}
//enumに数字があった場合には、数字を入れることができる。
//coffee.size = 'VENTI';とするとエラーになる。
//coffee2.size = 100;とすることができる。


//any型は全ての型を許可する。
//boolian, string, object, numberを入れることができる。
//objectに新しいproperty(.coffee)を追加することができる。
let anything: any = true;
anything = 'hello';
anything = ['hello', 50, true];
anything = {};
anything.coffee = 'coffee';
//any型で配列を用意すると、何でも入れれる配列を作ることができる。
let anything2: any[] = [true]

//Union型は複数の型を許可する。
//|を使って書く。
//文字列も数字も入れたい
let unionType: number | string = 10;
//unionType.toUppercase();とすると、.toUpperCase()はstringにしか使えないのでエラーになる。
unionType = 'hello';
unionType.toUpperCase();
//配列を指定する場合は()を使う必要がある。
let unionTypes: (number | string)[] = [1, 'hello'];

//Literal型は特定の値を指定する。
//'apple'と形にすると、appleしか入らなくなる。
//constにした瞬間に型推論はLiteral型になる。
//ちなみに、letにすると型推論はstring型になる。
const apple: 'apple' = 'apple';
//const apples: 'apple' = 'banana';とすると、bananaはappleにならないのでエラーになる。
//どういう場合に便利なのか？
//Enum型と同じように、特定の値を指定することができる。
let clothSize: 'S' | 'M' | 'L' = 'M';
//Enum型の違いは、EnumはObjectであるが、Literal型はObjectではない。
//つまり、clothSize.Sのような書き方はできない。
const cloth: {
    size: 'S' | 'M' | 'L';
    color: 'red' | 'blue' | 'green';
} = {
    size: 'M',
    color: 'red'
}


//Type Aliasは型の別名をつける。
//わかりやすく言うと、型の変数を作るもの。
//別名をつけて分かりやすくする。
type CoothColor = 'red' | 'blue' | 'green';
let clothColor: CoothColor = 'red';
const cloth2: {
    size: 'S' | 'M' | 'L';
    color: CoothColor;
} = {
    size: 'M',
    color: 'red'
}





//Union型とLiteral型の違いは、Union型は複数の型を許可するが、Literal型は特定の値を指定する。
//Union型は、どちらの型でも使える。
//Literal型は、特定の値を指定する。