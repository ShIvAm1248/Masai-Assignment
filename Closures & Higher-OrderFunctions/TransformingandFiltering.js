function processProducts(){
let arr =  [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];

var newarr = arr.map((ele,i) => 
    ele.price > 50 ? `${ele.name} is above ${50}` : `${ele.name} is belove ${50}`
);
console.log(newarr)

 arr.forEach((ele,i) => {
   const message  = ele.price > 50 ? `${ele.name} is above ${50}` : `${ele.name} is belove ${50}`; console.log(message)});




}


processProducts();
