import React from "react";
import "./logs.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { logData } from "./logData";

const LogsPage = () => {
    return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="logs-list">
            <h2>Logs</h2>
            {logData.map((log) => (
              <div className={`log ${log.type}`} key={log.id}>
                <h3>{log.title}</h3>
                <p>{log.message}</p>
                <p>{log.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default LogsPage;
