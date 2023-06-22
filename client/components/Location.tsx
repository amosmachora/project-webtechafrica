import React from "react";

const Location = ({ color }: { color: string }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 85 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="42.5" cy="42" r="42" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.4286 61C42.4286 61 56.3571 43.6211 56.3571 35.9286C56.3571 28.236 50.1211 22 42.4286 22C34.736 22 28.5 28.236 28.5 35.9286C28.5 43.6211 42.4286 61 42.4286 61ZM42.8265 41.102C45.9035 41.102 48.398 38.6076 48.398 35.5306C48.398 32.4536 45.9035 29.9592 42.8265 29.9592C39.7495 29.9592 37.2551 32.4536 37.2551 35.5306C37.2551 38.6076 39.7495 41.102 42.8265 41.102Z"
        fill="#C1749E"
      />
    </svg>
  );
};

export default Location;
