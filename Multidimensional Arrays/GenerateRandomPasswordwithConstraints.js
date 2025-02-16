function generatePassword(length, includeNumbers = true,includeSpecialChars = false){
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialch = "!@#$%^&*";
    
    let str = uppercase + lowercase + number + specialch;
    
    var password = "";
    for(let  i = 0;i < length;i++){
      password += str[Math.floor(Math.random()*str.length)];
      
    }
    let password1 = false;
    for(let char of password){
    if(uppercase.includes(char)){
      password1 = true;
    }
    if(lowercase.includes(char)){
      password1 = true;
    }
    if(number.includes(char)){
      password1 = true;
    }
    if(specialch.includes(char)){
      password1 = true;
    }
    
    }
    if(password1){
      console.log(password);
    }
    else{
      console.log("password doesnot contain any number .specialch,uppercase")
    }
    
    
  
  }
  
  generatePassword(10,false,true)