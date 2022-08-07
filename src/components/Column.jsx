import React from "react";
import Component from "./Component";

const Column = ({ column }) => {
  return (
    <div className="column base">
      {column.id}
      {column.children.map((component) => (
        <Component key={component.id} component={component} />
      ))}
    </div>
  );
};

export default Column;
