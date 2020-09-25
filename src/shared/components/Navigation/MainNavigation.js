import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

const MainNavigation = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    return (
        <Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation-drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button
                    className="main-navigation-menu-btn"
                    onClick={openDrawerHandler}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation-title">
                    <Link to="/">Location Poster</Link>
                </h1>
                <nav className="main-navigation-header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </Fragment>
    );
};

export default MainNavigation;
