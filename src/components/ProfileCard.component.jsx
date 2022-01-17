import React from 'react';

const ProfileCard = ({ picture, name, changeTimeframe, timeframe }) => {
  return (
    <div className="card profile-card">
      <div className="card-id">
        <div className="card-image">
          <figure className="image">
            <img src={picture} alt={name} />
          </figure>
        </div>
        <div className="name">
          <p>Report for</p>
          <h1 className='profile-card-name'>{name}</h1>
        </div>
      </div>
      <div className="card-menu">
        <button
          className={`btn ${timeframe === 'day' ? 'btn-active' : ''}`}
          onClick={() => changeTimeframe("day")}>
          Daily
        </button>
        <button
          className={`btn ${timeframe === 'week' ? 'btn-active' : ''}`}
          onClick={() => changeTimeframe("week")}>
          Weekly
        </button>
        <button
          className={`btn ${timeframe === 'month' ? 'btn-active' : ''}`}
          onClick={() => changeTimeframe("month")}>
          Monthly
        </button>
      </div>
    </div>
  )
}

export default ProfileCard;