import React from "react";
import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      posted: "2 days ago",
      role: "Senior UI/UX Designer",
      type: "Part Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
      buttonText: "Apply Now",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      posted: "1 day ago",
      role: "Frontend Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Goa, India",
      buttonText: "Apply Now",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      posted: "3 days ago",
      role: "React Developer",
      type: "Full Time",
      level: "Junior Level",
      salary: "$90/hr",
      location: "Mysuru, India",
      buttonText: "Apply Now",
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      posted: "5 days ago",
      role: "UI Engineer",
      type: "Contract",
      level: "Senior Level",
      salary: "$130/hr",
      location: "Remote",
      buttonText: "Apply Now",
    },
    {
      id: 5,
      company: "Meta",
      logo: "https://cdn.simpleicons.org/meta",
      posted: "4 days ago",
      role: "Product Designer",
      type: "Full Time",
      level: "Senior Level",
      salary: "$140/hr",
      location: "Delhi, India",
      buttonText: "Apply Now",
    },
    {
      id: 6,
      company: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      posted: "6 days ago",
      role: "iOS Developer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Pune, India",
      buttonText: "Apply Now",
    },
    {
      id: 7,
      company: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      posted: "2 days ago",
      role: "Backend Developer",
      type: "Part Time",
      level: "Mid Level",
      salary: "$95/hr",
      location: "Remote",
      buttonText: "Apply Now",
    },
    {
      id: 8,
      company: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      posted: "7 days ago",
      role: "UI/UX Researcher",
      type: "Contract",
      level: "Senior Level",
      salary: "$125/hr",
      location: "Noida, India",
      buttonText: "Apply Now",
    },
    {
      id: 9,
      company: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      posted: "1 day ago",
      role: "Software Engineer",
      type: "Full Time",
      level: "Junior Level",
      salary: "$105/hr",
      location: "Chennai, India",
      buttonText: "Apply Now",
    },
    {
      id: 10,
      company: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      posted: "3 days ago",
      role: "Frontend Engineer",
      type: "Full Time",
      level: "Mid Level",
      salary: "$115/hr",
      location: "Remote",
      buttonText: "Apply Now",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (ele,idx) {
        return (
          <Card
          key={idx}
            company={ele.company}
            role={ele.role}
            type={ele.type}
            level={ele.level}
            salary={ele.salary}
            location={ele.location}
            logo={ele.logo}
            dataPosted={ele.posted}
          />
        );
      })}
      ;
    </div>
  );
};
export default App;
