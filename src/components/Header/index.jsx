import "./Header.css"
import { Link } from "react-router-dom";
import {BiSolidInfoCircle as Info} from "react-icons/bi"
import {AiFillHome as Home} from "react-icons/ai"
import {FaBicycle as Bike} from "react-icons/fa"

export default function Header(){
    return (
        <header>
            <img src="src/assets/porto.png" alt="Porto's logo without background" />
            <nav>
                <ul>
                    <li><Link to="/"><Home className="logo"></Home></Link></li>
                    <li><Link to="/about"><Info className="logo"></Info></Link></li>
                    <li><Link to="/registro"><Bike className="logo"></Bike></Link></li>
                </ul>
            </nav>
        </header>
    );
}   