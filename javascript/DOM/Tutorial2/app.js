var result;

result= document.getElementById("navbarSuppurtedContent");
result = document.getElementsByClassName('col')
result = document.getElementsByTagName('p')
Array.from(result).forEach(text=>{
    text.innerText="huqhdddduedu"
})

result =document.querySelector('.col') // returns the first element

result= document.querySelectorAll('.col') // returns an array of elements
result.forEach(col=>{
    console.log(col)
})