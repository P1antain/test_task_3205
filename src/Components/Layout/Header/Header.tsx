import React from "react";
import styles from "../Layout.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../Redux/hooks";

export const Header: React.FC = () => {
  const language = useAppSelector((state) => state.default.language.lang);

  const location = useLocation();

  let home = "";
  let rates = "";
  if (language === "en") {
    home = "Home";
    rates = "Exchange Rates";
  } else if (language === "ru") {
    home = "Домой";
    rates = "Обменный курс";
  }
  return (
    <>
      <header className={styles.header}>
        <NavLink
          to={"/"}
          className={styles.navs}
          activeClassName={styles.navs_active}
          isActive={() => location.pathname === "/"}
        >
          {home}
        </NavLink>
        <NavLink
          to={"/currency"}
          className={styles.navs}
          activeClassName={styles.navs_active}
        >
          {rates}
        </NavLink>
      </header>
    </>
  );
};
