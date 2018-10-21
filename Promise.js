class Promise {


  constructor(func) {
    func(this.resolve, this.reject);
    this.thenFunctions = [];
    this.catchFunction;
    this.value;
    this.flag = "start"
  }


  then(func) {
    this.thenFunctions.push(func);
    return this;

  }
  catch (func) {
    this.catchFunction = func;
    return this;

  }

  resolve(value) {
      if (this.flag === "strat") { //To enforce to active once resolve or recject
        this.flag = "resolved";
        this.value = value;
        this.thenFunctions.forEach((func) => {
          func(this.value);
        })
      }
      reject(value) {
        if (flag === "start") {
          this.value = value;
          this.catchFunction(this.value);
        }
      }
