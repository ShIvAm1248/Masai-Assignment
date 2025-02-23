function task1(callback) {
    console.log("Starting Task 1...");
    setTimeout(() => {
      console.log("Task 1 complete.");
      callback();
    }, 1000);
  }
  
  function task2(callback) {
    console.log("Starting Task 2...");
    setTimeout(() => {
      console.log("Task 2 complete.");
      callback();
    }, 1000);
  }
  
  function task3(callback) {
    console.log("Starting Task 3...");
    setTimeout(() => {
      console.log("Task 3 complete.");
      callback();
    }, 1000);
  }
  
  function task4(callback) {
    console.log("Starting Task 4...");
    setTimeout(() => {
      console.log("Task 4 complete.");
      callback();
    }, 1000);
  }
  
 
  task1(() => {
    task2(() => {
      task3(() => {
        task4(() => {
          console.log("All tasks completed.");
        });
      });
    });
  });
  