// inputNode.js

import { useState } from "react";
import BaseNode from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const outputHandles = [{ id: `${id}-value`, position: "50%" }];

  return (
    <BaseNode
      text={data.nodeType}
      showOutputHandle
      outputHandles={outputHandles}
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold">Name</label>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="px-3 py-1.5 outline-none border rounded-md"
        />
        <label className="text-sm font-bold">Type</label>

        <select
          className="w-full outline-none bg-transparent border p-2 rounded"
          value={inputType}
          onChange={handleTypeChange}
        >
          <option value="Text" className="bg-white border-none">
            Text
          </option>
          <option value="File" className="bg-white border-none">
            File
          </option>
        </select>
      </div>
    </BaseNode>
  );
};
