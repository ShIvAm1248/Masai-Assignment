let user = {
    name: "Alice",
    greet: function() {
      console.log(`Hello, ${this.name}`);
    }
  };
  
  setTimeout(user.greet.bind(user), 1000);

  setTimeout(()=>{
    user.greet.bind(user)
  },1000);
 
  setTimeout(()=>{
    user.greet.call(user)
  },1000);
 
  setTimeout(()=>{
    user.greet.apply(user)
  },1000);
 
  