import React from "react";
import "./App.css"; // Import the CSS file for styling
import skillTreeData from "./skillTreeData.json";

interface SkillNode {
  id: number;
  name: string;
  description: string;
  requiredLevel: number;
  prerequisites: number[];
  children: SkillNode[];
}

interface SkillTreeProps {
  nodes: SkillNode[];
}

const SkillTree: React.FC<SkillTreeProps> = ({ nodes }) => (
  <ul className="skill-tree">
    {nodes.map((node) => (
      <li key={node.id} className="skill-node">
        <strong>{node.name}</strong>
        <p>{node.description}</p>
        {node.children.length > 0 && <SkillTree nodes={node.children} />}
      </li>
    ))}
  </ul>
);

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">{skillTreeData.name}</h1>
      <SkillTree nodes={skillTreeData.nodes} />
    </div>
  );
};

export default App;
