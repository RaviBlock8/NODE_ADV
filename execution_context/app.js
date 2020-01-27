/*whenver lexical enviroment is created of a functions execution context
it stored argument object in lexical enviroment section*/

// function foo(a,b){
//     console.log(arguments)
//     console.log(arguments[0])
// }

// foo(1,2)

// let obj={
//     age:23,
//     //if i will make this an arrow function , this will start referring to outer scope rather than reference's

//     bday:function(){
//         this.age+=1;
//     }
// }

// console.log(obj)
// obj.bday()
// console.log(obj)

function bar(){
    let name="ravi"
    console.log(this.prototype)
}
bar.prototype.name="ravi"
bar()



