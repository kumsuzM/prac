import React from "react";
import TreeChildren from "./TreeChildren";
// Arrow characters to use: ▼ ▶ •

const Tree = ({ data }) => {
  console.log(data);
  return <TreeChildren children={data} indentLvl={0} />;
};

export default Tree;
