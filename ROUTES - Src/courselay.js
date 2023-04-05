import { Link,Outlet } from "react-router-dom";

export default function courselay(){
    return(
        <div>
            <Link to="/jana/raja">raja</Link>
            <br/>
            <Link to="/jana/rajas">rajamani</Link>
            <Outlet/>
        </div>
    )
}