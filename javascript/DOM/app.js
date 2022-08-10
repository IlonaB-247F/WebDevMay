var result;

result = document;
result = document.all
result = document.URL
result = document.links
result = document.images
result = document.forms
result = document.scripts
result = document.firstChild
result = document.body
document.Calculator = function(){
    console.log("Calculator");
}

document.NumberConvert = (number)=>{
    return parseInt(number);
    
}
const parser = new DOMParser();

document.ersin="Hello"
let htmlString="<h1> Hello </h1>";
let getRealElement = parser.parseFromString(htmlString,'text/html')
document.body.append(getRealElement.body.firstChild)
const WelcomeMessage = document.createRange("h1");
WelcomeMessage.setAttribute("style","color:orange")
WelcomeMessage.SetAttribute("class","welcome message")
WelcomeMessage.innerText="Hello!!"
console.log(typeof WelcomeMessage)
document.body.appendChild(WelcomeMessage)

result=document.onclick=function(){
    console.log("Hello!!")
}

result
console.log(result)