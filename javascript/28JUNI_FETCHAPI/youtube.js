fetch('https://reqres.in/api/users')
.then(res=>{
    if (res.ok) {
        console.log('SUCCESS')
        res.json())
.then(data=>console.log(data))
.catch(error=>console.log('ERROR'))