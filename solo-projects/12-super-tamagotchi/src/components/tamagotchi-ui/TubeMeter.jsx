import React from 'react';
import PropTypes from 'prop-types';

function TubeMeter(props) {
  const statusColor = meterFillColor(props.meterValue);
  const meterLevel = {
    width: `${props.meterValue / props.maxValue * 100}%`,
    borderLeft: `2px solid ${statusColor}`,
    backgroundColor: `${statusColor}`
  };

  function meterFillColor(meterValue) {
    if (meterValue > props.maxValue * 0.6) {
      return '#8f9';
    } else if (meterValue > props.maxValue * 0.25) {
      return '#fd0';
    } else {
      return '#f00';
    }
  }

  return (
    <div className="meter">
      <style jsx>
        {`
          .meter {
            height: 56px;
            width: 206px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            border: 4px solid #fff;
            border-radius: 28px;
            background: #fff;
            overflow: hidden;
          }

          .meter-fill {
            height: 100%;
            position: absolute;
            left: 0;
            transition: width 1s, background-color 1s, border 1s;
          }

          h3 {
            padding: 5px 35px;
            border-radius: 20px;
            background: #fff9;
            color: #f09;
            text-transform: uppercase;
            z-index: 10;
          }
        `}
      </style>
      <div className="meter-fill" style={meterLevel}></div>
      <h3>{props.meterType}</h3>
    </div>
  );
}

TubeMeter.propTypes = {
  meterType: PropTypes.string.isRequired,
  meterValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default TubeMeter;
