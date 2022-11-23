import React, { createContext, useEffect, useState } from "react";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState({
    name: "utsavbhattarai",
    links: [
      {
        name: "github",
        url: "https://github.com/utsavbhattarai007",
        label: "github.com/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/utsavbhattarai007/",
        label: "linkedin.com/in/",
      },
      {
        name: "twitter",
        url: "https://twitter.com/utsavbhattarai7",
        label: "twitter.com/",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/utsavbhattarai007/",
        label: "instagram.com/",
      },
      {
        name: "youtube",
        url: "",
        label: "youtube.com/",
      },
      {
        name: "portfolio",
        url: "https://utsavbhattarai.info.np",
        label: "Portfolio",
      },
      {
        name: "facebook",
        url: "https://facebook.com/utsavbhattarai007",
        label: "Facebook",
      },
      {
        name: "buymeacoffee",
        url: "https://www.buymeacoffee.com/utsavbhattarai",
        label: "buymeacoffee.com/",
      },
      {
        name: "blog",
        url: "https://blog.utsavbhattarai.info.np",
        label: "Blog",
      },
    ],
    customization: {
      transition: "fadein",
      border_radius: "4",
      bg_color: "#1e1f1f",
      bg_img: "/bg/bg6.jpg",
    },
  });
  const [link, setLink] = useState({
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    youtube: "",
    portfolio: "",
    facebook: "",
    buymeacoffee: "",
    blog: "",
  });

  const [popup, setPopup] = useState({
    congo: false,
  });
  const [check, setCheck] = useState([false, false, false, false, true, false]);
  const [imgCheck, setImgCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    true,
  ]);

  return (
    <>
      <ContextProvider.Provider
        value={{
          usr: [user, setUser],
          pop: [popup, setPopup],
          chk: [check, setCheck],
          imgChk: [imgCheck, setImgCheck],
          lk: [link, setLink],
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
