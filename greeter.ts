class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user));

let book: boolean = true;
console.log(book);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

let arr: number[] = [1,2,3];
let arr2: string[] = ['1'];
let arr3 : Array<number> = [2,1,0x14,0.12];

let x: [string, number, number];
x = ['aaa', 10, 11];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

let a: object = {
  b: 1
};

let someValue: any = "this is a string";
let strLen: number = (<string>someValue).length;

let someNum: any = "77";
let someNum2: number = someNum as number;

enum Gender {male, female};

let you:Gender = Gender.female;
console.log(you)
