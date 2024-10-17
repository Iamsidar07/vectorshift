// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data, selected }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div
      className={`bg-white ring-1 hover:ring-2 hover:ring-violet-300 ${selected ? "ring-2 ring-violet-300" : "ring-violet-200"} rounded`}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          background: "white",
          borderRadius: "50%",
          transform: "scale(2.2) translateY(-50%)",
        }}
        className="ring-1 hover:ring-2 ring-violet-200"
      />
      <div className="p-5">
        <div className="flex flex-col">
          <div>
            <span>Output</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">Name:</label>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="font-bold text-sm">Type</label>
            <select
              value={outputType}
              onChange={handleTypeChange}
              className="w-full outline-none bg-transparent border rounded p-2"
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
