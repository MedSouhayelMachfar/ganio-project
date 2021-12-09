import React from "react";

import styles from "./Button.module.css";

function Button(props) {
    const { type, value, onClick, icon, iconLeft, className } = props;
    let cssClasses = `medium-text ${styles.btn} ${className}`;

    if (iconLeft) {
        return (
            <button
                className={cssClasses}
                onClick={onClick}
                type={type || "button"}
            >
                {icon && (
                    <img
                        src={icon}
                        alt="custom icon"
                        style={{ margin: "0 10px" }}
                    />
                )}
                <span>{value}</span>
            </button>
        );
    }
    return (
        <button
            className={cssClasses}
            onClick={onClick}
            type={type || "button"}
        >
            {value}
            {icon && (
                <img
                    src={icon}
                    alt="custom icon"
                    style={{ margin: "0 10px" }}
                />
            )}
        </button>
    );
}

export default Button;
