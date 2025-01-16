import React from "react";

export default function Backdrop({ toggleSidebar }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black opacity-80"
      onClick={() => toggleSidebar(false)}
    />
  );
}
