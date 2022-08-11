import React from 'react';


function MemoryModal({closeMemory}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeMemory(false)}>X</button>
                <div className="modalHeader">
                    <h3>Memory</h3>
                </div>
                <div className="modalBody">
                    <p>Memory Game Placeholder</p>
                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>
    );
};

export default MemoryModal;