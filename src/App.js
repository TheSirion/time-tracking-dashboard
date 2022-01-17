import { useState } from "react";
import Data from "./assets/data/data.json";
import JeremyImg from "./assets/images/image-jeremy.png";
import ActivityCard from "./components/ActivityCard.component";
import ProfileCard from "./components/ProfileCard.component";
import "./sass/main.scss";

function App() {
  const [timeframe, setTimeframe] = useState("week");

  const changeTimeframe = timeframe => {
    setTimeframe(timeframe);
  };

  const mapData = () => {
    return Data.map(activity => {
      const { title, timeframes } = activity;

      const setTimeframe = () => {
        if (timeframe === "week") {
          return timeframes.weekly;
        } else if (timeframe === "month") {
          return timeframes.monthly;
        } else {
          return timeframes.daily;
        }
      };

      return (
        <ActivityCard
          activity={title}
          timeframe={timeframe}
          currentTime={setTimeframe().current}
          previousTime={setTimeframe().previous}
          key={title}
        />
      );
    });
  };

  return (
    <div className='app'>
      <div className='content'>
        <ProfileCard
          picture={JeremyImg}
          name='Jeremy Robson'
          changeTimeframe={changeTimeframe}
          timeframe={timeframe}
        />
        {mapData()}
      </div>
    </div>
  );
}

export default App;
