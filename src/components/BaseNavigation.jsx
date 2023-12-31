import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/Navigation.css"


function BaseNavigation() {

  const { t } = useTranslation()

  const [menuActive, setMenuActive] = useState(false)

  return (
    <nav className="header__nav">
      <button className="menu" id="menu" onClick={() => setMenuActive(!menuActive)}>{t("hero.menu")}</button>
      <button className={menuActive ? "menu-close active" : "menu-close"} id="menu-close" onClick={() => setMenuActive(!menuActive)}>X</button>
      <ul className={menuActive ? "nav-list active" : "nav-list"} onClick={() => setMenuActive(false)}>
        <li className="list-item">
          <Link className="item-link" to="/about">{t("hero.nav.about me")}</Link>
        </li>
        <li className="list-item">
          <Link className="item-link" to="/works">{t("hero.nav.work")}</Link>
        </li>
        <li className="list-item">
          <Link className="item-link" to="/kontakt">{t("hero.nav.kontakt")}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BaseNavigation
