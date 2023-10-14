import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import './NavBar.css'; // Make sure to import your CSS file

export default function NavBar() {
    const data = JSON.parse(localStorage.getItem("userData"));

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand Nav-Brand-title">E-Commerce</Link>
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
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
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
                    <Link to="/shopping-cart" className="text-reset me-3">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>

                    <div className="dropdown">
                        <a
                            className="text-reset me-3 dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill bg-danger">1</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a
                            className="dropdown-toggle d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            
                            <img
                                src={data.url}
                                className=" img-lg rounded-circle"

                                height="40"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                            
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a className="dropdown-item" href="/user">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
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
