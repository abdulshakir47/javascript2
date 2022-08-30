function isEven(element){
    return element % 2 === 0
}


var result = [2,5,6,8].every(isEven)

console.log(result);

var result1 = [2,5,6,8].every((e) => (e % 2 === 0))
console.log(result1);

