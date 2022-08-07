import React from "react";
import { useContext } from "react";
import { ComponentContext } from "./Dashboard";

const Component = ({ component }) => {
  const components = useContext(ComponentContext);
  return (
    <div className="component draggable">
      {component.id}
      <div>{components[component.id].content}</div>
    </div>
  );
};

export default Component;
