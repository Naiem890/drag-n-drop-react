import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ sideBarItem }) => {
  const [{ opacity }, drag] = useDrag({
    type: sideBarItem.component.type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      {sideBarItem.component.type}
    </div>
  );
};

export default SideBarItem;
