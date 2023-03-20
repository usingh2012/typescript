class Employee {
  userID: string;
  private pwd = "12";
  private readonly keyVal: string;
  #privateInJS = 10;

  constructor() {
    this.userID = Math.random().toString();
    this.pwd = "changed";
    this.keyVal = "myKey";
    this.keyVal = "ad"; //In constructor function we can assing to readonly prop
  }

  get privatePwd() {
    return this.pwd;
  }

  set privatePwd(val: string) {
    this.pwd = val;
  }

  test() {
    // this.keyVal = "asd"; //error cant assign to readonly property
  }

  testOfPrivates(obj: Employee) {
    this.#privateInJS;
    obj.#privateInJS;
    if (#privateInJS in obj) {
      return obj.#privateInJS;
    }
  }
}

class Worked extends Employee {
  test(): string {
    this.privatePwd = "myPwd";
    return this.privatePwd;
  }
}

class SingleTonInTypeScript {
  private static instance: SingleTonInTypeScript;
  private constructor(public settings: string) {
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
