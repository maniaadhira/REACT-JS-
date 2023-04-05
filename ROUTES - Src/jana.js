
import { Route,Routes } from "react-router-dom";
import Raja from "./raja"
import Rajamani from "./maniraja"
import Lay from "./courselay"
function Jana(){

    return(
<div>
    <h1>i am jana</h1>
        <Lay/>
    <Routes>      
        <Route path="/raja" element={<Raja/>}></Route>
    
        <Route path="/rajas" element={<Rajamani/>}></Route>
    </Routes>
</div>
    )
}
export default Jana;