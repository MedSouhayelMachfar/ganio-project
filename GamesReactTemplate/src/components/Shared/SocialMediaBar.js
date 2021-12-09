import React from "react";

import Facebook from "./../../assets/icons/socialMedia/Facebook.svg";
import Google from "./../../assets/icons/socialMedia/Google.svg";
import twitter from "./../../assets/icons/socialMedia/twitter.svg";
import linkedin from "./../../assets/icons/socialMedia/linkedin.svg";

import styles from "./SocialMediaBar.module.css";
function SocialMediaBar() {
  return (
    <aside className={styles["social-media-icons"]}>
      <img src={Facebook} alt="facebook icon" />
      <img src={Google} alt="Google icon" />
      <img src={twitter} alt="twitter icon" />
      <img src={linkedin} alt="linkedin icon" />
    </aside>
  );
}

export default SocialMediaBar;
