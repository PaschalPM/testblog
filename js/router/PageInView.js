// import About from "../pages/About.mjs"
// import Post from "../pages/Post.mjs"

let PageInView 

if(url.search === "?page=home" || url.search === "")
{
    document.title = "Test Blog - Home"
    PageInView = `
            <div id="homepage" class="grid-12">
                <div class="col"> 
                    <i class="spinner fas fa-spinner fa-pulse"></i> 
                </div> 
            </div>`
}
else if(url.search === "?page=about")
{
    document.title = "Test Blog - About" 
    
    PageInView = `${About()}`
}
else if(url.search.match(/^\?post=(\d+)/))
{
    let postId = url.search.split("=")[1]
    document.title = "Test Blog - Post "+postId 
    PageInView = `<div id="postpage">
                    <div class="col"> 
                        <i class="spinner fas fa-spinner fa-pulse"></i> 
                    </div> 
                </div>`
}
else{
    PageInView = "No Page Found"
}
// export default PageInView