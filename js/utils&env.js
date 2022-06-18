//UTILITY VARIABLES AND FUNCTIONS

const render = (element, selector)=>{
    selector.innerHTML = element
}

const getData = async(url)=>{
    let res = await fetch(url)
    let data = await res.json()
    return data
}

let url = new URL(location)


// ENVIRONMENT VARIABLES

 let postsUrl = "https://jsonplaceholder.typicode.com/posts"
//  let postsUrl = "http://localhost:1000/posts"