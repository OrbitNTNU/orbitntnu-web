import firebase from "gatsby-plugin-firebase";
import React, { useEffect } from "react";
import "./RecruitmentTimeline.css"; 

export const OrbitTimeline = ({
  title = "Recruitment Timeline",
  subtitle = "Key dates and deadlines for the Fall semester 2025",
  events = [
    {
      date: "August 11-25, 2025",
      title: "Application Period",
      description: "The application process starts at August 11th and the deadline is at August 25th.\n\nTo submit your application, go to the Join page."
    },
    {
      date: "August 25 - September 3, 2025",
      title: "Interview Period",
      description: "During this period we hold interviews with the applicants.\n\nSelected candidates will be contacted for interviews after the application period."
    },
    {
      date: "September 4, 2025",
      title: "Offers Sent Out",
      description: "We send out offers to all accepted members here.\n\nCongratulations to our new team members and welcome to Orbit!"
    },
    {
      date: "September 5-6, 2025",
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