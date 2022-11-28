import React, { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [portfolio, setPortfolio] = useState({
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
  const [user, setUser] = useState([]);
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
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");

  //getting access token through refresh token
  const getAccessToken = async () => {
    try {
      if (localStorage.getItem("refresh")) {
        const res = await axios.post("/token/refresh", {
          refreshToken: refreshToken,
        });
        if (res) {
          localStorage.setItem("access", res.data.accessToken);
          return res.data.accessToken;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken !== null) {
      fetchUser();
    }
  }, []);
  console.log(user);

  //fetching user details from accestoken
  const fetchUser = async () => {
    try {
      const res = await axios.get("/user", {
        headers: {
          "x-access-token": accessToken,
        },
      });
      setUser([res.data.user]);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const accessTok = await getAccessToken();
        const res = await axios.get("/user", {
          headers: {
            "x-access-token": accessTok,
          },
        });
        setUser([res.data.user]);
      }
      console.log(error);
    }
  };

  return (
    <>
      <ContextProvider.Provider
        value={{
          port: [portfolio, setPortfolio],
          pop: [popup, setPopup],
          chk: [check, setCheck],
          imgChk: [imgCheck, setImgCheck],
          lk: [link, setLink],
          usr:[user,setUser]
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
