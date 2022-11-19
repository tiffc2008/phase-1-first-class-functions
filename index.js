function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function receivesAFunction(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }

  function returnsANamedFunction(){
    return "Hello"
  }
  
  function returnsAnAnonymousFunction(greet){
    return "Hello"
  }