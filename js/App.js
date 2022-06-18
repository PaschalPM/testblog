// import Navbar from "./layout/Navbar.mjs"
// import Main from "./layout/Main.mjs"
// import Footer from "./layout/Footer.mjs"
// import PageInView from "./router/PageInView.mjs"
const App = ()=>{
    return (`
            
        ${Navbar()}
        ${Main(PageInView)}
        ${Footer()}
    `)
}

// export default App