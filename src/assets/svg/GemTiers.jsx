import * as React from "react";

const tierColors = {
  Bronze: {
    lightest: "#e5b07a",
    lighter: "#d6a75c",
    light: "#c19b3d",
    medium: "#a86d2a",
    dark: "#7b5a1e",
    darkest: "#6f4c24",
  },
  Silver: {
    lightest: "#e5e5e5",
    lighter: "#c0c0c0",
    light: "#a8a8a8",
    medium: "#808080",
    dark: "#585858",
    darkest: "#404040",
  },
  Gold: {
    lightest: "#ffdf7f",
    lighter: "#ffcc00",
    light: "#d6b600",
    medium: "#b59400",
    dark: "#8d6e00",
    darkest: "#7a5a00",
  },
  Diamond: {
    lightest: "#cceeff",
    lighter: "#99ccff",
    light: "#66aaff",
    medium: "#3388ff",
    dark: "#0077ff",
    darkest: "#0055aa",
  },
  Emerald: {
    lightest: "#e6ffed",
    lighter: "#c2f1d6",
    light: "#99e6b2",
    medium: "#66cc99",
    dark: "#33b388",
    darkest: "#008f5e",
  },

  Enterprise: {
    lightest: "#ff9999",
    lighter: "#ff4f4f",
    light: "#c92c2c",
    medium: "#9e1f1f",
    dark: "#780f0f",
    darkest: "#4c0a0a",
  },
};

function SvgComponent({ tier }) {
  const colors = tierColors[tier] || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      projectId="5d735ef92d124cdfa7a767f4ed522995"
      exportId="221f68970d5d4ecb92315174d89c58b4"
      cached="false"
    >
      <path
        d="M427.5,330.65c-7.9-1.3-60-12.6-78.7-16.9-.9-2.3-88.2-171.5-90.4-173.4-2.2,2.1-85.8,157.9-94.5,173.9-14.2,2.9-29.809146,6.572428-43.2,9.5c6.9-13.5,116.1-223.45,132.8-255.05c3.8-7.1,5.8-14.1,5.6-22.3-.4-15.1-.1-30.2-.1-45.4"
        transform="translate(0-.25)"
        fill={colors.darkest}
      />
      <path
        d="M258.6,1c.4,15.2.1,30.3.5,45.4.2,8.2-1.8,15.2-5.6,22.3-16.7,31.6-132.4,254.7-132.8,254.8-11.7,2.3-23.2,4.7-34.6,6.9C86,330,256.8,1,258.6,1Z"
        fill={colors.dark}
      />
      <path
        d="M348.4,419.9c-5.574951,6.03953-89.4,93.682485-89.4,92.1-.6-11.5-.7-81.5-.3-105.2c1.6-.9,43.7-44.1,49.3-49.3.7,1.9,39,60.9,40.4,62.4Z"
        fill={colors.medium}
      />
      <path
        d="M258.557831,478.8c.2,11.1.242169,21.7.442169,33.2c0,1.262485-90.3-91.6-91.8-94.2c4.4-7.1,8.5-13.3,13-19.9.4.1,72.257831,75.1,78.357831,80.9Z"
        fill={colors.light}
      />
      <path
        d="M180.2,397.9c-4.3,6.6-8.5,13.2-13,19.9-3.7-3.1-80.2-85.5-81.1-87.4c11.5-2.6,23-4.9,34.6-6.9-3.497471,8.078928-3.3,8.1,2.8,14.4c8.9,9.2,46.6,49.2,56.7,60Z"
        fill={colors.lighter}
      />
      <path
        d="M348.4,419.9c-1.7-1.3-39.7-60.2-40.4-62.4-.1-.9,27.3-29.8,40.8-44c18.7,4,70.9,15.2,78.7,16.9-.5,1.9-74.3,84.6-79.1,89.5Z"
        fill={colors.lightest}
      />
      <path
        d="M163.9,314c8.4-15.9,92.3-172.2,94.5-173.9.4,49.1.4,98.2,0,146.9-2,1.8-49.5,69.2-51.4,70.5-14.4-14.5-28.8-29.3-43.1-43.5Z"
        fill={colors.darkest}
      />
      <path
        d="M258.4,287c0-48.7,0-97.8,0-146.9c1.8,1.5,89.5,171.1,90.4,173.4-13.5,14.5-26.8,29.6-40.8,44-2-1.3-47.9-68.9-49.6-70.5Z"
        fill={colors.medium}
      />
      <path
        d="M163.9,314c14.6,14.1,43,42.8,43.1,43.5-3.2,4.8-26.4,40.5-26.8,40.4-10.3-10.8-47.8-50.8-56.7-60-6.1-6.3-6.4-6.2-2.8-14.4.1-.3,29-6.6,43.2-9.5Z"
        fill={colors.light}
      />
      <path
        d="M207,357.5c1.7-1.8,32.3-45.2,46-65.2c1.3-2,3.4-3.5,5.4-5.3c2.1,1.6,4.2,3.1,5.5,5.1C277,312,307.9,357,308,357.5c-5.6,5.9-47.4,48.5-49.3,49.3"
        fill={colors.darker}
      />
      <path
        d="M207,357.5c10.1,9.3,49.5,47.9,51.7,49.3.3,23.7-.1,48-.1,72-6.2-5.3-66.1-67.7-78.4-80.9c5.6-8.6,23.6-35.6,26.8-40.4Z"
        fill={colors.lighter}
      />
    </svg>
  );
}

export default SvgComponent;
