import React from "react";
import BaseNode from "../components/BaseNode";

export const DiscordNode = ({ id, data, ...otherProps }) => {
  const inputHandles = [{ id: `${id}-input1` }];

  const outputHandles = [{ id: `${id}-output` }];
  return (
    <BaseNode
      {...otherProps}
      id={id}
      text={data.nodeType}
      showInputHandle
      showOutputHandle
      inputHandles={inputHandles}
      outputHandles={outputHandles}
    >
      <div>
        <span>Custom content goes here!</span>
      </div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
    </BaseNode>
  );
};
