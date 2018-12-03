"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(greeter(user));
var book = true;
console.log(book);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var arr = [1, 2, 3];
var arr2 = ['1'];
var arr3 = [2, 1, 0x14, 0.12];
var x;
x = ['aaa', 10, 11];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var a = {
    b: 1
};
var someValue = "this is a string";
var strLen = someValue.length;
var someNum = "77";
var someNum2 = someNum;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
var you = Gender.female;
console.log(you);
//# sourceMappingURL=greeter.js.map