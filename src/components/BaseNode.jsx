import React from "react";
import { Handle, Position } from "reactflow";
import { clsx } from "clsx";

const BaseNode = ({
  id,
  text,
  style,
  children,
  showInputHandle = false,
  showOutputHandle = false,
  inputHandles = [],
  outputHandles = [],
  selected,
  className,
}) => {
  const renderHandles = (handles, type, position) => {
    return handles.map((handle) => (
      <Handle
        key={handle.id}
        type={type}
        position={position}
        id={handle.id}
        style={{
          background: "white",
          borderRadius: "50%",
          transform: "scale(1.2) translateY(-50%)",
        }}
        className="ring-1 hover:ring-2 ring-violet-200"
      />
    ));
  };

  return (
    <div
      className={clsx(
        "bg-white ring-1 hover:ring-2 ring-violet-200/50 hover:ring-violet-300/20 rounded-md border border-blue-100 transition-all",
        {
          "ring-2 ring-violet-300/20": selected,
        },
        className,
      )}
      style={style}
    >
      {showInputHandle && renderHandles(inputHandles, "target", Position.Left)}
      {showOutputHandle &&
        renderHandles(outputHandles, "source", Position.Right)}
      <div className="p-4">
        <div>
          <span>{text}</span>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default BaseNode;
