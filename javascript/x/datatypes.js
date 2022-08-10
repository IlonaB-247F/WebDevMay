/*

string
number
boolean
undefinded
obect:array
null
*/

let result;
//string data type
result='Hello friend'
result="Hello friend"
result=`Hello friend`

// number datat type
result=1;
result="1";

// boolean data type
result=true;
result=false;

//undefined data type
result=undefined;

// declares variable but not assigned a value
var x;

// objects data type
var student={
    name:"John",
    age:30,
    email:"john@john.com",
    isStudent:true,
    address:{
        country:"Belgium",
        city:"Brussels",
        street:"Stalingradstreet",
        zipcode:1000,
        test:{
            title:"titleeeee",
            test1:{
                anothertest:"blabla"
            }
        }
    }
}



result=`His name is ${student.name} and he is ${student.age} years old.`;

result=student.isStudent?`His name is ${student.name} and he is ${student.age,city} years old.`

result=student.address.street
result=student.address.city
result=student.address.test.title.anothertest

//array data type
var numbers= [77777, "string", true,null,{name:"JOHN"},undefined];

// array index starts from 0

result=numbers.length
result=numbers[0]
result=numbers[4].name
result=numbers
numbers[1]="New string"


var students=[
    {
        name:"Ersin", age:24,
    scores:[44,65,66,77,88,99]
    },
    {name:"Reshad3,age:23"},
    {name:"John",age:25},
]
result=students[0].scores[3]
var nestedArray=[1,2,3[4,5,6[7,8,9]];
result nestedArray[3][3][1] //8
console.log(result, typeof result)