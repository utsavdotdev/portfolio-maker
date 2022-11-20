import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../css/pages/Search.module.css";
import { BsSearch } from "react-icons/bs";
import People from "../components/People";
import LoadingPeople from "../components/LoadingPeople";

const Search = () => {
  const {pgname, setPagename} = useOutletContext();
  useEffect(() => {
    setPagename("Search");
  }, [pgname]);
  return (
    <>
      <div className={styles.search_con}>
        <div className={styles.search_wrapper}>
          <div className={styles.search_box}>
            <input type="text" placeholder="Search" />
            <span>
              <BsSearch />
            </span>
          </div>
        </div>
        <div className={styles.search_data}>
          <People/>
          {/* <LoadingPeople/> */}
        </div>
      </div>
    </>
  );
};

export default Search;
