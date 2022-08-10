const passedExam=60
var score= 
var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

// whoPassedExam?
function whoPassedExam(score,passedExam){
   if (score>=passedExam){
       return true;
        } else {
            return false;
        }
}

console.log(whoPassedExam(_students))

// HTMLButtonElement.onclick
//const result=document.getElementById('result')