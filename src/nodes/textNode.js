// textNode.js

import { useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data, selected }) => {
  const [variables, setVariables] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  // It is neccessary during using multiple handle
  useEffect(() => {
    console.log("update");
    updateNodeInternals(id);
  }, [id, updateNodeInternals, variables]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "100%";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [value]);

  const extractVariables = (text) => {
    const regex = /"{{(.*?)}}"/g; // Regular expression to match {{variable}}
    const matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1].trim()); // Extract and trim the variable name
    }

    return matches;
  };

  const handleTextChange = (e) => {
    setValue(e.target.value);
    const extractedVars = extractVariables(e.target.value);
    setVariables(extractedVars);
  };

  return (
    <div
      className={`bg-white border ring-1 hover:ring-2 hover:ring-violet-300/20 ${selected ? "ring-2 ring-violet-300/20" : "ring-violet-200/20"} rounded-md`}
    >
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: "white",
          borderRadius: "50%",
          transform: "scale(1.2) translateY(-50%)",
        }}
        className="ring-1 hover:ring-2 ring-violet-200"
      />

      {variables?.map((variable, i) => (
        <Handle
          type="target"
          position={Position.Left}
          id={`handle-${i}`}
          key={i}
          className="ring-1 hover:ring-2 ring-violet-200"
          style={{
            top: (i + 1) * 30 + "%",
            background: "white",
            borderRadius: "50%",
            transform: "scale(1.2) translateY(-50%)",
          }}
        >
          <p className="-left-[3.5rem] relative text-xs opacity-50">
            {variable}
          </p>
        </Handle>
      ))}
      <div className="p-4">
        <div>
          <span>Text</span>
        </div>

        <label htmlFor="text" className="font-bold text-sm">
          Content
        </label>
        <textarea
          id="text"
          ref={inputRef}
          value={value}
          onChange={handleTextChange}
          placeholder="Type your text here..."
          className="px-3 py-2.5 text-input max-h-[150px] w-full h-full outline-none border rounded-md hide_scrollbar"
        />
      </div>
    </div>
  );
};
