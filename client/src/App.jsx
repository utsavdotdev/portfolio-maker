import react, { useState } from "react";
import { useEffect } from "react";
import Loader from "./components/Loader";
import Router from "./route";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <Loader /> : <Router />}</>;
}

export default App;
