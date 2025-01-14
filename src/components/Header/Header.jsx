import { Link, Outlet } from "react-router-dom";
import './Header.css';
import Footer from "../Footer/Footer";

const Header = () => {
    return (
        <div>
            <h6>
                NavBar
            </h6>
            <nav>
                <span>My Website</span>
            <Link to="/Home" >Home</Link>
           <Link to="/About">About</Link>
           <Link to="/User">User</Link>
       <Link to="/Contact">Contect</Link>
            <Outlet> </Outlet>
            <Footer></Footer>
            </nav>
        </div>
    );
};

export default Header;