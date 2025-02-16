const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]
for(let i = 0;i<people.length;i++){
let {name, address:{city,street: {name:streetname,number}}} = people[i];
console.log(`${name} lives i ${city} on ${streetname}`);
}
