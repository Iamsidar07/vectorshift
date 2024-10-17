// submit.js

import { useStore } from "./store";
import axios from "axios";
import {toast} from "sonner"

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async (e) => {
    const pipeline = {
      nodes,
      edges,
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        pipeline,
      );
      console.log("received", res.data);
      toast.success(
        `Number of nodes is ${res.data.num_nodes} and number of edges is ${res.data.num_edges}. The graph is ${res.data.is_dag ? "a" : "not a"} DAG.`,
      );
    } catch (error) {
      console.log("something went wrong", error);
      toast.error("Something went wrong!")
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
        onClick={handleSubmit}
        className="px-3 py-1.5 bg-violet-500 rounded text-white font-semibold"
      >
        Submit
      </button>
    </div>
  );
};
