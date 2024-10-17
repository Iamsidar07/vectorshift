// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data, selected }) => {
  return (
    <div
      className={`bg-white ring-1 hover:ring-2 hover:ring-violet-300 ${selected ? "ring-2 ring-violet-300" : "ring-violet-200"} rounded`}
    >
      <div className="p-4">
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-system`}
          style={{
            top: `${100 / 3}%`,
            background: "white",
            borderRadius: "50%",
            transform: "scale(1.2) translateY(-50%)",
          }}
          className="ring-1 hover:ring-2 ring-violet-200"
        />
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-prompt`}
          style={{
            top: `${200 / 3}%`,
            background: "white",
            borderRadius: "50%",
            transform: "scale(1.2) translateY(-50%)",
          }}
          className="ring-1 hover:ring-2 ring-violet-200"
        />
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-response`}
          style={{
            background: "white",
            borderRadius: "50%",
            transform: "scale(1.2) translateY(-50%)",
          }}
          className="ring-1 hover:ring-2 ring-violet-200"
        />
        <div>
          <span>LLM</span>
        </div>
        <div>
          <span>This is a LLM.</span>
        </div>
      </div>
    </div>
  );
};
