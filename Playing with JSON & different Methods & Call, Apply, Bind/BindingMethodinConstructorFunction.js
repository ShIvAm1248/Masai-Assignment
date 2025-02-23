function Person(name,age){
    this.name = name;
    this.age = age;

    this.displayinfo = function(){
        console.log(this.name + " " + this.age);
    }
}

const info = new Person("alice",23);

const display = info.displayinfo.bind(info);
display();