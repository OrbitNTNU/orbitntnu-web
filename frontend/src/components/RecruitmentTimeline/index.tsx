import firebase from "gatsby-plugin-firebase";
import React, { useEffect } from "react";
import "./RecruitmentTimeline.css"; 

export const OrbitTimeline = ({
  title = "Recruitment Timeline",
  subtitle = "Key dates and deadlines for the Spring semester 2026",
  events = [
    {
      date: "January 14-29, 2026",
      title: "Application Period",
      description: "The application process starts at January 14th and the deadline is at January 29th at 23:59.\n\nTo submit your application, go to the Join page."
    },
    {
      date: "January 30 - February 4, 2026",
      title: "Interview Period",
      description: "During this period we hold interviews with the applicants.\n\nSelected candidates will be contacted for interviews after the application period."
    },
    {
      date: "February 4, 2026",
      title: "Offers Sent Out",
      description: "We send out offers to all accepted members here.\n\nCongratulations to our new team members and welcome to Orbit!"
    },
    {
      date: "February 6-7, 2026",
      title: "Onboarding Weekend",
      description: "Onboarding into the organization for all new members.\n\nA comprehensive weekend event to introduce you to Orbit's mission, values and members."
    }
  ]
}) => {
  const formatDescription = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="orbit-timeline-wrapper">
      <div className="timeline-container">
        <div className="timeline-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="date">{event.date}</div>
                <div className="event-title">{event.title}</div>
                <div className="event-description">
                  {formatDescription(event.description)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};