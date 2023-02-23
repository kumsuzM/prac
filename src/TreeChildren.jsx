import React from "react";
import TreeItem from "./TreeItem.jsx";

const TreeChildren = ({ children, indentLvl }) => {
  console.log(children);
  const padding = indentLvl * 20;
  return (
    <div style={{ paddingLeft: `${padding}px`, color: "green" }}>
      {children.map((item) => {
        return (
          <TreeItem
            name={item.name}
            children={item.children || []}
            key={item.id}
            indentLvl={indentLvl}
          />
        );
      })}
    </div>
  );
};

export default TreeChildren;
