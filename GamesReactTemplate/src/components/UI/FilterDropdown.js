import React, { useRef } from "react";

import arrowImg from "./../../assets/icons/Vector.svg";
/* Custom hook */
import useClickOutside from "./../../hooks/useClickOutside";

import styles from "./FilterDropdown.module.css";
function FilterDropdown(props) {
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, setIsOpenDropdown);
  return (
    <div className={styles["filter-dropdown"]} ref={wrapperRef}>
      <div
        className={styles["filter-item"]}
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <p>{props.heading}</p>
        <img
          src={arrowImg}
          alt="arrow down"
          className={
            isOpenDropdown ? styles["filter-animate-arrow"] : undefined
          }
        />
      </div>

      <ul
        className={`${styles["filter-options"]} ${
          isOpenDropdown ? styles["filter-opt"] : undefined
        }  `}
      >
        {props.options?.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilterDropdown;
