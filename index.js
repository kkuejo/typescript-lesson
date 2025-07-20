"use strict";
//letでデータを定義
//hasvalueが変数名、booleanが型(コロン、スペース)
//コロン、スペースの後に型を書くのが型注釈
//型注釈はオプションであり、型推論が可能な場合は省略可能
//基本は型推論
let hasValue = true;
let hasValue2 = true;
//number型は浮動小数点
let count = 10;
let float = 3.14;
let negative = -0.12;
//stringは文字列、シングルクオーテーション、ダブルクオーテーション、バッククオーテーションでも良い
let single = 'hello';
let doublle = "hello";
let back = `hello`;
//オブジェクトの型注釈
const person = {
    name: 'Jack',
    age: 21
};
//オブジェクトの型注釈
//オブジェクトの中にオブジェクトを入れることもできる
const person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
//配列の型注釈(Array型)
//変数が全て一種類の場合は、単純に型注釈で書くことができる。
//変数が複数種類の場合は、|(または)を使って書くことができる。
const fruits = ['apple', 'banana', 'grape'];
const frutts2 = ['apple', 'banana', 'grape', 1];
//tuple型は型推論が行われないので、型注釈する必要がある。
//配列の強化版
const book = ['business', 1500, false];
//enum型は列挙型
//coffeeのsizeに自由に入れられないようにする。
//sizeにはShort, Tall, Grande, Ventiの4つの値が入る
//Objectと同じように、""."で使える。
//通常の変数はキャメルケースで書くのが一般的(最初は小文字、以降は大文字)
//enumは大文字で書くのが一般的
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
//enum型で値を与えなければ、0から順番に値が入る。
//値を与えると、その値から順番に値が入る。
//つまり、SHORTは0、TALLは1、GRANDEは100、VENTIは101となる。
var CoffeeSize2;
(function (CoffeeSize2) {
    CoffeeSize2[CoffeeSize2["SHORT"] = 0] = "SHORT";
    CoffeeSize2[CoffeeSize2["TALL"] = 1] = "TALL";
    CoffeeSize2[CoffeeSize2["GRANDE"] = 100] = "GRANDE";
    CoffeeSize2[CoffeeSize2["VENTI"] = 101] = "VENTI";
})(CoffeeSize2 || (CoffeeSize2 = {}));
const coffee2 = {
    hot: true,
    size: CoffeeSize2.VENTI
};
//enumに数字があった場合には、数字を入れることができる。
//coffee.size = 'VENTI';とするとエラーになる。
//coffee2.size = 100;とすることができる。
//any型は全ての型を許可する。
//boolian, string, object, numberを入れることができる。
//objectに新しいproperty(.coffee)を追加することができる。
let anything = true;
anything = 'hello';
anything = ['hello', 50, true];
anything = {};
anything.coffee = 'coffee';
//any型で配列を用意すると、何でも入れれる配列を作ることができる。
let anything2 = [true];
//Union型は複数の型を許可する。
//|を使って書く。
//文字列も数字も入れたい
let unionType = 10;
//unionType.toUppercase();とすると、.toUpperCase()はstringにしか使えないのでエラーになる。
unionType = 'hello';
unionType.toUpperCase();
//配列を指定する場合は()を使う必要がある。
let unionTypes = [1, 'hello'];
//Literal型は特定の値を指定する。
//'apple'と形にすると、appleしか入らなくなる。
//constにした瞬間に型推論はLiteral型になる。
//ちなみに、letにすると型推論はstring型になる。
const apple = 'apple';
//const apples: 'apple' = 'banana';とすると、bananaはappleにならないのでエラーになる。
//どういう場合に便利なのか？
//Enum型と同じように、特定の値を指定することができる。
let clothSize = 'M';
//Enum型の違いは、EnumはObjectであるが、Literal型はObjectではない。
//つまり、clothSize.Sのような書き方はできない。
const cloth = {
    size: 'M',
    color: 'red'
};
let clothColor = 'red';
const cloth2 = {
    size: 'M',
    color: 'red'
};
//関数に型をつける
//パラメータと戻り値に型をつける。
//パラメータには型推論が効かない。(any型になってしまう。)
//戻り値には型推論が効く。(型推論でOK)
function add(num1, num2) {
    return num1 + num2;
}
//関数の戻り値にvoidを使う
function sayHello() {
    console.log('Hello');
}
//関数の戻り値にvoidを使う。
//return文を入れると、undefinedとvoidの両方が使える。
//基本的にundefinedを使う必要はない。
function sayHello2() {
    console.log('Hello');
    return;
}
//null型
//undefined型にundefinedしか入れられないのと同様に、
//null型にはnullしか入れられない。
let tmpUndefined = undefined;
let tmpNull = null;
//関数を保持する変数に型をつける。
//関数の型は、パラメータと戻り値の型を指定する。
//戻り値は、=>を使って指定する。
const anotherAdd = add;
//無名関数を使って以下のように書くこともできる。
//下の左辺、右辺のどちらか一方に、変数、戻り値の型が指定されていれば十分。
const anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
//arrow関数(=>)を使って関数をシンプルに定義することもできる。
//一つの変数なら、一つ目のnumberは省略できる。
//{ }を関数に書く必要がなくなる。//return文を省略できる。
const doubleNumber = num => num * 2;
//これを、型注釈すると以下のようになる。
const doubleNumber2 = (num) => num * 2;
//関数の型注釈を前に出すと以下のようになる。
const doubleNumber3 = num => num * 2;
//callback関数
//変数の引数に、cb: (num: number) => numberとCallback関数を指定する。
//doubleAndHandleの2つ目の引数が、(num: number) => numberの型を持つ関数を指定できる。
function doubleAndHandle(num, cb) {
    console.log(cb(num));
}
//関数に実際に代入するときに、変数に関数を直接書き込むと以下のようになる。
/*
doubleAndHandle(10, doubleNum => {
    return doubleNum *2;
});
*/
//unknown型
//unknown型は、any型と同じように全ての型を許可する。
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 10;
unknownInput = true;
//下のようにunknown型をstring型に代入するとエラーになる。
//text = unknownInput;
anyInput = 'hello';
anyInput = 10;
anyInput = true;
//下のようにany型をstring型に代入するとエラーにならない。
text = anyInput;
//codeで型を絞り込むときに使う。
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
//Satisfies演算子は、単純に型のチェックをする演算子
//10がnumber型に代入できればOK, 代入できなければエラーを出す。
//型注釈でエラーが出ないかどうかをチェックするのと同じ
10;
//下のように変数の宣言でsatisfies演算子を用いると、型推論を利用しつつ、型のチェックを行うことができる。
const age = 45;
//never型は何の値も返さない。
//void型は何も返さないことを明示的に示していた。
//errorを投げる関数。型推論はvoid型になってしまう。
function error(message) {
    throw new Error(message);
}
//return size;の型を調べて、never型になっていれば、s, m , l の全てがswitchで網羅されていることが確認できる。
function getSizeName(size) {
    switch (size) {
        case 's': return 'small';
        case 'm': return 'medium';
        case 'l': return 'large';
        default: return size;
    }
}
