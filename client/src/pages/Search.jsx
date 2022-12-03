import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../css/pages/Search.module.css";
import { BsSearch } from "react-icons/bs";
import People from "../components/People";
import LoadingPeople from "../components/LoadingPeople";
import { useMutation } from "@tanstack/react-query";
import { searchData } from "../api/api";
import { toast } from "react-hot-toast";

const Search = () => {
  const { pgname, setPagename } = useOutletContext();
  const [search, setSearch] = React.useState("");
  const [result, setResult] = React.useState();
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setPagename("Search");
  }, [pgname]);

  useEffect(() => {
    if (!search) {
      setResult([]);
    }
  }, [search]);

  const { mutate, isError, data } = useMutation({
    mutationFn: (data) => searchData(data),
    onSuccess: (res) => {
      setLoading(false);
      if (res.status === 203) {
        setSearch("");
        return toast.error("Portfolio not found", { duration: 3000 });
      }
      setResult(res.data.portfolio);
    },
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (!loading) {
      setLoading(!loading);
      mutate(search);
    }
  };
  if (isError) {
    setLoading(!loading);
    toast.error("Something went wrong");
  }

  return (
    <>
      <div className={styles.search_con}>
        <div className={styles.search_wrapper}>
          <div className={styles.search_box}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
            <span onClick={() => onSearch()}>
              <BsSearch />
            </span>
          </div>
        </div>
        <div className={styles.search_data}>
          {loading ? (
            <LoadingPeople />
          ) : result?.length > 0 ? (
            result?.map((data, i) => <People key={i} data={data} />)
          ) : (
            <div className={styles.resultWrapper}>
              <span className={styles.resultText}>
                {search ? "Typing . . ." : "Search devs . . ."}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
