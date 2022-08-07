import React from "react";
import Column from "./Column";

const Row = ({ row }) => {
  return (
    <div className="row base">
      {row.id}
      <div className="columns">
        {row.children.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Row;
