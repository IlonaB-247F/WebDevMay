//https://jsonplaceholder.typicode.com/posts

// let users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     }
// ]
// // users.push({
// //     is:"5",
// //     username:'admin',name:"Joe",
// //     address:{
// //         city:"Aalst",
// //         geo:{
// //             lat: "29.4572",
// //             lng: "-164.2990"
// //         }
// //     }
// // })
// // filter users data
// // const FilteredUsers = users.filter(function (user) {
// //     console.log(user) // console=testen wat? user
// //     // return user.id == 4 // als user id gelijk is aan 4
// // })



// let myCv = [
//     {
//         name: "Ilona Berghmans",
//         username: "Anoli",
//         email: "ilonaberghmans@gmail.com",
//         address:
//         {
//             street: "Sint-Jooststraat",
//             number: "5",
//             city: "Brussel",
//             zipcod: "1210",

//         },
//         skills: ["indesign", " Photoshop", " illustrator"]
//     }]


// // myCv.forEach(function(coffee){ // kan eender welke naam hebben, hier coffee
// //     console.log(coffee)
// //     console.log(`name: ${coffee.name}\nemail:${coffee.email}\naddress:${coffee.address.street}\nnumber:${coffee.address.number}\nskills:${coffee.skills}\n`)
// //     // console.log(coffee.skills.join("\n")) // onder elkaar (harde return \n)
// // })


// //const FilteredUsers = users.filter(function (user) {
// //     console.log(user) // console=testen wat? user
// //     // return user.id == 4 // als user id gelijk is aan 4
// // })

// // FilteredUsers.forEach(function (user) {
// //     //user.address.number="5"
// //     console.log(`_________\nname: ${user.name}\nemail:${user.email}\n_________`)
// // })


// // function FilterData(myArr){
// //     // filter here
// //     return myArr +=" INTEC"
// // }

// // function ChangeLetterToUpperCase(filterData){  //changing username letter to upper
// //    return filterData.toUpperCase()
// // } 

// // function PrinterService(getFilteredData){
// // const getResult = FilterData (ChangeLetterToUpperCase(getFilteredData))
// // console.log(getResult)
// // }
// // PrinterService("Hello world")


// function FilterData(myArr) {
//     // filter here
//     return myArr
// }

// function ChangeLetterToUpperCase(filteredData) {  //changing username letter to upper
//     //console.log(filteredData)
//     let temp = []
//     filteredData.forEach(function(user) {
//         user.name = user.name.toUpperCase()
//         temp.push(user)
//     })
//     return temp
// }


// function PrinterService(getFilteredData) {
//     const getResult = FilterData(ChangeLetterToUpperCase(getFilteredData))
//     console.log(getResult,"test")
// }
// PrinterService(users)

// var numbers=[55,4,22,1,0,3,5,6,7,8,9,10]
// numbers.reduce(function(accumulator,currentValue){  // reduceert van links naar rechts
//     console.log("Accumulator:", accumulator)
//     console.log("CurrentValue:", currentValue)
//   return accumulator+currentValue
// })
// // result=numbers.reduceRight
// // console.log(result)


// var nestedArray =[1,2,3,4[5,6[7,8,9['a','b','c']]]] //4 nestings
// // fill
// result=numbers.fill(5)
// // console.log(result)



// // flat method
// result=nestedArray.flat(3) //removed nesting3
// var n=[1,2,3,[4,5,6]]
// result=[...n,...n[3]] // in nieuwe versie JS ... voor reduce


// var n1=[4,4,5,6]
// var n2=[7,88,5,3]  // combinere van n1 en n2
// result=[...n1,...n2]
// console.log(result)


const getal1=4;
const getal2=getal1;
let getal3=25;
console.log(getal1,getal2,getal3)