import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";

const ElectronicsPage = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/electronics");

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        console.log("API DATA 👉", data);

        setPageData(data);
      } catch (err) {
        console.log("FETCH ERROR 👉", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header pageData={pageData} />
    </>
  );
};

export default ElectronicsPage;