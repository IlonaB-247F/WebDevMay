//negative number fot previous url
//positive number for next url
// window.history.go(-1)
// window.history.go(+1)
// window.innerHeight
// window.innerwidth

// window.localStorage.getItem('intec'); //keyname applications localstore
// result = window.localStorage.length;
// window.localStorage.removeItem('intec1');
// console.log(result);

// localStorage.setItems('students', names)
// var students = [{name:'a'},{name:'b'}]
// localStorage.setItem('people', JSON.stringify(students))
// localStorage.setItem('people', JSON.stringify(students))



// find elements
const userInput = document.querySelector('.userinput')
const saveBtn = document.querySelector('.savebtn')
const getBtn = document.querySelector('.getbtn')

// let user;
// setTimeout(()=>{ // setTimeout = method
// user = prompt('Enter your username')
// },3000) // deze prompt komt te voorschijn na 3 sec (3OOO milliseconden)



let user;

//setInterval(()=>{ // interval van 3 sec
//    user = prompt('Enter your name')
 //   console.log(user)
//},3000)

saveBtn.addEventListener('click', ()=>{
    let getStorageData = JSON.parse(localStorage.getItem('students')) // data tijdelijk omzetten om PUSH te kunnen gebruiken. Strings worden NIET verwerkt door PUSH!
    getStorageData.push(userInput.value) // nu kunnen we PUSH gebruiken. PUSH doet data toevoegen aan het einde van de array. Het verandert de lengte van de array en returns de nieuwe lengte ervan.

    localStorage.setItem('students',JSON.stringify(getStorageData)) // terug strings van maken

    //console.log('hello world',userInput.value)
    //localeStorage.setItem('username', userInput.value)
})




getBtn.addEventListener('click', ()=>{ // deze blok is om data te printen
    //let username=localStorage.getItem('username')
    //console.log('username is ${username}')
    let studentNames =JSON.parse(localStorage.getItem('students'))
    console.log(studentNames)
    console.log(user) // print 'prompt' values
    window.open('https://intecbrussel.be/', 'blank', 'width=1000, height=1000')
})

