import React from "react";

function LeftColumns(props) {
  return (
    <div className="columns is-variable is-4 is-multiline ">
      {props.children}
    </div>
  );
}

export default LeftColumns;
