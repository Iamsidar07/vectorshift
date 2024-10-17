// toolbar.js

import { DraggableNode } from "./draggableNode";
import { FaGoogle, FaDiscord, FaBraille } from "react-icons/fa";
import { SiLinear, SiNotion } from "react-icons/si";
import { ImOnedrive } from "react-icons/im";
import { MdInput, MdOutlineOutput } from "react-icons/md";
import { CiText } from "react-icons/ci";

const nodes = [
  {
    type: "customInput",
    label: "Input",
    icon: <MdInput/>
  },
  {
    type: "llm",
    label: "LLM",
    icon: <FaBraille/>
  },
  {
    type: "customOutput",
    label: "Output",
    icon: <MdOutlineOutput />
  },
  {
    type: "text",
    label: "Text",
    icon: <CiText/>
  },
  {
    type: "google",
    label: "Google",
    icon: <FaGoogle/>
  },
  {
    type: "discord",
    label: "Discord",
    icon: <FaDiscord/>
  },
  {
    type: "linear",
    label: "Linear",
    icon: <SiLinear/>
  },

  {
    type: "onedrive",
    label: "Onedrive",
    icon: <ImOnedrive/>
  },
  {
    type: "notion",
    label: "Notion",
    icon: <SiNotion/>
  },
];

export const PipelineToolbar = () => {
  return (
      <div
        className='flex flex-wrap gap-2'
      >
        {nodes?.map(({ label, type, icon }) => (
          <DraggableNode key={type} label={label} type={type} icon={icon} />
        ))}
      </div>
  );
};
