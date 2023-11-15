import { Link } from "react-router-dom";

export default function Navbar({title = "Github finder", icon= "fab fa-github"}){
    return(
       <div className="navbar bg-primary" style={{position:'fixed'}}>
        <a href="/"><i className={icon}></i> 
            <span style={{marginLeft: 10}}>{title}</span>
        </a>
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div>
    </div>
    )
}