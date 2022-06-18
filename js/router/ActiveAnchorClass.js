const ActiveAnchorClass = ()=>{
    let mainAnchors = document.getElementsByTagName("ul")[0].getElementsByTagName("a")
    Array.from(mainAnchors).forEach((anchor,i) => {
    let url = new URL(location)

    if(anchor.search === url.search)
    {
        mainAnchors[i].parentElement.classList.add("isActive")
    }
    else
    {
        mainAnchors[i].parentElement.classList.remove("isActive")
    }

});
}
// export default ActiveAnchorClass
