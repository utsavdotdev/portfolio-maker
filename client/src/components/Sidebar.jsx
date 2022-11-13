import React from "react";
import styles from "../css/components/Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import {MdPersonSearch} from "react-icons/md"
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
      to: "/app/profile",
      icon: <RiUser3Line />,
    },
    {
      to: "/app/domain",
      icon: <VscGlobe />,
    },
    {
      to: "/app/search",
      icon: <MdPersonSearch />,
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
