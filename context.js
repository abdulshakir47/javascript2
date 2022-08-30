 // Global Execution Context in Javscript

 sayhello()

 function sayhello(){
    console.log("Hello");
 }


//  var myName = "Hitsh";
//  if(myName === window.myName){
//     console.log("This is again true statement");
//  }


 //Global Context has 3 Execution Context mainly
 //1) Variable Object 2)Scope Chain 3)this


 // Function declaration are scanned and made available
 // Variable declaration are scanned and made undefined

Tipper("20")

 function Tipper(a){
    var bill = parseInt(a);
    console.log(bill+20);
 }


//  newfun("30")
//  var newfun = function BigTipper(a){
//     var bill = parseInt(a);
//     console.log(bill+30);
//  }


 console.log(name);
 const name = "Abdul Shakir";


function sayhello(){
    var name = "shakir";
    console.log(name);
}

sayhello()

console.log(name);



