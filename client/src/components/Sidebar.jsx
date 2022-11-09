import React from "react";
import styles from "../css/components/Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { VscGlobe } from "react-icons/vsc";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      to: "/app",
      icon: <AiOutlineHome />,
    },
    {
      to: "/app/customization",
      icon: <IoSettingsOutline />,
    },
    {
      to: "/@utsav",
      icon: <RiUser3Line />,
    },
    {
      to: "/app/domain",
      icon: <VscGlobe />,
    },
  ];
  return (
    <>
      <div className={styles.side_con}>
        <ul>
          {links.map((data,i) =>(
            <Link to={data.to} icon={data.icon} key={i} styles={styles}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
