console.log("functions.js");

/*
regular function
arrow function

*/

function GetSum(){
    //here function scope
    var getResult = 1+1;
    console.log("Get Sum function",getResult);
    return 5;

}

GetSum(); //calledback function
console.log(GetSum())


function GetSumOfNumbers(n1,n2){
    console.log(n1,n2)
    return n1+n2 //1+1 or 2+5
}

//GetSumOfNumbers("hello"[1,2,3])
//GetSumOfNumbers({id:1},null)
//console.log(GetSumOfNumbers(4,5))
//console.log(GetSumOfNumbers(10,20))

var Student={
    name:"JoeDalton",
    age:25
}

fuction GetStudentName(studentObj){
    console.log(studentObj.name)
}

GetStudentName(Student)



function GetNumber1(){
    console.log(5)
    return 5
}

function GetNumber2(){
    console.log(6)
    return 6
}

function getResult(){
    console.log(GetNumber1()+GetNumber2())
}
GetResult()


const GetSumOfNumbers=(n1,n2) =>n1+n2
const TesrArrowFunction=()=>console.log("hello")

console.log(GetSumOfNumbers(4,5))
TestArrowFunction()

//BMI calculator
//netto salary