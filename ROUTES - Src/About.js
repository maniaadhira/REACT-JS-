import { Link } from "react-router-dom";

function About(){

    return(
<div>
    <h2>Iam about</h2>
    <Link to="/Menu">MENU</Link>
    <br></br>
    <Link to="/Mani">DETAILS</Link>
</div>
    )
}
export default About;