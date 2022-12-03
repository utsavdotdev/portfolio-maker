import React, { useEffect, useState } from "react";
import styles from "../css/pages/Portfolio.module.css";
import BigBtn from "../components/BigBtn";
import { BsBatteryFull } from "react-icons/bs";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { TiWiFi } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { fetchPortfolio } from "../api/api";
import Page404 from "../components/Page404";
import Page from "../components/Page";
import Loader from "../components/Loader";

const Portfolio = () => {
  const { username } = useParams();
  const [portfolio, setPortfolio] = useState();
  const [offline, setOffline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [not, setNot] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      getPortfolio();
    }, 2000);
  }, []);

  const getPortfolio = async () => {
    try {
      const res = await fetchPortfolio(username);
      if (res) {
        setLoading(false);
        if (res.status === 204) {
          setNot(true);
        }
        if (res.status === 203) {
          setOffline(true);
        }
        const { portfolio } = res?.data;
        setPortfolio(portfolio);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (not) {
    return <Page404 label="Portfolio not found" />;
  }
  if (offline) {
    return <Page404 label="Offline" />;
  }
  const trans = portfolio?.customizations.transition
    .toLowerCase()
    .replace(/\s/g, "");
  return (
    <>
      <Page title={username} loc="portfolio">
        {loading ? (
          <Loader/>
        ) : (
          <>
            <div
              className={styles.portfolio_con}
              style={{ backgroundColor: portfolio?.customizations?.bg_color }}
            >
              <div className={styles.portfolio} id={trans}>
                <img
                  src={portfolio?.customizations?.bg_img}
                  className={styles.bg_img}
                />
                <div className={styles.portfolio_wrapper}>
                  <div className={styles.notch}></div>
                  <div className={styles.props}>
                    <BsBatteryFull />
                    <MdOutlineSignalCellularAlt />
                    <TiWiFi />
                  </div>
                  <div className={styles.user_con}>
                    <div className={styles.user_img}>
                      <img src={portfolio?.user_img} />
                    </div>
                    <span className={styles.username}>
                      @{portfolio?.username}
                    </span>
                  </div>
                  <div className={styles.links_con}>
                    {portfolio?.links.map((link, i) => (
                      <BigBtn
                        links={link}
                        key={i}
                        style={{
                          borderRadius:
                            portfolio?.customizations?.border_radius + "px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.credit}>
              <a href="https://devport.me" target={"_blank"}>
                <span>Powered by Devport</span>
              </a>
            </div>
          </>
        )}
      </Page>
    </>
  );
};

export default Portfolio;
