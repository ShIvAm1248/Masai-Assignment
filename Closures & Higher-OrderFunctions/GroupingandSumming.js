function groupingandsumming(){
let arr  = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let obj = {};
obj = arr.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

console.log(obj)

}

groupingandsumming();