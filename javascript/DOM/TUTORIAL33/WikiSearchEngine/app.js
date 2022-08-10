const searchInput = document.querySelector('.searchInput') // input element
const [wikiSearch, wikiSearchRandom] = document.querySelectorAll('button'); // search buttons
const ResultsSection = document.querySelector('.results'); // results section

// https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=reactjs
async function searchData(keyword, limit) {
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=summary&inprop=url&utf8=&format=json&origin=*&srlimit=${limit}&srsearch=${keyword}`)
    let data = await response.json() // retrieve the data from the response
    return data
}

/*
<li class="list-group-item d-flex justify-content-between align-items-start">
                       <div class="ms-2 me-auto">
                            <div class="fw-bold">title</div>
                            Short description
                        </div> 
                        
                    </li>
*/

/*const g = t => document.createElement(t) // create element
function HtmlTemplateGenerator(obj) {
    const li = g('li')
    li.className = "list-group-item d-flex justify-content-between align-items-start"

    const parentDiv = g('div')
    parentDiv.className = "ms-2 me-auto"
    const textOfParentDiv = document.createTextNode(obj.snippet)
  

    const childDiv = g('div')
    childDiv.className = "fw-bold"
    const textOfChildDiv = document.createTextNode(obj.title)
    childDiv.append(textOfChildDiv)
    parentDiv.append(childDiv)
    parentDiv.append(textOfParentDiv)
    li.append(parentDiv)
    return ResultsSection.append(li)
}


wikiSearch.addEventListener('click', (e) => {
    ResultsSection.innerHTML=''  //clear the result section and then fetch again
    // fetching data here
    searchData(searchInput.value, 30)
        .then(data => {
            console.log(data.query.search) // retrieved data
            data.query.search.forEach(obj=>{
                HtmlTemplateGenerator(obj)
            })
        }).catch(err=> {
            alert('No data found')
        })
    console.log('hello world', searchInput.value)
    e.preventDefault()
})*/




// html events
// mouse events


// mouseover
ResultsSection.addEventListener('mouseover',(e)=>{
    console.log('Mouse Over Event',e.target)
    if(e.target.classList.contains('bg-dark')){
        e.target.classList.remove('bg-dark')
        e.target.classList.add('bg-danger')
    }
    
})

ResultsSection.addEventListener('mouseout',(e)=>{
    console.log('Mouse Out Event',e.target)
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-light')
})


// mousedown
ResultsSection.addEventListener('mousedown',(e)=>{
    console.log('Mouse down event',e.target)
})


// keyboard events

// keydown: werkt voor elke toets
/*searchInput.addEventListener('keydown',(e)=>{
    console.log('key down event',e.key)
})

// keyup: werkt voor elke toets
searchInput.addEventListener('keyup',(e)=>{
    console.log('key up event',e.key)
})

// keypress werkt enkel bij nummers en letters (karakters), niet met shift, control, escape enz
searchInput.addEventListener('keypress',(e)=>{
    console.log('key press event',e.key)
})*/




// change event
searchInput.addEventListener('change',(e)=>{
    console.log('change event',e.target.value)
})


// focus event
searchInput.addEventListener('focus',(e)=>{
    console.log('focus event',e.target.value)
    if(e.target.classList.contains('bg-dark')){
        e.target.classlist.remove('bg-dark')
        e.target.classList.add('text-light')
    e.target.classList.add('bg-light')
    e.target.classList.add('text-dark')
}
})


document.addEventListener('DOMContentLoaded',()=>{
    searchData('javascript',20)
    .then(data=>{
        console.log(data,'DOM')
    })
})
