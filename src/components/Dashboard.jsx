import React, { useState } from "react";
import { createContext } from "react";
import { initialContainerData, SIDEBAR_ITEMS } from "../data/initial-data";
import Row from "./Row";
import SideBarItem from "./SideBarItem";

export const ComponentContext = createContext();

const Dashboard = () => {
  const [layout, setLayout] = useState(initialContainerData.layout);
  const [components, setComponents] = useState(initialContainerData.components);

  return (
    <ComponentContext.Provider value={components}>
      <div className="body">
        <div className="sideBar">
          {SIDEBAR_ITEMS.map((sideBarItem, index) => (
            <SideBarItem key={sideBarItem.id} sideBarItem={sideBarItem} />
          ))}
        </div>
        <div className="pageContainer">
          <div className="page">
            {layout.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </div>
        </div>
      </div>
    </ComponentContext.Provider>
  );
};

export default Dashboard;
