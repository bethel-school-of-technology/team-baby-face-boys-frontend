import React from 'react';


function BreakoutModal({closeBreakout}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeBreakout(false)}>X</button>
                <div className="modalHeader">
                    <h3>Breakout</h3>
                </div>
                <div className="modalBody">
                    <p>Breakout Game Placeholder</p>
                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>
    );
};

export default BreakoutModal;