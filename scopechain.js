// Scope Chain in Javascript

var name = "shakir";
console.log(name);

function sayName() {
    var name= "abdul";
    console.log(name);
    function sayhii(){
        var name = "Mr.shakir";
        console.log(name);
    }
    sayhii()
}

sayName()

console.log(name);


// This keyword in javacsript

console.log(this);

function sayName(){
    var name = "shakir";
    console.log(this);
}

sayName()