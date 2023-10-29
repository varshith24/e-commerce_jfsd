import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import './NavBar.css'; // Make sure to import your CSS file

export default function NavBar() {
    const data = JSON.parse(localStorage.getItem("userData"));

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                {/* <Link to="/home" className="navbar-brand Nav-Brand-title">E-Commerce</Link> */}
                <Link to="/home" className="navbar-brand Nav-Brand-title">Price Pulse</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/home" exact className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to="/features" className="nav-link">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to="/action" className="dropdown-item">Action</Link></li>
                                <li><Link to="/another-action" className="dropdown-item">Another action</Link></li>
                                <li><Link to="/something-else" className="dropdown-item">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* Adding right */}
                <div className="d-flex align-items-center justify-content-end">
                    <Link to="/watchlist" className="text-reset me-3">
                        <i className="fas fa-shopping-cart" style={{fontSize:"150%"}}></i>
                    </Link>

                    <div className="dropdown">
                        <Link
                            className="text-reset me-3 dropdown-toggle"
                            to="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill bg-danger">1</span>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <Link className="dropdown-item" to="#">Some news</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Another news</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Something else here</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <Link
                            className="dropdown-toggle d-flex align-items-center"
                            to="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            
                            <img
                                src={data.url}
                                className=" img-xl rounded-circle"
                                
                                height="40"
                                alt="Black and White Portrait of Link Man"
                                loading="lazy"
                            />
                            
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <Link className="dropdown-item" to="/user">My profile</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">Settings</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
