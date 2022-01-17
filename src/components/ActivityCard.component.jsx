import React from 'react';
import EllipsisIcon from '../assets/images/icon-ellipsis.svg';
import Exercise from "../assets/images/icon-exercise.svg";
import Play from "../assets/images/icon-play.svg";
import SelfCare from '../assets/images/icon-self-care.svg';
import Social from "../assets/images/icon-social.svg";
import Study from "../assets/images/icon-study.svg";
import Work from '../assets/images/icon-work.svg';

const ActivityCard = ({ activity, timeframe, currentTime, previousTime }) => {
  const setActivityIcon = () => {
    console.log(activity)
    switch (activity) {
      case "Exercise":
        return (
          <div className='activity-header exercise'>
            <img src={Exercise} className="activity-icon" alt="" />
          </div>
        )
      case "Play":
        return (
          <div className='activity-header play'>
            <img src={Play} className="activity-icon" alt="" />
          </div>
        )
      case "Self Care":
        return (
          <div className='activity-header self-care'>
            <img src={SelfCare} className="activity-icon" alt="" />
          </div>
        )
      case "Social":
        return (
          <div className='activity-header social'>
            <img src={Social} className="activity-icon" alt="" />
          </div>
        )
      case "Study":
        return (
          <div className='activity-header study'>
            <img src={Study} className="activity-icon" alt="" />
          </div>
        )
      case "Work":
        return (
          <div className='activity-header work'>
            <img src={Work} className="activity-icon" alt="" />
          </div>
        )
      default:
        return "no icon";
    }
  };

  return (
    <div className="card activity-card">
      <div className="activity-header">
        {setActivityIcon()}
      </div>
      <div className="activity-content">
        <div className="activity-name">
          <h1>{activity}</h1>
          <img className="options" src={EllipsisIcon} alt="options" />
        </div>
        <h2>{currentTime}hrs</h2>
        <p className='previous'>{`Last ${timeframe} – ${previousTime}hrs`}</p>
      </div>
    </div>
  );
}

export default ActivityCard;