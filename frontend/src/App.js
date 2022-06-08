import { useCallback, useState } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, applyEdgeChanges, applyNodeChanges, Background, useReactFlow, Controls } from 'react-flow-renderer';

import TextUpdaterNode from './components/TextUpdaterNode.js';

import './components/text-updater-node.css';

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

const edgeOptions = {
  animated: true
};


function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds))
      console.log("Node changes: ", changes)
    },
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => {
      setEdges((eds) => addEdge(connection, eds))
      console.log(connection) //in connection the source and destination of the node which gets connected is present.
    },
    [setEdges]
  );

  let cnt = 2;
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const newNode = {
      id: `node-${cnt++}`, type: 'textUpdater', position: { x: Math.random() * 20, y: Math.random() * 300 }, data: { value: 123 }
    };
    console.log("New node is: ", newNode)
    reactFlowInstance.addNodes(newNode);
  }, []);

  const handleSubmit = (event) => {
    let concept = document.getElementById('concept').value;
    console.log("Concept entered is: ", concept)
  }

  return (
    <>

      <div className='headerdiv'>
        <button onClick={onClick} className="btn-add">
          Add Node
        </button>

        <form className='formclass' onSubmit={handleSubmit}>
          <input type="text" id='concept' placeholder='Enter the concept'></input>
          <button className='submitbtn'>Submit</button>
        </form>
      </div>
      <ReactFlow style={{ height: "640px", width: "auto" }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultEdgeOptions={edgeOptions}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />

        <Controls />

      </ReactFlow>

    </>
  );
}

// export default Flow;

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

