import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [settings, setSettings] = useState({
    currency: "USD",
    taxYear: new Date().getFullYear(),
    notifications: true,
  });

  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem("settings"));
    if (storedSettings) {
      setSettings(storedSettings);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => {
      const updatedSettings = {
        ...prevSettings,
        [name]: type === "checkbox" ? checked : value,
      };
      localStorage.setItem("settings", JSON.stringify(updatedSettings));
      return updatedSettings;
    });
  };

  return (
    <div className="page-container">
      <h2>Settings</h2>
      <div className="settings-form">
        <label>
          Currency:
          <select
            name="currency"
            value={settings.currency}
            onChange={handleChange}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </label>

        <label>
          Tax Year:
          <input
            type="number"
            name="taxYear"
            value={settings.taxYear}
            onChange={handleChange}
          />
        </label>

        <label>
          Enable Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
