// submit.js

import { useStore } from "./store";
import axios from "axios";
import { useState } from "react";
import {toast} from "sonner"
import { CgSpinner } from "react-icons/cg";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    setIsLoading(true)
    const pipeline = {
      nodes,
      edges,
    };
    try {
      const res = await axios.post(
        "https://diverse-lungfish-manojkumar-1f68c036.koyeb.app/pipelines/parse",
        pipeline,
      );
      console.log("received", res.data);
      toast.success(
        `Number of nodes is ${res.data.num_nodes} and number of edges is ${res.data.num_edges}. The graph is ${res.data.is_dag ? "a" : "not a"} DAG.`,
      );
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Something went wrong!")
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
      disabled={isLoading}
        onClick={handleSubmit}
        className="px-3 py-1.5 bg-violet-500 cursor-pointer rounded text-white font-semibold disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        {isLoading && <CgSpinner className="animate-spin h-5 w-5 mr-2" />}
        Submit
      </button>
    </div>
  );
};
