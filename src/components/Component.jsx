import React from "react";
import { useContext } from "react";
import { ComponentContext } from "./Dashboard";
import { useDrag } from "react-dnd";

const Component = ({ component }) => {
  const components = useContext(ComponentContext);
  const [{ opacity }, drag] = useDrag({
    type: component.type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div className="component draggable" ref={drag} style={{ opacity }}>
      {component.id}
      <div>{components[component.id].content}</div>
    </div>
  );
};

export default Component;
