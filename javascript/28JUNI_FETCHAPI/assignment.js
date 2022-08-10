


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
 const CreateBtn = document.getElementById('create') //De methode getElementById() selecteert een element waarvan het id-attribuut gelijk is aan de parameter die wordt doorgegeven aan de methode getElementById(). De parameter is van het type string. De methode geeft een live Element object terug of de waarde null in het geval er geen overeenkomend element wordt gevonden.
 // split line by line
 result = UserAccounts.split("\n")

 CreateBtn.addEventListener('click',(e)=>{ // the addEventListener method allows you to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.

     e.preventDefault() // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

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

// Elementen selecteren met Javascript

//Een element op een webpagina kan op verschillende manieren geselecteerd worden door Javascript, maar we beperken ons tot de vier voornaamste methodes: getElementById(), getElementsByTagName(), querySelector() en querySelectorAll().

 // De methode getElementById() selecteert een element waarvan het id-attribuut gelijk is aan de parameter die wordt doorgegeven aan de methode getElementById(). De parameter is van het type string. De methode geeft een live Element object terug of de waarde null in het geval er geen overeenkomend element wordt gevonden.

 //getElementsByTagName()
//De methode getElementsByTagName() selecteert alle elementen waarvan de tagnaam gelijk is aan de parameter die wordt doorgegeven aan de methode getElementById(). De parameter is van het type string. De methode geeft een live HTMLCollection van elementen terug of de waarde null in het geval er geen element wordt gevonden.


//Lussen - forEach. In Javascript kan je de elementen van een array overlopen in een lus via de methode forEach(). Een lus is een structuur die code herhaalt.
// forEach does not modify the array itself, the callback method can. The method returns undefined and cannot be chained like some other array methods. forEach only works on arrays, which means you need to be a little creative if you want to iterate over objects.