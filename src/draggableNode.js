// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    return (
      <div
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        className="cursor-grab px-3 py-1.5 flex items-center rounded-lg border justify-center flex-col"
        draggable
      >
        {icon}
          <span className="text-sm opacity-70" >{label}</span>
      </div>
    );
  };
