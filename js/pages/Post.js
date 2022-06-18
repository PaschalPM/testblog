const Post = ()=>{
    if(url.search.match(/^\?post=(\d+)/))
    {
        let postId = url.search.split("=")[1]
        let postPage = document.getElementById("postpage")

        let insertData = (post)=>{
            postPage.innerHTML += `
                    <div class="card">
                        <pre>${post.id}</pre>
                        <h1> ${post.title} </h1>
                        <div class="body"> ${post.body} </div>  
                    </div>
                `
        }
        getData(postsUrl+"/"+postId)
        .then((post)=>{
            postPage.innerHTML = ""
                insertData(post)
        })
    }
    
    
}

// export default Post