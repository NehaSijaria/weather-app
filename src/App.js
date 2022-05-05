import { useState } from "react";
import Axios from "axios";

function App() {
  const [data,setData] = useState({
    description:'',
    temp:0,
    temp_min:0,
    temp_max:0,
    country:""
  });
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=051a524ff8bcbeaa8075609597b1e325`;
//Axios return {}, .data is property
    const searchLocation = () => {
      Axios.get(url).then((response) => {
        console.log(response.data);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
          country: response.data.sys.country,
        });
        setDataLoading(true);
      });
    };
    const [dataLoading, setDataLoading] = useState(false);
  return (
    <div className="container">
      <h1>Weather Now</h1>
      <div>
        <input
          // e.target.value=> value of input
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City"
          type="text"
        />
        <button onClick={searchLocation}>Get Weather</button>
      </div>

      {/* Createbox */}
      <div className="data-box">
      {dataLoading &&
        <div className="data">
          <h3>Description: {data.description}</h3>
          <h3>Temp: {data.temp}</h3>
          <h3>Min Temp: {data.temp_min}</h3>
          <h3>max Temp: {data.temp_max}</h3>
          <h3>Country: {data.country}</h3>
        </div>
      }
      </div>
    </div>
  );
  }
export default App;
