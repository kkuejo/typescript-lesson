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
var person = {
    name: 'Jack',
    age: 21
};
console.log(person.name);
