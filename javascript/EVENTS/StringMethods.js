// STRING METHODS


// var result;
// const MyText = "Lorem ipsum dolor sit ipsum amet";

// //lenght
// result = MyText.length;
// //result=MyText[2] // tweede letter. begint te tellen vanaf 0
// result = MyText[MyText.lenght - 1]
// console.log(result)


// //charAt() method

// result = MyText.charAt(6); // 6de letter
// console.log(result)


// //concat() method
// var firstname = "John "
// var lastname = "Doe"
// result = firstname.concat(lastname);// return John Doe
// result = "1234".concat("5678"); // return 12345678
// console.log(result)



// startwith() endswith()

// result= MyText.endsWith("amet") // true or false - bestaat dit woord op einde van de tekst
// result= MyText.startWith("lorem") // true or false - bestaat dit woord in begin van de tekst
// console.log(result)



// includes method
// result= MyText.includes("ipsum") // gans de tekst
// console.log(result)



// // indexOf ( method)
// result= MyText.indexOf("ipsum") // locatie in de tekst - 6
// console.log(result)



// // replace method
// // result= MyText.replace("ipsum","Java") // de eerste ipsum vervangen door Java
// result= MyText.replaceAll("ipsum","Java") // alle 'ipsums' worden vervangen door Java
// console.log(result)



// // split method
// result= MyText.split(" ") // de tekst worden arraw-items op de plaats van de spaties
// console.log(result)

// var names="Ersin,Anna,John,Eva"
// //result= MyText.split(" ")
// result= names.split(" , ")



// // slice method 
// result = MyText.slice(6, MyText.length - 4) // start de letter bij 6 tot het einde-4

// result = MyText.toUpperCase() kapitalen
// result = MyText.toLowerCase() onderkastletters


// var MyText2 = "     lorem ipsum       ";
// result = MyText2.trim().replace(" ","")
// console.log(MyText2)
// console.log(result)



//match ()
var MyNewText="Lorem ipsum Brussel 12345 dolor Brussel sit ipsum amet"
result=MyNewText.match(/dolor/)
//result=MyNewText.matchAll(/Brussel/)

console.log(result)


