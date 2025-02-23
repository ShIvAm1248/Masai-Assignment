function deepclone(obj){
    return JSON.parse(JSON.stringify(obj))
}

const obj = { name: "Alice", hobbies: ["reading", "traveling"] };
const clone = deepclone(obj);
clone.hobbies.push("coding");
console.log("original",obj);
console.log("clone",clone);