let counter = 0;

let intervalId = setInterval(() => {
  counter++;
  console.log("Loading...");

  if (counter === 5) {
    clearInterval(intervalId);  
    console.log("Loading Successful");
  }
}, 1000);