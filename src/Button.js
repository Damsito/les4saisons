import React from "react";
export function Button(props) {
  return (
    <button
      style={{ height: "50px" }}
      className={
        "rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
