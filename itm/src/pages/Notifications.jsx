import { useState } from "react";
import "./Notifications.css"; 
const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      userId: "123",
      type: "invoice_due",
      title: "Invoice Due Reminder",
      message: "Your invoice #INV1001 is due tomorrow.",
      isRead: false,
      actionLink: "/invoices",
      dateCreated: "2025-03-23",
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <div className="page-container">
      <h2>Notifications</h2>
      <p>View recent notifications about your finances.</p>

      <div className="table-container">
        <table className="notifications-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <tr key={notif.id} className={notif.isRead ? "read" : "unread"}>
                  <td>{notif.title}</td>
                  <td>{notif.message}</td>
                  <td>{notif.type}</td>
                  <td>{notif.isRead ? "Read" : "Unread"}</td>
                  <td>
                    {!notif.isRead && (
                      <button onClick={() => markAsRead(notif.id)}>
                        Mark as Read
                      </button>
                    )}
                  </td>
                  <td>{notif.dateCreated}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">
                  No notifications available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
