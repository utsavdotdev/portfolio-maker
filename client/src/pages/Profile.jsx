import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [pgname, setPagename] = useOutletContext();
  useEffect(() => {
    setPagename("Profile");
  }, [pgname]);
  return <div></div>;
};

export default Profile;
