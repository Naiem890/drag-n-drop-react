import React from "react";
import Column from "./Column";
import { useDrag } from "react-dnd";
import DropZone from "./DropZone";

const Row = ({ row }) => {
  const [{ opacity }, drag] = useDrag({
    type: row.type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div className="row base" ref={drag} style={{ opacity }}>
      {row.id}
      <div className="columns">
        {row.children.map((column) => {
          return (
            <>
              <DropZone className="horizontalDrag" />
              <Column key={column.id} column={column} />
            </>
          );
        })}
        <DropZone className="horizontalDrag" />
      </div>
    </div>
  );
};

export default Row;
