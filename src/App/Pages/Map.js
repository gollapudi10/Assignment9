import React from "react";

const Map = (props) => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "5px solid grey",
        borderRadius: 35,
        width: 480,
      }}
    >
      {props.id}. {props.name}
    </div>
  );
};

export default Map;
