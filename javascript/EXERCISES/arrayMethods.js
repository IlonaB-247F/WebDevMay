// array methods
var result;
var myArr=[];
var myNumbers=[5,6,7,8,9]
var myLetters=['c','b','g','k','u']


// push method = laat ons toe een nieuwe waarde te geven aan array
// myArr.push(1)
// myArr.push("a")
// myArr.push(true)
// myArr.push(null)
// myArr.push({name:"John"})


// //pop method = remove a array-item but always the last one
// myArr.pop()


// // shift method = remove the first added element
// myArr.shift()


// // join method = becomes a one-string data
// result=myArr.join("-")  // -true-


// // sort method = sorteren van groot naar klein, van a-z
// result=myLetters.sort()
// result=myNumbers.sort(function(a,b){
//     return b-a
// })


// concat method = combines twe arrays
// result=myNumbers.concat(myLetters)


//iteration methods {for, forEach, map, filter, reduce, every,some}
//for(var i=0;i<myArr.length;i++){
 //   console.log(result[i])  //i start vanaf 0
//} // for(waarde, condition)
//result[4]
//console.log(result)

// nieuwe versie van JS
// function NewForLoop(value,index,arrayitself){ 
//     console.log(value,index,arrayitself) // value, value posision
// }

//result.map(NewForLoop)
// var total=0
// for(let i=0;i<myNumbers.length;i++){
//     console.log(myNumbers[i])
//     total+=myNumbers[i]
//     console.log(total)
// }

// var total=0
// myNumbers.forEach((n)=>total+=n)
//       result = `Total result is ${total}`


      // filter method

      
    //   result = myNumbers.filter(function(value)){
    //       return value>7
    //   }

      console.log(result)




      
      [  {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
    ]

        result = myNumbers.filter(value=>value>=30)
// result = post.filter(value=>{
//     return value.id===3
//})

function FindPostId(id){
    return postMessage.filter (value=>value.id+++id)
}
result = FindPostId(5)
console.log(value)