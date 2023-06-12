import React from "react";
import "./TrafficInfo.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";

const TrafficInfo = () => {
  return (
    <div className="traffic-info">
      <div className="top">
        <h1 className="title">Traffic Information</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="traffic-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total traffic today</p>
        <p className="amount">1.2 TB</p>
        <p className="desc">
          Real-time traffic data. May not include all network requests.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Peak Hour</div>
            <div className="item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result-amount">4.8 TB</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Yesterday</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">1.1 TB</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result-amount">8.3 TB</div>
            </div>
          </div>
        </div>
        <div className="traffic-icon">
          <TrafficOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default TrafficInfo;
