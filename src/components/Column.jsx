import React from "react";
import Component from "./Component";
import { useDrag } from "react-dnd";
import DropZone from "./DropZone";

const Column = ({ column }) => {
  const [{ opacity }, drag] = useDrag({
    type: column.type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div className="column base" ref={drag} style={{ opacity }}>
      {column.id}
      {column.children.map((component) => {
        return (
          <>
            <DropZone />
            <Component key={component.id} component={component} />
          </>
        );
      })}
      <DropZone />
    </div>
  );
};

export default Column;
