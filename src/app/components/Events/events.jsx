import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import "./events.css";

export const EventsContainer = ({ children }) => (
  <div className="events" id="events">
    <h2 className="events-header">Events</h2>
    <div className="event-wrap">{children}</div>
  </div>
);

export const EventSection = ({ title, events, image, onClick }) => (
  <div className="event-section">
    <div className="event-section-wrapper">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div className="events-wrapper">
        <div className="events-items">
          <table>
            {events.map((item) => (
              <tr>
                <th className="event-table-title">{item.title}</th>
                <th className="event-table-btn">
                  <InfoOutlinedIcon size="small"
                    onClick={() => onClick(item)}
                    className="event-btn" />
                </th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  </div>
);
