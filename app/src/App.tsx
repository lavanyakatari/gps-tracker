import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const fetchGpsTracker = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/gpsTracker/get"
    );
    console.log(response.data);
  };

  useEffect(() => {
    fetchGpsTracker();
  }, []);

  return <div>hi</div>;
};

export default App;
