import React from "react";
import "./Settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const SettingsPage = () => {
  // Dummy settings data
  const settingsData = [
    { id: 1, title: "Notifications", enabled: true },
    { id: 2, title: "Profile Privacy", enabled: false },
    { id: 3, title: "Language", enabled: true },
    // Add more settings data as needed
  ];

  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="settingsContent">
          <h2>Settings</h2>
          <div className="settingsList">
            {settingsData.map((setting) => (
              <div className="settingItem" key={setting.id}>
                <h3>{setting.title}</h3>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={setting.enabled}
                    readOnly
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
