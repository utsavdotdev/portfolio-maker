import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Customization = () => {
   const [pgname, setPagename] = useOutletContext();
   useEffect(() => {
     setPagename("Customization");
   }, [pgname]);
  return <div></div>;
};

export default Customization;
