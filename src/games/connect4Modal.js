import React from 'react';


function Connect4Modal({closeConnect4}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => closeConnect4(false)}>X</button>
                <div className="modalHeader">
                    <h3>Connect 4</h3>
                </div>
                <div className="modalBody">
                    <p>Connect 4 Game Placeholder</p>
                </div>
                <div className="modalFooter">
                </div>
            </div>
        </div>
    );
};

export default Connect4Modal;