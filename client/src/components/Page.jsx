import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { forwardRef } from "react";

const Page = forwardRef(
  ({ children, title = "", url, pic, meta, loc, ...other }, ref) => (
    <HelmetProvider>
      <Helmet>
          <title>
            {loc === "portfolio" ? `${title}` : `${title} | Devport`}
          </title>
          <link
            rel="icon"
            type="image/png"
            href={loc == "portfolio" ? pic : "/fav.png"}
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={loc === "portfolio" ? url : "www.devport.me"}
          />
          <meta
            property="og:title"
            content={
              loc === "portfolio"
                ? `${title}'s Portfolio`
                : "Devport - A stunning portfolio maker for developers"
            }
          />
          <meta
            property="og:description"
            content={
              loc === "portfolio"
                ? "Check out my portfolio"
                : "Devport is a portfolio maker for developers. It is a free and open source tool that helps you create a stunning portfolio in minutes with awesome customization"
            }
          />
          <meta
            property="og:image"
            content={
              loc === "portfolio"
                ? "https://cdn.discordapp.com/attachments/1016056668884303903/1049694026087026819/p_og.png"
                : "https://cdn.discordapp.com/attachments/1016056668884303903/1049693908550045746/og.png"
            }
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content={
              loc === "portfolio"
                ? "https://cdn.discordapp.com/attachments/1016056668884303903/1049694026087026819/p_og.png"
                : "https://cdn.discordapp.com/attachments/1016056668884303903/1049693908550045746/og.png"
            }
          />
          <meta
            name="twitter:url"
            content={loc === "portfolio" ? url : "www.devport.me"}
          />
          <meta name="twitter:site" content="@utsabdev" />
          <meta
            name="twitter:title"
            content={
              loc === "portfolio"
                ? `${title}'s Portfolio`
                : "Devport - A stunning portfolio maker for developers"
            }
          />
          <meta name="twitter:image:alt" content="Devport Banner" />
          <meta
            name="twitter:description"
            content={
              loc === "portfolio"
                ? "Check out my portfolio"
                : "Devport is a portfolio maker for developers. It is a free and open source tool that helps you create a stunning portfolio in minutes with awesome customization"
            }
          />
      </Helmet>

      <div ref={ref} {...other}>
        {children}
      </div>
    </HelmetProvider>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
