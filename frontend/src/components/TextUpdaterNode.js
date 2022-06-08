import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} />
            <Handle type="target" position={Position.Top} id="1" style={{ left: 10 }} />
            <Handle type="target" position={Position.Top} id="2" style={{ left: 50 }} />
            <Handle type="target" position={Position.Top} id="3" style={{ left: 130 }} />
            <Handle type="target" position={Position.Top} id="4" style={{ left: 170 }} />

            <Handle type="target" position={Position.Left} id="6" />

            <Handle type="target" position={Position.Right} id="8" />

            <div>
                <input id="text" name="text" onChange={onChange} placeholder="Enter the label" style={{ textAlign: "center" }} />
            </div>
            <Handle type="source" position={Position.Bottom} id="9" style={{ left: 10 }} />
            <Handle type="source" position={Position.Bottom} id="10" style={{ left: 50 }} />
            <Handle type="source" position={Position.Bottom} id="11" />
            <Handle type="source" position={Position.Bottom} id="12" style={{ left: 130 }} />
            <Handle type="source" position={Position.Bottom} id="13" style={{ left: 170 }} />



        </div >
    );
}

export default TextUpdaterNode;