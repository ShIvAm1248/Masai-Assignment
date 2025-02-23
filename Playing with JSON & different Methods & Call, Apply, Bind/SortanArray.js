function sortNames(namesArray){
    namesArray.sort((a,b) => a.localeCompare(b));
    return namesArray

}
let arr = ["Charlie", "Alice", "Bob"];
console.log(sortNames(arr))