//letでデータを定義
//hasvalueが変数名、booleanが型(コロン、スペース)
//コロン、スペースの後に型を書くのが型注釈
//型注釈はオプションであり、型推論が可能な場合は省略可能
//基本は型推論
var hasValue = true;
var hasValue2 = true;
//number型は浮動小数点
var count = 10;
var float = 3.14;
var negative = -0.12;
//stringは文字列、シングルクオーテーション、ダブルクオーテーション、バッククオーテーションでも良い
var single = 'hello';
var doublle = "hello";
var back = "hello";
//オブジェクトの型注釈
var person = {
    name: 'Jack',
    age: 21
};
//オブジェクトの型注釈
//オブジェクトの中にオブジェクトを入れることもできる
var person2 = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
console.log(person.name);
//配列の型注釈(Array型)
//変数が全て一種類の場合は、単純に型注釈で書くことができる。
//変数が複数種類の場合は、|(または)を使って書くことができる。
var fruits = ['apple', 'banana', 'grape'];
var frutts2 = ['apple', 'banana', 'grape', 1];
//tuple型は型推論が行われないので、型注釈する必要がある。
//配列の強化版
var book = ['business', 1500, false];
//enum型は列挙型
//coffeeのsizeに自由に入れられないようにする。
//sizeにはShort, Tall, Grande, Ventiの4つの値が入る
//Objectと同じように、""."で使える。
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
