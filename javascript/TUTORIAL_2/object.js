// const student={
//     name:"Joe",
//     age:25,
//     education:"Dev",
//     project:['a','b','c','d'],
//     print: ()=>{ // arrow function
//         console.log(this.name)
//         console.log("arrow function")
//     }
//     print: function(){
//         console.log("print function")
//         console.log(this.name)
//         console.log(this)
//     }
// }
// console.log("global scope",this)
// function ThisExample(){

// }
// ThisExample()
// student.print() //call back altijd met ()


//var name="John"; //global scope

//function LocalScopeFunction(){
//  const name="Dalton"
//  console.log(name)
//}



// const Tools = {
//     bmicalc: function (weight, height) {
//         let bmi = weight / (height * height)
//         console.log(`BMI Result is ${bmi}`)
//     }
// }

// Tools.bmicalc(75, 1.75)



// create a controller. Turn on & off
// const Computer = {
//     screen: "ASUS",
//     keyboard: "Logitech",
//     power: false,
//     turnon: function () {
//         Computer.power = true;
//         console.log("Computer is turning on...") // this refereert naar de parent (hier parent=computer)
//         console.log(`
//     screen: ${Computer.screen}
//     keyboard: ${Computer.keyboard}`)
//     },
//     turnoff: function () {
//         Computer.power = false;
//         console.log("Computer is turning off...")
//     },
//     switcher: function () {
//         Computer.power = !this.power;
//     }
// switcher:function(){
//     Computer.power = Computer.power; // alternatieve schrijfwijze
// }

// status: function () {
//         const computerStatus = Computer.power ? "Computer is running" : "Computer is off"
//         console.log(computerStatus)
//     }
// }



function number1(){
    console.log(1)
    return 1
}
function number2(){
    console.log(2)
    return 7 // provide the value
}

console.log(number1()+number2())