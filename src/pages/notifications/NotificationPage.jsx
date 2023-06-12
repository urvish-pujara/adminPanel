import React from "react";
import "./notification.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { notificationData } from "./notificationData";

const NotificationPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="notification-list">
          <h2>Notifications</h2>
          {notificationData.map((notification) => (
            <div className="notification" key={notification.id}>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <p>{notification.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
