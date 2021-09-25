import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="d-flex">
                <h1 className="header__title">To-do List</h1>

                <div className="header__breadcrumbs">
                    <div className="header__breadcrumbs-item">
                        <a href="/testHref">Home</a>
                    </div>
                    <div className="header__breadcrumbs-item">
                        <a href="/testHref">Applications</a>
                    </div>
                    <div className="header__breadcrumbs-item">
                        <span>Todo</span>
                    </div>
                </div>
            </div>

            <div className="header__button-group">
                <button className="btn btn-primary me-1">
                    Add New
                </button>

                <div className="btn-group">
                    <button type="button" className="btn btn-primary pe-2 ps-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
                        </svg>
                    </button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="/testHref">Action</a></li>
                        <li><a className="dropdown-item" href="/testHref">Another action</a></li>
                    </ul>
                </div>
            </div>

            <div className="header__filters">

                <div className="dropdown">
                    <button className="btn btn-sm btn-outline-primary dropdown-toggle me-1" type="button"
                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Order By : Title
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="/testHref">Title</a></li>
                        <li><a className="dropdown-item" href="/testHref">Category</a></li>
                        <li><a className="dropdown-item" href="/testHref">Status</a></li>
                        <li><a className="dropdown-item" href="/testHref">Label</a></li>
                    </ul>
                </div>

                <div className="position-relative d-flex align-items-center">
                    <input className="header__search-input" type="text" placeholder="search"/>
                    <button className="header__search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>

                <div className="dropdown ms-auto">
                    <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        10
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end text-right"
                        aria-labelledby="dropdownMenuButton2">
                        <li><a className="dropdown-item" href="/testHref">5</a></li>
                        <li><a className="dropdown-item" href="/testHref">10</a></li>
                        <li><a className="dropdown-item" href="/testHref">20</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;