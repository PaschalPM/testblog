const Home = ()=>{
    let homePage = document.getElementById("homepage")
    let snippet = (body)=>{
            return body.substr(0,100)+"..."
    }
    let insertData = (post)=>{
        try{
            homePage.innerHTML += `
                <a class="col card" href="?post=${post.id}">
                    <h1> ${post.title} </h1>
                    <div class="body"> 
                        ${snippet(post.body)} 
                    </div>
                    <span class="post_id">${post.id}</span>
                </a>
            `

        }catch(e){
            console.log("%c"+e.message+" because it is not in view",'color:orange;font-size:1.5em');
        }
        
    }
   
    getData(postsUrl+"?_page=1")
    .then((data)=>{
        try{
            homePage.innerHTML = ""
        }catch(e){
            console.log("%c"+e.message+" because it is not in view",'color:orange;font-size:1.5em');
        }
        data.forEach((post)=>{
            insertData(post)
            
        })
        
    })
    let page = 1;
    let intObsvr = new IntersectionObserver((entries)=>{
           let isIntersecting = entries[0].isIntersecting
           
           if(isIntersecting)
           {
                page++
                getData(`${postsUrl}?_page=${page}`)
                .then((data)=>{
                    data.forEach((post)=>{
                        insertData(post)
                    })
                })
                if(page === 10){
                    intObsvr.unobserve(entries[0].target)
                    let footerSpinner = document.getElementsByClassName("footer-spinner")[0]
                    footerSpinner.classList.remove("fa-spin")
                }
           }
    },{rootMargin:"200px"})
    let footer = document.getElementsByTagName("footer")[0]
    intObsvr.observe(footer)

}