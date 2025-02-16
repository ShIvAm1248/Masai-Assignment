function getacess(user){
    console.log(user.role === "admin" ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked")
    : user.role === "user" ? (user.active ? "User Acess Granted!" : "User Acess Revoked")
    :"Acess Denied");
}

let user1 = { name: "Alice", role: "admin", active: false };


let user2 = { name: "Bob", role: "user", active: true };

getacess(user1);
getacess(user2);