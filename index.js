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
//通常の変数はキャメルケースで書くのが一般的(最初は小文字、以降は大文字)
//enumは大文字で書くのが一般的
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
var coffee2 = {
    hot: true,
    size: CoffeeSize2.VENTI
};
//enumに数字があった場合には、数字を入れることができる。
//coffee.size = 'VENTI';とするとエラーになる。
//coffee2.size = 100;とすることができる。
//any型は全ての型を許可する。
//boolian,string, object, numberを入れることができる。
//objectに新しいproperty(.coffee)を追加することができる。
var anything = true;
anything = 'hello';
anything = ['hello', 50, true];
anything = {};
anything.coffee = 'coffee';
//any型で配列を用意すると、何でも入れれる配列を作ることができる。
var anything2 = [true];
