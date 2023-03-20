console.log("Hello");

function add() {}
let newNum;

newNum = "fd";
newNum = 5;
const body = document.getElementsByTagName("body")[0];
document.getElementById("clickBtn")?.addEventListener("click", function () {
  body.insertAdjacentHTML("afterend", "<p>clickedMe</p>");
});
type myType = string | number;

let myType: myType;
myType = 45;

type userDetails = {
  name: string;
  address: string;
};

let kumar: userDetails;

//testing function as a type
// function ConstructorFunction(name: string) {
//   this.name = name;
// }

// let constFuncObj: object;
// constFuncObj = new ConstructorFunction("utkarsh"); //throws error

interface Person {
  userID: string;
  speak: () => void;
  eat: (whatToEat: string) => void;
}

interface Doctor extends Person {
  operate: () => void;
}

class Surgeon implements Doctor {
  userID = "myname";
  speak() {}
  eat(whatToEat: string) {}
  operate = () => {};
}

type intersectA = {
  id: string;
};
type intersectB = {
  id2: string;
};
type intersectAB = intersectA & intersectB;
let myObj: intersectAB = {
  id: "2",
  id2: "4",
};

type one = number;
type two = string;
type three = one & two;
// let myVar: three = 4;

//Generics

let myNum: Array<number> = [2, 3, 5];

function addGeneric<T extends string | number, U extends number>(
  a: T,
  b: U
): [T, U] {
  return [a, b];
}
addGeneric("a", 2);
addGeneric(2, 4);

let myConstant: Readonly<number> = 10;
myConstant = 3;

interface Todo {
  title: string;
  description: string;
}

let myTodoObj: Partial<Todo> = {};

myTodoObj.title = "partial";
myTodoObj.description = "description";
myTodoObj as Todo;
