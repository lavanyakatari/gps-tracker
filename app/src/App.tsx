import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState<any>(null);
  const getLocation = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gpsTracker/get");
      console.table(res.data.gpsTracker);
      setLocation(res.data.gpsTracker);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {location &&
        location.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center space-y-5"
          >
            <ul className="simpleList">
              <li className="flex flex-row items-center justify-center">
                Latitude: {item.latitude}
              </li>
              <li className="flex flex-row items-center justify-center">
                Longitude: {item.longitude}
              </li>
              <li className="flex flex-row items-center justify-center">
                Speed: {item.speed}
              </li>
              <li className="flex flex-row items-center justify-center">
                Created At: {item.createdAt}
              </li>
              <li className="flex flex-row items-center justify-center">
                Updated At: {item.updatedAt}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default App;
