//Write a function called multiplyNumbers that accepts 
// two numbers as arguments and uses the apply() method to multiply them. The function should return the product.

let multiplyNumbers = {
    multiply : function(a,b){
        return a*b;
    }

}

console.log(multiplyNumbers.multiply.apply(null,[5,2]));