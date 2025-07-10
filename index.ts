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
