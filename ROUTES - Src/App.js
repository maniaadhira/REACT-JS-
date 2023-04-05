//  import { Routes,Route } from "react-router-dom"
//  import Home from "./router/Home"
//  import About from "./About"
//  import Menu from "./Menu"
//  import Details from "./Details"

//  function App(){

//   return(
//     <div>
//       <Routes>

//         <Route path="/" element={<Home/>}></Route>

//         <Route path="/server404" element={<About/>}></Route>

//         <Route path="/Menu" element={<Menu/>}></Route>

//         <Route path="/Mani" element={<Details/>}></Route>

//         </Routes>
//     </div>
//   )
//  }
//  export default App;




import { Routes,Route } from "react-router-dom";
import Inba from "./inba";
import Mani from "./mani";
import Ranjith from "./ranjith";
import Jana from "./jana";
// import Raja from "./raja"
import Notfound from "./notfound"


function App(){

    return(
        <div>
            <Routes>
                <Route path="/" element={<Inba/>}></Route>
                <Route path="/ranjith" element={<Ranjith/>}></Route>
                <Route path="/mani" element={<Mani/>}></Route>
                <Route path="/jana/*" element={<Jana/>}></Route>
                <Route path="/*" element={<Notfound/>}></Route>
                
            </Routes>
        </div>
    )
}
export default App;