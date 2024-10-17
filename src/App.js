import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import {SubmitButton} from "./submit"

function App() {
  return (
    <div className="p-2 bg-white/60 h-screen">
      <div className="ring-[1px] ring-gray-900/10 rounded-lg bg-white shadow-2xl h-full">
      <div className="flex items-center justify-between p-2 border-b">
      <PipelineToolbar />
      <SubmitButton/>
      </div>
      <PipelineUI />
      </div>
    </div>
  );
}

export default App;
