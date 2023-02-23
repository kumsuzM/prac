import { useState } from "react";
import TreeChildren from "./TreeChildren";
// Arrow characters to use: ▼ ▶ •

const TreeItem = ({ children, name, indentLvl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  let dotStyle = "•";
  if (children.length) {
    dotStyle = isExpanded ? "▼" : "▶";
  }

  return (
    <div>
      <li>
        <span onClick={() => setIsExpanded(!isExpanded)}>{dotStyle} </span>
        {name}
      </li>
      {isExpanded && (
        <TreeChildren children={children} indentLvl={indentLvl + 1} />
      )}
    </div>
  );
};

export default TreeItem;
