function outerfunction(){
    let messge  = "hello";
    function innerfunction(){
        console.log(messge);
    }
    return innerfunction;
}

const printfunction  = outerfunction();
printfunction();