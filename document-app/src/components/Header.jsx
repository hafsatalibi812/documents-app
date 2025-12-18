import "../styles/Header.css";
import { Home, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <span>Document App</span> 
                </div>
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }
                            end
                        >
                            <Home size={18} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active-link" : undefined
                            }
                        >
                            <Info size={18} /> About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;
        
