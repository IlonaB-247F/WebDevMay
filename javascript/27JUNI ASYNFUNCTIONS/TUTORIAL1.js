// const posts =[{
//     id:1,
//     title: 'Call of Duty',
//     body: 'First post body'
// }]

// // get Posts
// function getlastGames(){
//     console.log(posts)
// }

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post)
//         callback()
//     },3000)
// }

// // createPost({
// //     id:3,
// //     title:"Counter Strike offensive"
// // },getLastGames)

// // getlastGames()

// function Keeper1(string,callback){
//     callback(string)
// }
// function Keeper2(string,callback){
//     let newString=string.toUpperCase();
//     callback(newString)
// }

// function Keeper3(string,callback){
//     let arr=string.split ("");
//     callback(arr)
// }

// functon Keeper4(arr,index,callback){
//     let getLetter=arr[index]
//     callback(getLetter)
// }

// function PrintIt(letter){
//     console.log(letter)
// }

// Keeper1("Hello Friend",(string)=>{
//     Keeper2(string,(string)=>{
//         Keeper3(string,(arr)=>{
//             Keeper4(arr,2,(letter)=>{

//             })
//         })
//     })
// })



async function Keeper1(string){
    return await string
}
function Keeper2(string){
    let newString=string.toUpperCase();
    return newString
}

function Keeper3(string){
    let arr=string.split ("");
    return arr
}

function Keeper4(arr,index){
    let getLetter=arr[index]
    return getLetter
}
   
    function PrintIt(letter){
        console.log(letter)
    }


Keeper1('Hello Friend') // asynchrone
.then(Keeper2)
.then(Keeper3)
.then(response=>Keeper4(response,2))
.then(PrintIt)
.catch(err=>console.log(err))

console.log(Keeper1('Hello Friend'))

let promiseMe=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello Friend, I promise you that i will be back in 3 seconds')
    })
})

let promise2 = new Promise((resolve,reject)=>{
    resolve('Hello this is the 2 promise')
})

let getPromiseResult=Promise.all([promiseMe,])
console.log(promiseMe)
promiseMe
.then(answer=>{
    console.log(answer)
})