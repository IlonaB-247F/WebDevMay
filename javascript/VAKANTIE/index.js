

/*let fullName = "Lola Baert";
let firstName;
let lastName;

//firstName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0), fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(lastName);
console.log(firstName);
*/



/*let userName = "lola";

let letter = userName.charAt(0).toUpperCase();
//letter = letter.toUpperCase();

console.log(letter);
*/

/*let age = 66;

if(age >=65){
    console.log("You are old!");
}

else if(age >= 18){
    console.log("You are an adult!");
}



else{
    console.log("You are a child!");
}
*/


document.getElementById("myButton").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
console.log("U bent ingeschreven");
    }
    else{
        console.log("U bent niet ingeschreven");
    }
}