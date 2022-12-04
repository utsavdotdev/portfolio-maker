import React, { createContext, useEffect, useState } from "react";
import { fetchPortfolioById } from "../api/api";
import axios from "../config/axios";
import { bg, transition } from "./data";
export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [portfolio, setPortfolio] = useState();
  const [user, setUser] = useState([]);
  const [cload, setCload] = useState(false);

  const [link, setLink] = useState();

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

  // UseEffects
  useEffect(() => {
    if (accessToken !== null) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (user.length > 0) {
      getPortfolio();
    }
  }, [user[0]]);

  //getting the portfolio
  const getPortfolio = async () => {
    try {
      const id = user[0]?._id;
      const res = await fetchPortfolioById(id);
      if (res) {
        const { portfolio } = res?.data;
        setPortfolio(portfolio);
        const allLinks = portfolio?.links;
        const links = allLinks?.reduce((acc, curr) => {
          acc[curr.platform] = curr.url.split("/").pop();
          return acc;
        }, {});
        console.log(links);
        setLink(links);

        //for transition
        const index = transition.findIndex(
          (item) => item.label === portfolio?.customizations?.transition
        );
        const newCheck = check.map((item, i) => (i === index ? true : false));
        setCheck(newCheck);

        //for bg
        const index1 = bg.findIndex(
          (item) => item.src === portfolio?.customizations?.bg_img
        );
        const newCheck1 = imgCheck.map((item, i) =>
          i === index1 ? true : false
        );
        setImgCheck(newCheck1);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.replace("/");
      }
      console.log(error);
    }
  };

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

  //logging
  console.log(user);
  // console.log(portfolio);

  return (
    <>
      <ContextProvider.Provider
        value={{
          port: [portfolio, setPortfolio],
          pop: [popup, setPopup],
          chk: [check, setCheck],
          imgChk: [imgCheck, setImgCheck],
          lk: [link, setLink],
          usr: [user, setUser],
          c: [cload, setCload],
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};

export default Context;
