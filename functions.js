function sayHello(name){
    console.log("Hello there Shakir");
    console.log("Hello there ",name);
}


sayHello("Abdul")
sayHello("Shakir")


function sayNamaste(){
    return "Hello Everyone"
}

var greetings = sayNamaste();
console.log(greetings);


var getUserRole = function (name,role){
    switch (role) {
        case "admin":
            console.log(`${name}You get the full access`);
            break;
        case "Subadmin":
            console.log(`${name} You get access to create and delete courses`);
            break;
        case "user":
            console.log(`${name} You get access to consume the contents`);
            break;
        default:
            console.log(`${name} Trial User`);
            break;
    }
}

getUserRole("Abdul Shakir","admin")

