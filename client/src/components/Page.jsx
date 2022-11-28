import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { forwardRef } from "react";

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} | Devport`}</title>
        {meta}
      </Helmet>
  
      <div ref={ref} {...other}>
        {children}
      </div>
    </HelmetProvider>
  ));
  
  Page.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.node,
  };
  
  export default Page;