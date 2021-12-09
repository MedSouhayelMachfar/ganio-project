import React, { useContext } from "react";
import { ContextLanguage } from "./../../context/ContextLanguageWrapper";

import { Navbar } from ".";
import Button from "../UI/Button";
import Login from "./AuthComponents/Login";
import Register from "./AuthComponents/Register";

import styles from "./NavbarMenu.module.css";

function NavbarMenu() {
    // Getting data form our languages context
    let { data, currentLanguage } = useContext(ContextLanguage);
    data = data.navBar;

    // Set class for the arabic language
    const rtlClass = currentLanguage === "TN" ? "rtlClass" : null;

    /* Login and register modal  handlers */
    const [loginIsShown, setLoginIsShown] = React.useState(false);
    const showloginHandler = () => {
        setLoginIsShown(true);
    };
    const hideloginHandler = () => {
        setLoginIsShown(false);
    };
    const [registerIsShown, setRegisterIsShown] = React.useState(false);
    const showregisterHandler = () => {
        setRegisterIsShown(true);
    };
    const hideregisterHandler = () => {
        setRegisterIsShown(false);
    };
    /* Navbar toggle for responsive purpose */
    const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (
        <>
            {loginIsShown && (
                <Login
                    onClose={hideloginHandler}
                    onOpenRegister={showregisterHandler}
                />
            )}
            {registerIsShown && (
                <Register
                    onClose={hideregisterHandler}
                    onOpenLogin={showloginHandler}
                />
            )}
            <div
                className={`${styles["navbar-menu"]} ${
                    isNavbarOpen ? styles["toggle-navbar"] : ""
                } ${rtlClass && styles.rtlClass}`}
            >
                <Navbar />
                <div className={styles["navbar-btn-container"]}>
                    <Button
                        value={data.signup}
                        className={styles["signup-btn"]}
                        onClick={showloginHandler}
                    />
                    <Button
                        value={data.register}
                        className={styles["register-btn"]}
                        onClick={showregisterHandler}
                    />
                </div>
            </div>
            {/* Custom burger menu */}
            <div
                className={`${styles["navbar-burger-menu"]} ${
                    isNavbarOpen && styles["animate-burger"]
                }`}
                onClick={toggleNavbar}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
}

export default NavbarMenu;
