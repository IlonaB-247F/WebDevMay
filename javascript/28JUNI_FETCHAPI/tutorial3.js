// //1. create a new file called data.json
// //2.Run fake api server with json-server
// //json-server data2.json -p 5000

//const { resourceLimits } = require("worker_threads")

// const getBtn=document.getElementById('get')
// const postBtn=document.getElementById('post')
// const putBtn=document.getElementById('updateput')
// const patchBtn=document.getElementById('updatepatch')
// const deleteBtn=document.getElementById('del')

// //get request
// getBtn.addEventListener('click',(e)=>{
//     console.log('hello click')
//     fetch('http://localhost:5000/api')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//     })
//     e.preventDefault()
// })


// // PUT request
// putBtn.addEventListener('click',(e)=>{
//     fetch('http://localhost:5000/api/2',{
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         // data must be string data type !JSON.stringify!
//         body:JSON.stringify({
//             "username":"Joe Dalton"
//         })
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(`PUT request: ${data}`)
//     })
//     e.preventDefault()
// })


// patchBtn.addEventListener('click',(e)=>{
//     console.log('hello click')
//     fetch('http://localhost:5000/api/2',{
//         method:'PATCH',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//             "username":"root123"
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(`PATCH request: ${data}`)
//     })
//     e.preventDefault()
// })


// // POST request
// postBtn.addEventListener('click',(e)=>{
//     console.log('hello click')
//     fetch('http://localhost:5000/api',{
//         method:'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "username":"student123",
//             "password":"123456"
//         })
//         e.preventDefault()
// })


// // DELETE request
// deleteBtn.addEventListener('click',(e)=>{
//     console.log('hello click')
//     fetch('http://localhost:5000/api/3',{
//         method:'DELETE',
//         headers:{
//             Content-Type: 'application/json'
//         },
//         e.preventDefault()
//     })





/*
Amber_Jaskolski:EcyN82bJAxwJBxe
Providenci35:q2UXxxRlqD_GkWW
Reva.Champlin84:a9XuZk5e4UcDRD3
Lorenz_Witting:oHrzxr9IPIL0YjK
Leila42:wl8Uh5orryhRE7K
Patrick_Auer85:zqMcql6e9uqlSf9
Toy44:u8pNJYZ71_VgnQb
Alphonso_Sawayn7:Bwa0zaRJ43BFTb6
Jayde_Beier:z2SjLN_F8ci8e9c
Ana.Gottlieb:u3Cr3CzDtzPJ4tX
Ronny80:5gShWzlPBv8mSgg
Mya34:CYyuVLe8X_CiXbc
Terrence17:CV301DEo8Pd861Q
Mariah_Kertzmann:Xv_EG6Jk6JsTcup
Ayla_Greenholt52:kvW8BlXiZKbZ9cF
Samson37:AMo8duSO0Ggxxj1
Richie_Pouros:PPQ997UwOshJDc5
Alexandria21:iTMU5kWTFriM_i4
Cesar67:lvKUIHenNexA3mS
Ryder.Gibson:HZ47I0WeHZhVwW4
{
    username: "Amber_Jaskolski",




    
// step1: create a function that takes in a string of the form "username:password"
// step2: split the string into an array of strings
// step3: return an object with the username and password
// step4: send the object to the server with fetch API
*/
const UserAccounts = `Amber_Jaskolski:EcyN82bJAxwJBxe
Providenci35:q2UXxxRlqD_GkWW
Reva.Champlin84:a9XuZk5e4UcDRD3
Lorenz_Witting:oHrzxr9IPIL0YjK
Leila42:wl8Uh5orryhRE7K
Patrick_Auer85:zqMcql6e9uqlSf9
Toy44:u8pNJYZ71_VgnQb
Alphonso_Sawayn7:Bwa0zaRJ43BFTb6
Jayde_Beier:z2SjLN_F8ci8e9c
Ana.Gottlieb:u3Cr3CzDtzPJ4tX
Ronny80:5gShWzlPBv8mSgg
Mya34:CYyuVLe8X_CiXbc
Terrence17:CV301DEo8Pd861Q
Mariah_Kertzmann:Xv_EG6Jk6JsTcup
Ayla_Greenholt52:kvW8BlXiZKbZ9cF
Samson37:AMo8duSO0Ggxxj1
Richie_Pouros:PPQ997UwOshJDc5
Alexandria21:iTMU5kWTFriM_i4
Cesar67:lvKUIHenNexA3mS
Ryder.Gibson:HZ47I0WeHZhVwW4`



var result;
 const CreateBtn = document.getElementById('create')
 // split line by line
 result = UserAccounts.split("\n")

 CreateBtn.addEventListener('click',(e)=>{
     e.preventDefault()
     result.forEach(user=>{
  //   console.log(user)
     let userInfo = user.split(":")
   //  console.log(userInfo)
     let obj = {
         username: userInfo[0],
         password: userInfo[1]
     }
     fetch('http://localhost:5000/api',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(obj)
     })
     .then(res=>res.json())
     .then(data=>console.log("user is created!"))
     console.log(obj)
 })

 })