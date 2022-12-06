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
    getPortfolio();
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
  const url = portfolio?.url;
  const name = portfolio?.username;
  const nameCapitalized = username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <>
      <Page
        title={nameCapitalized}
        loc="portfolio"
        //send meta data
        meta={
          <>
            //favicon
            <link rel="icon" type="image/*" href={portfolio?.user_img} />
            //Meta data for fb
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={`${name}'s Portfolio`} />
            <meta property="og:description" content="Check out my portfolio" />
            <meta property="og:image" content="/p_og.png" />
            //Meta data for twitter
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:site" content={`@${name}`} />
            <meta name="twitter:title" content={`${name}'s Portfolio`} />
            <meta name="twitter:description" content="Check out my portfolio" />
            <meta
              name="twitter:image"
              content="https://cdn.discordapp.com/attachments/1016056668884303903/1049694026087026819/p_og.png"
            />
          </>
        }
      >
        {loading ? (
          <Loader />
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
