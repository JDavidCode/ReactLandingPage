import React, { useEffect, useState } from "react";

const TimeAgo = ({ date, className = "" }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(new Date(date)));
    }, 60000);

    setTimeAgo(calculateTimeAgo(new Date(date)));

    return () => clearInterval(interval);
  }, [date]);

  const calculateTimeAgo = (dateObject) => {
    const now = new Date();
    const seconds = Math.floor((now - dateObject) / 1000);

    if (seconds < 60) {
      return `just ${seconds === 1 ? "a" : seconds} second${seconds === 1 ? "" : "s"} ago`;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `about ${minutes === 1 ? "a" : minutes} minute${minutes === 1 ? "" : "s"} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `about ${hours === 1 ? "an" : hours} hour${hours === 1 ? "" : "s"} ago`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
      return `about ${days === 1 ? "a" : days} day${days === 1 ? "" : "s"} ago`;
    }

    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      return `about ${weeks === 1 ? "a" : weeks} week${weeks === 1 ? "" : "s"} ago`;
    }

    const months = Math.floor(days / 30);
    if (months < 6) {
      return `about ${months === 1 ? "a" : months} month${months === 1 ? "" : "s"} ago`;
    }

    return dateObject.toLocaleDateString();
  };

  return <span className={className}>{timeAgo}</span>;
};

export default TimeAgo;
