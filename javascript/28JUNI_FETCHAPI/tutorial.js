// fetch and filter

async function GetData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    return data
}



// GetData()
//     .then(data => {
//         // console.log(data)
//         let users = []
//         data.map(user => {
//             const obj = {
//                 id: user.id,
//                 name: user.name,
//                 username: user.username,
//                 email: user.email
//             }
//             //  console.log(obj)
//             users.push(obj)
//         })
//         return users;
//     })
//     .then(data=>{
//         console.log(data)
//     })

GetData()
.then(data=>{
    return data.map(({id,name,username,email})=>({id,name,username,email}))
})
.then(data=>{
    console.log(data)
})


// const TestData = ['a','b','c','d','e']
// const [x,y,z,d,e,f,g] = TestData
// console.log(x,y,z,g) 

const obj={
    id:1,
    name:'atilla',
    username:'root',
}

const {id,name,username} = obj
console.log(username)



fetch('dontreadme.txt')
.then(res=>res.text())
.then(data=>{
    console.log(data)
})


// eval = securaty
// cross site scripting

const number1=document.getElementById('number1')
const number2=document.getElementById('number1')
const SumBtn=document.getElementById('btn')

SumBtn.addEventListener('click',(e)=>{
    e.preventDefault()

})