"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldIn = (this && this.__classPrivateFieldIn) || function(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};
var _Employee_privateInJS;
class Employee {
    constructor() {
        this.pwd = "12";
        _Employee_privateInJS.set(this, 10);
        this.userID = Math.random().toString();
        this.pwd = "changed";
        this.keyVal = "myKey";
        this.keyVal = "ad"; //In constructor function we can assing to readonly prop
    }
    get privatePwd() {
        return this.pwd;
    }
    set privatePwd(val) {
        this.pwd = val;
    }
    test() {
        // this.keyVal = "asd"; //error cant assign to readonly property
    }
    testOfPrivates(obj) {
        __classPrivateFieldGet(this, _Employee_privateInJS, "f");
        __classPrivateFieldGet(obj, _Employee_privateInJS, "f");
        if (__classPrivateFieldIn(_Employee_privateInJS, obj)) {
            return __classPrivateFieldGet(obj, _Employee_privateInJS, "f");
        }
    }
}
_Employee_privateInJS = new WeakMap();
class Worked extends Employee {
    test() {
        this.privatePwd = "myPwd";
        return this.privatePwd;
    }
}
class SingleTonInTypeScript {
    constructor(settings) {
        this.settings = settings;
        this.settings = settings;
    }
    static getInstance() {
        if (!SingleTonInTypeScript.instance) {
            SingleTonInTypeScript.instance = new SingleTonInTypeScript("My-Settings");
        }
        return SingleTonInTypeScript.instance;
    }
}
const mySingleTonTypeScript = SingleTonInTypeScript.getInstance();
const mySingleTonTypeScript2 = SingleTonInTypeScript.getInstance();
console.log("watchmode");
console.log(mySingleTonTypeScript === mySingleTonTypeScript2);
//# sourceMappingURL=employeeClass.js.map