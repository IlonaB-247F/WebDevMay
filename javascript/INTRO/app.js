// var username = "root";
// var age = 20;

//     var username = "admin"; // re declare variable

  //      username = "Joe"; //updated the value

  //      console.log("hello friend")
  //      console.log(username);

  //      const company = "Google";

  //      console.log(company);

   //     website = "www.facebook.com";

  //      console.log(website);

 // var number1 = 10;
  //var number2 = 20;
  //var total = number1 + number2; // 10+20=30
  //var total = 10+20;
  //var total = 10+"20";
  //var country="Bru" + "ssel";

  //console.log(country);
  //console.log(total);

  //document.getElementById("message").innerText="Hello friend!";

  //document.getElementById("container").innerHTML="<h1>container!!!</h1>"

  // BMI=weight/(height*height);
  // bruto salary 300 euro
  // tax percent %21 = netto*taxpercent/100

  //var number1 =70;
  //var number2 =1.65;
  //var bmi=number1/number2;
  //console.log(bmi);

 // let result;
 // result=7+3;
 // result+=2;
 // result/=3;
 // result++; //increase and decrease result--; ++result;
 // console.log(result);

 // var number1=50;
  //number1 +=10;
 // console.log(number1);

 // let number3=40;
  //number3 +=10;
  //console.log(number3);
  
 // let firstname ="John";
 // let lastname ="Doe";
 // result= firstname+ " " +lastname;
  //console.log(result +" 🤣");
 
  var n1 = 5;
  var n2 = 5;
  var n3 = 6;
  var n4 = "5";

  
  //equal to operator ==

  //result=n1==n2;
 // result=n1==n3;
  //result=n1==n4;

  result = "🤣" == "🤣"; //true
  result = "🤣 " == "🤣"; //false

  result=n1!=n2; // !+ not equal false 
  result=n1!==n4; // !+ not equal false
  result=n1!=n3; // !+ not equal true

  var x1; //undefined
  var x2; //undefined
  result = x1==x2; //undefined=undefined

  
  // greater than operator

  result=n1>n2; //false
  result=n3>n2; //groter dan - true
  result=n3>n4; //n3=6 and n4 "5" =true

  
  //less than operator

  result=n3<n4;

  // greater than or equal to operator
  result=n1>=n2; //true


    // less than or equal to operator
    result=n1<=n4; //true
    result=n1<=n3; //true


    // andere body geven aan true en false
    result=n1<=n4? "Correct":"Incorrect"; //true veranderd in het woord Correct
    result=n1>=n3? "Correct":"Incorrect"; //false veranderd in het woord incorrect

  

  //student groter dan 17 of gelijk aan 18 alcohol. Kleiner dan 17 enkel bier. Body veranderen naar allowed/not allowed

var StudentName="Jack";
var StudentAge=18;
result=StudentAge>=18? StudentName + " is allowed to drink alcohol" : StudentName + " is not allowed to drink alcohol";


var StudentName="John";
var StudentAge=16;
result=StudentAge<=17? StudentName + " is allowed to drink alcohol" : StudentName + " is not allowed to drink alcohol";

//result=StudentAge>=18? `${StudentName} is allowed`: `${StudentName} is not allowed;


var StudentName="Jack";
var StudentAge=18;
var StudentMoney=0;
  
var myRule=n1>=n3;
var mySecondRule=n3<=n1;
var successMessage="Correct";
var errorMessage="Incorrect";

result=myRule ? successMessage : errorMessage;

result=myRule && mySecondRule; // myRule=true,mysecondRule=false

var StudentRule1 = StudentAge >=18; //true
var StudentRule2 = StudentMoney >=1; //false
var GetResult = StudentRule1 && StudentRule2;
result=GetResult? "Yes he can have" : "no he need money";

console.log(result);


