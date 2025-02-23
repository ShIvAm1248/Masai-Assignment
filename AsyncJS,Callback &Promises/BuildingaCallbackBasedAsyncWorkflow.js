function registerUser(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("User Register");
        },1000)
        resolve("user1");
    })
}

function sendverification(username){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(!username) return reject("No user Register");
            else console.log("sending verification email to ",username);
             resolve(username)
        },1000);
        
    })
}

function loginUsername(username) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
           if(!username) return reject("No Username found");
           else console.log("loging",username);
           resolve(username);
        },1000)
    })
}

function displayWelcomeMessage(username){
    setTimeout(() =>{
        console.log("welcome",username);
    },1000);
}

registerUser().then(sendverification).then(loginUsername).then(displayWelcomeMessage).then(()=>{
    console.log("Successfully!");
}).catch(()=>{
    console.log("error");
})