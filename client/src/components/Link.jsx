import React from 'react'
import {NavLink,useLocation} from "react-router-dom"

const Link = ({icon,to,styles}) => {
  const location = useLocation();
  const {pathname} = location;
  return (
    <>
      <NavLink to={to} className={pathname === to ? styles.active : ""}>
        <li>{icon}</li>
      </NavLink>
    </>
  );
}

export default Link